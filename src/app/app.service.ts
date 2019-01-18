import { Injectable } from '@angular/core';
import * as data from './names.json';

@Injectable()
export class UserdataService {
  names = (<any>data).name;

  getUserData() {
    let arr = this.names;

    function shuffle(array) {
      let tmp: any, current: any, top = array.length;
      if (top) {
          while (--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
          }
        }
      return array;
    }

    arr = shuffle(arr);

    // let myArray = arr;
    // let rand = myArray[Math.floor(Math.random() * myArray.length)];console.log(rand);
    return arr;
  }

}
