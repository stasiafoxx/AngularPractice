import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],

})

export class UserComponent {
  // Properties

  firstName: string;
  lastName: string;
  age: number;
  address;

  foo: any;
  hasKids: boolean;
  numberArray: number[];
  stringArray: string [];
  mixedArray: any[];
  myTuple: [string, number, boolean];
  unusable: void;
  // Methods
  constructor () {
    this.firstName = 'Stasia';
    this.lastName = 'Salinas';
    this.age = 23;

    this.address = {
      street: '126 N Van Ness',
      city: 'Fresno',
      state: 'CA'
    };

    this.foo = true;
    this.hasKids = false;
    this.numberArray = [1, 2, 3];
    this.stringArray = ['hello', 'world'];
    this.mixedArray = [true, undefined, 'hello'];

  }

}
