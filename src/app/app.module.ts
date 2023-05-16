import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormSchieramentoComponent} from './components/form-schieramento/form-schieramento.component';
import {AppRoutingModule} from "./app-routing.module";
import {NgbModule, NgbTimepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CountDownComponent} from './components/count-down/count-down.component';
import { TableSchieramentoComponent } from './components/table-schieramento/table-schieramento.component';
import {ToastrModule} from "ngx-toastr";
import {HttpClientModule} from "@angular/common/http";
import { FormGestioneCreditiComponent } from './components/form-gestione-crediti/form-gestione-crediti.component';
import { GestioneGaraComponent } from './components/gestione-gara/gestione-gara.component';


@NgModule({
  declarations: [
    AppComponent,
    FormSchieramentoComponent,
    CountDownComponent,
    TableSchieramentoComponent,
    FormGestioneCreditiComponent,
    GestioneGaraComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,

    ToastrModule.forRoot({
      timeOut: 5000,
      preventDuplicates: true,
      maxOpened: 1,
    }), // ToastrModule added
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
