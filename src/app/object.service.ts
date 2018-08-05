import { Injectable } from '@angular/core';
import { Detail } from './models/detail';

@Injectable({
  providedIn: 'root'
})
export class ObjectService {
  text: string;
  DETAILS: Detail[];

  //test data
  det1: Detail;
  det2: Detail;
  det3: Detail;


  constructor() {
    //test data
    this.text = 'Hier könnte ihre Werbung stehen';
    this.det1 = {title: 'Test 1', text: 'Blah 1'};
    this.det2 = {title: 'Test 2', text: 'Blah 2'};
    this.det3 = {title: 'Test 3', text: 'Blah 3'};
    this.DETAILS = [this.det1, this.det2, this.det3];
  }

  getDetail(): Detail[] {
    return this.DETAILS;
  }
  showDetail(detail: Detail): void {
    this.text = detail.text;
  }
}
