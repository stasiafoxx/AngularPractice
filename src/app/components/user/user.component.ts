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

  // Methods
  constructor () {
    this.firstName = 'Stasia';
  }
