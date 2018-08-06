import { Component, OnInit } from '@angular/core';
import { Story } from './models/story';
import { StoryService } from './story.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  story: Story;

  constructor(private storyService: StoryService) {

  }

  ngOnInit() {
    this.story = this.storyService.getStory();
    this.title = this.story.title;
  }
}
