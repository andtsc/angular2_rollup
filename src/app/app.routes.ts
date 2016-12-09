import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './view/home/home.module'},
  { path: '/test', loadChildren: './view/test/test.module'}
];

export const routing = RouterModule.forRoot(routes);
