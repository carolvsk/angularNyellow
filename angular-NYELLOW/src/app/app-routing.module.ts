import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionariosComponent } from './components/funcionarios/funcionarios.component';
import { CardsComponent } from './components/cards/cards.component';
import { HomeComponent } from './components/home/home.component';
import { loginComponent } from './components/login/login.component';
import { ConectaComponent } from './conecta/conecta.component';

const routes: Routes = [
  { path: '', component:HomeComponent},  
  { path: 'card', component: CardsComponent},   
  { path: 'funcionario',  component: FuncionariosComponent }  ,  
  { path: 'login',  component: loginComponent },
  {path: 'conecta', component:ConectaComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
