import { Component, OnInit } from '@angular/core';
import { Detail } from '../models/detail';

@Component({
  selector: 'app-detail-window',
  templateUrl: './detail-window.component.html',
  styleUrls: ['./detail-window.component.css']
})
export class DetailWindowComponent implements OnInit {
  text: String;
  constructor() {
  }

  ngOnInit() {
  }

  showDetail(detailText: string) {
    this.text = detailText;
  }
}
