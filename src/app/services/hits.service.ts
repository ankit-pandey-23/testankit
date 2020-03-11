import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { ApiConstant } from '../constants/constant'

@Injectable({
  providedIn: 'root'
})
export class HitsService {

  constructor(public httpClient:HttpClient) { }
  getLatestPolls():Observable<ApiConstant>{
    return this.httpClient.get<ApiConstant>(ApiConstant.API_ENDPOINT+'search_by_date?tags=story');
  }
}
