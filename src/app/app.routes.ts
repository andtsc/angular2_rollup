import { Routes, RouterModule } from '@angular/router';
// import { routing } from './shared/components/home/home.routes';
// import { routing } from './shared/components/test/test.routes';

const routes: Routes = [
  { path: '', loadChildren: './view/home/home.module'},
];

export const routing = RouterModule.forRoot(routes);
