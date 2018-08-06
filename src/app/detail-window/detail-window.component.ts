import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Detail } from '../models/detail';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-detail-window',
  templateUrl: './detail-window.component.html',
  styleUrls: ['./detail-window.component.css']
})
export class DetailWindowComponent implements OnInit {
  @Output() sceneChange = new EventEmitter();
  @Input()  childDetail: Detail;
  text: string

  constructor(private storyService: StoryService) {
  }

  ngOnInit() {
    this.text='';
  }
  ngOnChanges() {
    if (this.childDetail == null) {
      this.text='';
    } else {
      if (this.childDetail.nextScene === null) {

        //display text or textBool
        if (this.childDetail.bool !== 0 && this.storyService.story.booleans[this.childDetail.bool]) {
        setTimeout(() => this.text = this.childDetail.textBool);
        } else {
          setTimeout(() => this.text = this.childDetail.text);
        }

        //change a bool
        if (this.childDetail.flipBool.length) {
          var i;
          for (i = 0; i < this.childDetail.flipBool.length; i++) {
            this.storyService.flipBool(this.childDetail.flipBool[i]);
          }
        }
        //toggle a bool
        if (this.childDetail.toggleBool.length) {
          var j;
          for (j = 0; j < this.childDetail.toggleBool.length; j++) {
            this.storyService.toggleBool(this.childDetail.toggleBool[j]);
          }
        }
      }
      else {
        //change scene
        this.text='';
        this.sceneChange.emit(this.childDetail.nextScene);
      }
    }
  }

}
