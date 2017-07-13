import { Component } from '@angular/core';
import { SentenceService } from './sentence.service';

@Component({
  selector: 'dl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sentences = [];

  constructor(private sentenceService: SentenceService) {
    this.sentenceService.getSentences()
      .subscribe(response => {
        this.sentences = response.json();
      });
  }
}
