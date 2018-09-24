import {Component, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';

import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/catch';

import {RestApiService} from './rest-api.service';

import {config} from './app.node-server.config';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  featureType = 'shopping_list';

  url = config.serverHost + ':' + config.serverPort + '/test';

  message: string;

  constructor(private http: Http, private restApi: RestApiService) {
  }

  onFeatureSelected(feature: string) {
    this.featureType = feature;
  }

  async serverTest() {
    this.http.get(this.url)
      .map((response: Response) => response.json())
      .catch((err: Response) => {
        return Observable.throw(err.json());
      })
      .subscribe(
        data => this.message = Date() + 'Response: ' + data['message'],
        error => console.error(error)
      );
  }

  async serverTestNew() {
    const dataReceived = await this.restApi.get(this.url);
    this.message = Date() + ' Response new: ' + dataReceived['message'];
  }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyCdNOmlt6VkqCNnjheY23BCc6YYvKCDBSw',
      authDomain: 'recipebookandshoppinglistapp.firebaseapp.com'
    });
  }
}
