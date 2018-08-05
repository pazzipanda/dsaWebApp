import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Detail } from '../models/detail';
import { Object } from '../models/object';
import { ObjectService } from '../object.service';
import { DetailWindowComponent } from '../detail-window/detail-window.component';

@Component({
  selector: 'app-button-bar',
  templateUrl: './button-bar.component.html',
  styleUrls: ['./button-bar.component.css']
})
export class ButtonBarComponent implements OnInit {
  @Output()
  notifyDetailWindow: EventEmitter<string> = new EventEmitter<string>();

  details: Detail[];

  constructor(private objectService: ObjectService) {

  }
  ngOnInit() {
    this.details = [];
  }

  showDetail(detail: string): void {
    this.notifyDetailWindow.emit(detail);
  }

  showObject(object: Object): void {
    this.details = object.details;
    this.notifyDetailWindow.emit('');
  }
}
