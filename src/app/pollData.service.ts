import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiPathService {
  private pollApiPath: string = environment.apiPath;

  constructor( private authHttp: HttpClient ) { }

  public getData(url: string) {
    return this.authHttp.get(this.pollApiPath + url);
  }

  public postData(url: string, data: any) {
    return this.authHttp.post(this.pollApiPath + url, data);
  }

  public putData(url: string, data: any) {
    return this.authHttp.put(this.pollApiPath + url, data);
  }

  public deleteData(url:string, data: any) {
    return this.authHttp.delete(this.pollApiPath + url, data);
  }


}

