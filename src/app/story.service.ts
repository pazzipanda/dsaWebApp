import { Injectable } from '@angular/core';
import { Story } from './models/story';
import { Scene } from './models/scene';
import { Object } from './models/object';
import { Detail } from './models/detail';


@Injectable({
  providedIn: 'root'
})
export class StoryService {
  story: Story;
  currentScene: Scene;
  nextScene: Scene;


  testDetail1: Detail;
  testDetail2: Detail;
  testDetail3: Detail;

  testDetail4: Detail;
  testDetail5: Detail;
  testDetail6: Detail;

  testDetail7: Detail;
  testDetail8: Detail;

  testDetail9: Detail;
  testDetail10: Detail;
  testDetail11: Detail;
  testDetail12: Detail;

  testObject1: Object;
  testObject2: Object;
  testObject3: Object;
  testObject4: Object;
  testObject5: Object;

  testObject6: Object;
  testObject7: Object;
  testObject8: Object;

  testObject9: Object;
  testObject10: Object;
  testObject11: Object;
  testObject12: Object;


  constructor() {
    this.testDetail1 = {title: 'Ansehen', bool: 0, text: 'Die Truhe ist etwa einen halben Schritt breit, halb so tief aber dafür fast genau so hoch. Die Bretter sind aus robustem Holz, das die Jahre gut überstanden hat. Scharniere und Schloss sind aus massivem Eisen.', nextScene: null};
    this.testDetail2 = {title: 'Öffnen', bool: 1, text: 'Die Truhe ist leider verschlossen, da fehlt wohl ein Schlüssel', textBool: 'Erst denkst du, die Truhe sei verschlossen. Nach einem kräftigen Ruck merkst du aber, dass die Scharniere einfach nur verrostet waren. Als du die Truhe mühsam geöffnet hast merkst du allerdings, dass sie, bis auf ein paar Spinnweben, leer ist.', nextScene: null};
    this.testDetail3 = {title: 'Mitnehmen', bool: 0, text: 'Dafür ist die Truhe nun leider doch ein wenig zu schwer.', nextScene: null};

    this.testDetail4 = {title: 'Ansehen', bool: 0, text: 'Die Schatulle ist aus blaum bemaltem Holz,auf dem kindliche Motiven wie Tiere und Sterne aufgemalt sind. Besonders der Fuchs scheint dem Künstler wohl gefallen zu haben, ist er doch vergleichsweise oft abgebildet. Die Scharniere und ein kleiner Riegel zum Öffnen sind schaunbar aus hochwertigem Silber gemacht und wirken filigran hergestellt. Insgesamt ist die Schatulle etwa so groß wie ein Schuhkarton.', nextScene: null};
    this.testDetail5 = {title: 'Schütteln', bool: 0, text: 'Als du die Schatulle in die Hand nimmst merkst du, dass sie recht schwer ist. Ein kurzes Schütteln lässt dich hoffnungsvoll aufhorchen: Metallisches Geklimper.', nextScene: null};
    this.testDetail6 = {title: 'Öffnen', bool: 0, text: '', nextScene: 1};

    this.testDetail7 = {title: 'Ansehen', text: 'Jede. Menge. Geld!', bool: 0, nextScene: null};
    this.testDetail8 = {title: 'Einstecken', bool: 0, text: 'Gute Idee. Du fühlst dich auf einmal bedeutend wohlhabender.', nextScene: null};

    this.testDetail9 = {title: 'Ansehen', bool: 0, text: 'Die Schatulle ist aus blaum bemaltem Holz,auf dem kindliche Motiven wie Tiere und Sterne aufgemalt sind. Besonders der Fuchs scheint dem Künstler wohl gefallen zu haben, ist er doch vergleichsweise oft abgebildet. Die Scharniere und ein kleiner Riegel zum Öffnen sind schaunbar aus hochwertigem Silber gemacht und wirken filigran hergestellt. Insgesamt ist die Schatulle etwa so groß wie ein Schuhkarton.', nextScene: null};
    this.testDetail10 = {title: 'Weglegen',bool: 0, text: '', nextScene: 0};

    this.testDetail11 = {title: 'Ansehen', bool: 0, text: 'Der Schlüssel wirkt schon älter, hat schon einige Rostflecken,doch ist er sicher noch dazu fähig, zu tun wofür er einst geschaffen wurde.', nextScene: null};
    this.testDetail12 = {title: 'Einstecken', bool: 2, flipBool: [1, 2], text: 'Du nimmst den Schlüßel an dich.', textBool: 'Du hast den Schlüßel schon', nextScene: null };

    this.testObject1 = {
      text: 'Als du den Keller betrittst findest du vor allem eines: Viel Platz. Keine Regale, keine Schränke, so gut wie gar nichts findest du hier vor. Nur an der der Treppe gegenüberliegenden Wand siehst du eine ',
      details: []
    }
    this.testObject2 = {
      text: 'staubige Truhe ',
      details: [this.testDetail1, this.testDetail2, this.testDetail3]
    }
    this.testObject3 = {
      text: 'vor dir stehen, neben der noch eine ',
      details: []
    }
    this.testObject4 = {
        text: 'kleine Schatulle ',
        details: [this.testDetail4, this.testDetail5, this.testDetail6]
      }
    this.testObject5 = {
        text: 'ganz verloren da liegt.',
        details: []
      }
    this.testObject6 = {
        text: 'Du öffnest die ',
        details: []
      }
    this.testObject7 = {
        text: 'Schatulle ',
        details: [this.testDetail9, this.testDetail10]
      }
    this.testObject8 = {
        text: 'mit Leichtigkeit und schon erfreust du dich dich am Anblick ',
        details: []
      }
    this.testObject9 = {
        text: 'duzender Goldmünzen',
        details: [this.testDetail7, this.testDetail8]
      }
    this.testObject10 = {
        text: ', die da jemand fleißig gespart hat. Ebenso findest du hier einen ',
        details: []
      }
    this.testObject11 = {
        text: 'eisernen Schlüssel. ',
        details: [this.testDetail11, this.testDetail12]
      }
    this.testObject12 = {
        text: 'Wofür der wohl gut ist?',
        details: []
      }
    this.currentScene = {
      title: 'Kellerraum',
      text: [this.testObject1, this.testObject2, this.testObject3, this.testObject4, this.testObject5]
    }
    this.nextScene = {
      title: 'Schatulle',
      text: [this.testObject6, this.testObject7, this.testObject8, this.testObject9, this.testObject10, this.testObject11, this.testObject12]
    }

    this.story = {
      title: 'Das Geheimniss des Kellers',
      scenes: [this.currentScene, this.nextScene],
      booleans: [false, false, false],
      numbers: []
    }
  }

  getStory(): Story {
    return this.story;
  }
  toggleBool(i: number): void {
    this.story.booleans[i] = !this.story.booleans[i];
  }
  flipBool(i: number): void {
    this.story.booleans[i] = true;
  }
}
