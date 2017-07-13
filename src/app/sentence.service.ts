import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SentenceService {

  constructor(private http: Http) { }

  getSentences() {
    return this.http.get('http://localhost:8080/api/v1/libs/')
      .map(response => response.json());
  }
}
