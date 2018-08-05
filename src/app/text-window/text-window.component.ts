import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Scene } from '../models/scene';
import { Object } from '../models/object';
import { SceneService } from '../scene.service';

@Component({
  selector: 'app-text-window',
  templateUrl: './text-window.component.html',
  styleUrls: ['./text-window.component.css']
})
export class TextWindowComponent implements OnInit {
  currentScene: Scene;

  @Output()
  notifyButtonBar: EventEmitter<Object> = new EventEmitter<Object>();


  constructor(private sceneService: SceneService) {
    }

  ngOnInit() {
    this.currentScene = this.sceneService.getScene();
  }

  lookAtObject(object: Object): void {
    this.notifyButtonBar.emit(object);
  }

}
