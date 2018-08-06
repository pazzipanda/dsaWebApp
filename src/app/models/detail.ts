import { Scene } from './scene';

export class Detail {
  title: string;
  text: string;


  //number in storys boolean-array.
  bool: number = null;
  //text to be displayed if bool is true
  textBool?: string;


  toggleBool?: number[];

  flipBool?: number[];

  nextScene?: number;
}
