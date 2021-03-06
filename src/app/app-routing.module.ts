import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'form', component:FormularioComponent},
  {path: '**', component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
