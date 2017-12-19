import { Component } from '@angular/core';

@Component({
  selector: "user",
  template: `<h1>Hello {{name}}</h1>
    <p>{{ email }}</p>
    <p>{{ address.city }}, {{ address.state }}</p>
    <button (click)="showHobbies = !showHobbies">Hobbies</button>
    <ul *ngIf="showHobbies">
      <li *ngFor="let hobby of hobbies">
        {{ hobby }}
      </li>
    </ul>
    <form>
      <div>
        <label>Name</label><br/>
        <input type="text" [(ngModel)]="name" name="name" />
      </div>
      <div>
        <label>Email</label><br/>
        <input type="text" [(ngModel)]="email" name="email" />
      </div>
      <div>
        <label>City</label><br/>
        <input type="text" [(ngModel)]="address.city" name="city" />
      </div>
      <div>
        <label>State</label><br/>
        <input type="text" [(ngModel)]="address.state" name="state" />
      </div>
      <div>
        Add Hobby: <button (click)="showAddHobby()" >Add Hobby</button>
      </div>
    </form>`
})
export class UserComponent {
  name: string;
  email: string;
  address: address;
  hobbies: Array<string>;
  showHobbies: boolean;

  constructor() {
    this.name = "John Doe";
    this.email = "john.doe@abc.com";
    this.address = {
      city: "Bangalore",
      state: "Karnataka" 
    };
    this.hobbies = ["Drinking", "Smoking"];
    this.showHobbies = false;
  }

  showAddHobby() {
    console.log("Showing add hobbies");
  }

  addHobby(hobby: string) {
    this.hobbies.push(hobby);
  }
}

interface address {
  city: string;
  state: string
}
