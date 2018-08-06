import { Component, OnInit, Input } from '@angular/core';

import { Story } from '../models/story';
import { Scene } from '../models/scene';
import { StoryService } from '../story.service'

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})

export class TitleComponent implements OnInit {
  title: string;
  currentScene: number;
  childStory: Story;

  constructor(private sS: StoryService) {
    this.childStory = this.sS.getStory();
    this.currentScene = 0;
  }

  ngOnInit() {
    setTimeout(() => this.getTitle(this.currentScene), 0);
  }

  getTitle(i: number): void {
    this.title = this.childStory.scenes[i].title;
  }
  sceneChange(i: number) {
    this.currentScene = 1;
    setTimeout(() => this.getTitle(this.currentScene), 0);
  }
}
