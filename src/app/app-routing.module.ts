import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidexComponent } from './sidex/sidex.component';
import { SideyComponent } from './sidey/sidey.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  { path: '',      component: SidexComponent },
  { path: 'sidey',      component: SideyComponent }
  // { path: '',   redirectTo: '/sidex', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
