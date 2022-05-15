import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DadosPessoaisComponent } from './components/dados-pessoais/dados-pessoais.component';
import { DadosEnderecoComponent } from './components/dados-endereco/dados-endereco.component';
import { DadosLoginComponent } from './components/dados-login/dados-login.component';

@NgModule({
  declarations: [
    AppComponent,
    DadosPessoaisComponent,
    DadosEnderecoComponent,
    DadosLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
