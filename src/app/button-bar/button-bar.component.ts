import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Object } from '../models/object';
import { Detail } from '../models/detail';

@Component({
  selector: 'app-button-bar',
  templateUrl: './button-bar.component.html',
  styleUrls: ['./button-bar.component.css']
})
export class ButtonBarComponent implements OnInit {
  @Output() sceneChanger = new EventEmitter();
  @Input() childObject: Object;
  details: Detail[];
  currentDetail: Detail;

  constructor() {  }
  ngOnInit() {
  }

  ngOnChanges() {
    this.details = this.childObject.details;
    this.currentDetail = null;
    }
  showDetail(detail: Detail) {
    this.currentDetail = detail;
  }
  sceneChange(scene: number) {
    this.details = [];
    this.sceneChanger.emit(scene);
  }
}
