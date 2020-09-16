import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxWhastappButtonModule } from "ngx-whatsapp-button";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ComidasComponent } from './comidas/comidas.component';
import { PastasComponent } from './comidas/pastas/pastas.component';
import { SalsasComponent } from './comidas/salsas/salsas.component';
import { PostresComponent } from './comidas/postres/postres.component';
import { FooterComponent } from './footer/footer.component';
import { Routes, RouterModule } from '@angular/router';
import { PastasPropiedadesComponent } from './comidas/pastas-propiedades/pastas-propiedades.component';
import { CarritoComponent } from './comidas/carrito/carrito.component';
import { CarritoItemComponent } from './comidas/carrito/carrito-item/carrito-item.component';
import {AlertComponent} from './Alert/alert.component'

const routes: Routes = [
  { path:'', redirectTo: '/pastas', pathMatch: 'full'},
  { path: 'pastas-component', component: PastasComponent},
  { path: 'salsas-component', component: SalsasComponent },
  { path: 'postres-component', component: PostresComponent },
  { path: 'alert-component', component: AlertComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ComidasComponent,
    PastasComponent,
    SalsasComponent,
    PostresComponent,
    FooterComponent,
    PastasPropiedadesComponent,
    CarritoComponent,
    CarritoItemComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    NgxWhastappButtonModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
