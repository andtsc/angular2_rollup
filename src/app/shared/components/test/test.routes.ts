import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test.component';

const routes: Routes = [
  { path: 'test', component: TestComponent }
];

export const routing = RouterModule.forChild(routes);
