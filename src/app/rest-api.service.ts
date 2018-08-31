import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable()
export class RestApiService {

  constructor(private httpClient: HttpClient) {
  }

  get(url: string) {
    return this.httpClient.get(url).toPromise();
  }

  post(url: string, body: any) {
    return this.httpClient.post(url, body).toPromise();
  }
}
