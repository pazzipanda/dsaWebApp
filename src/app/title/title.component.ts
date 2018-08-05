import { Component, OnInit } from '@angular/core';
import { SceneService } from  '../scene.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  title: string;
  constructor(private sceneService: SceneService) { }

  ngOnInit() {
    this.getTitle();
  }

  getTitle(): void {
    this.title = this.sceneService.getScene().title;
  }

}
