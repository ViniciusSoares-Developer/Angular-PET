import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DadosEnderecoComponent } from './components/dados-endereco/dados-endereco.component';
import { DadosLoginComponent } from './components/dados-login/dados-login.component';
import { DadosPessoaisComponent } from './components/dados-pessoais/dados-pessoais.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dados/registro', component: DadosLoginComponent},
  {path: 'dados/pessoais', component: DadosPessoaisComponent},
  {path: 'dados/endereco', component: DadosEnderecoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
