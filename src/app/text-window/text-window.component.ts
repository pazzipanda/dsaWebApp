import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { Story } from '../models/story';
import { Scene } from '../models/scene';
import { Object } from '../models/object';

@Component({
  selector: 'app-text-window',
  templateUrl: './text-window.component.html',
  styleUrls: ['./text-window.component.css']
})
export class TextWindowComponent implements OnInit {
  currentScene: Scene;
  currentObject: Object;

  @Input() childStory: Story;
  @Output() sceneChanger= new EventEmitter();


  constructor() {
    }

  ngOnInit() {
    this.currentScene = this.getScene(0);
  }
  getScene(i: number) : Scene {
    return this.childStory.scenes[i];
  }

  lookAtObject(object: Object): void {
    this.currentObject = object;
  }
  sceneChange(scene: number) {
    this.currentScene = this.getScene(scene);
    this.sceneChanger.emit(scene);
  }

}
