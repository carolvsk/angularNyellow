import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionariosComponent } from './components/funcionarios/funcionarios.component';
import { CardsComponent } from './components/cards/cards.component';
import { HomeComponent } from './components/home/home.component';
import { DocumentacaoComponent } from './components/documentacao/documentacao.component';

const routes: Routes = [
  { path: '', component:HomeComponent},  
  { path: 'card', component: CardsComponent},   
  { path: 'funcionario',  component: FuncionariosComponent }  ,  
  { path: 'documentacao',  component: DocumentacaoComponent }    

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
