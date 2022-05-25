import { HysComponent } from './components/hys/hys.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { EditarComponent } from './componentes/editar/editar.component';
import { AgregarComponent } from './componentes/agregar/agregar.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { SocialComponent } from './components/social/social.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EditarComponent,
    AgregarComponent,
    LoginComponent,
    HeaderComponent,
    LogoAPComponent,
    SocialComponent,
    BannerComponent,
    AcercadeComponent,
    HysComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
