import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { HitsService} from '../../services/hits.service';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Hits,ApiResult} from '../../modals/modals';

@Component({
  selector: 'app-polls-list',
  templateUrl: './polls-list.component.html',
  styleUrls: ['./polls-list.component.css']
})
export class PollsListComponent implements OnInit {
  
  displayedColumns: string[] = ['title', 'author', 'url', 'created_at'];
  dataSource : MatTableDataSource<Hits>;
  Subscription:Subscription;

  constructor(public dialog: MatDialog,public hitsService: HitsService) {}

  ngOnInit() {
    this.getPollsResult()
  }

  getPollsResult(){
    this.Subscription = timer(0, 10000).pipe(
      switchMap(() => this.hitsService.getLatestPolls())
    ).subscribe((response:ApiResult) =>{
      this.dataSource = new MatTableDataSource(response.hits);
      this.filterPredicate();
    });
  }

  filterPredicate(){
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return data.title.toLowerCase().includes(filter);
    };
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(row): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {row}
    });

    dialogRef.afterClosed().subscribe();
  }

  ngOnDestroy(){
    this.Subscription.unsubscribe();
  }
}


