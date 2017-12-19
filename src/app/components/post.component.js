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
var posts_service_1 = require("./../services/posts.service");
var PostComponent = (function () {
    function PostComponent(postsService) {
        this.postsService = postsService;
        console.log(this.id);
        this.postsService.getPost(this.id).subscribe(function (post) { return console.log(post); });
    }
    return PostComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], PostComponent.prototype, "id", void 0);
PostComponent = __decorate([
    core_1.Component({
        selector: "about",
        template: "<h1>{{ post }}</h1>",
        providers: [posts_service_1.PostsService]
    }),
    __metadata("design:paramtypes", [posts_service_1.PostsService])
], PostComponent);
exports.PostComponent = PostComponent;
//# sourceMappingURL=post.component.js.map