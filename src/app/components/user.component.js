"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var UserComponent = (function () {
    function UserComponent() {
        this.name = "John Doe";
        this.email = "john.doe@abc.com";
        this.address = {
            city: "Bangalore",
            state: "Karnataka"
        };
        this.hobbies = ["Drinking", "Smoking"];
        this.showHobbies = false;
    }
    UserComponent.prototype.showAddHobby = function () {
        console.log("Showing add hobbies");
    };
    UserComponent.prototype.addHobby = function (hobby) {
        this.hobbies.push(hobby);
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: "user",
        template: "<h1>Hello {{name}}</h1>\n    <p>{{ email }}</p>\n    <p>{{ address.city }}, {{ address.state }}</p>\n    <button (click)=\"showHobbies = !showHobbies\">Hobbies</button>\n    <ul *ngIf=\"showHobbies\">\n      <li *ngFor=\"let hobby of hobbies\">\n        {{ hobby }}\n      </li>\n    </ul>\n    <form>\n      <div>\n        <label>Name</label><br/>\n        <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" />\n      </div>\n      <div>\n        <label>Email</label><br/>\n        <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" />\n      </div>\n      <div>\n        <label>City</label><br/>\n        <input type=\"text\" [(ngModel)]=\"address.city\" name=\"city\" />\n      </div>\n      <div>\n        <label>State</label><br/>\n        <input type=\"text\" [(ngModel)]=\"address.state\" name=\"state\" />\n      </div>\n      <div>\n        Add Hobby: <button (click)=\"showAddHobby()\" >Add Hobby</button>\n      </div>\n    </form>"
    }),
    __metadata("design:paramtypes", [])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map