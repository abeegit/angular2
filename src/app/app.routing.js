"use strict";
var router_1 = require("@angular/router");
var user_component_1 = require("./components/user.component");
var posts_component_1 = require("./components/posts.component");
var post_component_1 = require("./components/post.component");
var appRoutes = [
    {
        path: "",
        component: user_component_1.UserComponent
    },
    {
        path: "posts",
        component: posts_component_1.PostsComponent
    },
    {
        path: "post/:id",
        component: post_component_1.PostComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map