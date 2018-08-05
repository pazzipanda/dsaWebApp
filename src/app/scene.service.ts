import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Scene } from './models/scene';
import { Object } from './models/object';
import { Detail } from './models/detail';

@Injectable({
  providedIn: 'root'
})
export class SceneService {
  currentScene: Scene;


  testDetail1: Detail;
  testDetail2: Detail;
  testDetail3: Detail;
  testObject1: Object;
  testObject2: Object;
  testObject3: Object;

  constructor() {
    this.testDetail1 = {title: 'Ansehen', text: 'Die Truhe ist etwa einen halben Schritt breit, halb so tief aber dafür fast genau so hoch. Die Bretter sind aus robustem Holz, das die Jahre gut überstanden hat. Scharniere und Schloss sind aus massivem Eisen.'};
    this.testDetail2 = {title: 'Öffnen', text: 'Erst denkst du, die Truhe sei verschlossen. Nach einem kräftigen Ruck merkst du aber, dass die Scharniere einfach nur verrostet waren. Als du die Truhe mühsam geöffnet hast merkst du allerdings, dass sie, bis auf ein paar Spinnweben, leer ist.'};
    this.testDetail3 = {title: 'Mitnehmen', text: 'Dafür ist die Truhe nun leider doch ein wenig zu schwer.'};


    this.testObject1 = {
      text: 'Als du den Keller betrittst findest di vor allem eines: Viel Platz. Keine Regale, keine Schränke, so gut wie gar nichts  findest du hier vor. Nur an der der Treppe gegenüberliegenden Wand siehst du eine ',
      details: []
    }
    this.testObject2 = {
      text: 'staubige Truhe ',
      details: [this.testDetail1, this.testDetail2, this.testDetail3]
    }
    this.testObject3 = {
      text: 'vor dir stehen.',
      details: []
    }
    this.currentScene = {
      title: 'Kellerraum',
      text: [this.testObject1, this.testObject2, this.testObject3]
    }

  }

  getScene(): Scene {
    return this.currentScene;
  }
}
