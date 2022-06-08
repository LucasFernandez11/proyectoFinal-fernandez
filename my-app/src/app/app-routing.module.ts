import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/views/home/home.component';
import { PeopleCrudComponent } from './components/views/people-crud/people-crud.component';
import { PeopleCreateComponent } from './components/people/people-create/people-create.component';
import { PeopleUpdateComponent } from './components/people/people-update/people-update.component';
import { PeopleDeleteComponent } from './components/people/people-delete/people-delete.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"people",
    component: PeopleCrudComponent
  },
  {
    path:"people/create",
    component: PeopleCreateComponent
  },
  {
    path:"people/update/:id",
    component: PeopleUpdateComponent
  },
  {
    path:"people/delete/:id",
    component: PeopleDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
