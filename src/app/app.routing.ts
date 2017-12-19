import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './components/user.component';
import { PostsComponent } from './components/posts.component';
import { PostComponent } from './components/post.component';

const appRoutes: Routes = [
  {
    path: "",
    component: UserComponent
  },
  {
    path: "posts",
    component: PostsComponent
  },
  {
    path: "post/:id",
    component: PostComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);