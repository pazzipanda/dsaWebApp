import { Component, OnInit, Input } from '@angular/core';

import { Story } from '../models/story';
import { Scene } from '../models/scene';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})

export class TitleComponent implements OnInit {
  title: string;
  currentScene: number;
  @Input() childStory: Story;

  constructor() {
    this.currentScene = 0;
  }

  ngOnInit() {
  this.getTitle(this.currentScene);
  }

  getTitle(i: number): void {
    this.title = this.childStory.scenes[i].title;
  }
  sceneChange(i: number) {
    this.currentScene = i;
    setTimeout(() => this.getTitle(this.currentScene), 0);
  }
}
