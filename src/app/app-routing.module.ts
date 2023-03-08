import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormSchieramentoComponent} from "./components/form-schieramento/form-schieramento.component";
import {TableSchieramentoComponent} from "./components/table-schieramento/table-schieramento.component";
import {FormGestioneCreditiComponent} from "./components/form-gestione-crediti/form-gestione-crediti.component";

const routes: Routes = [
  {path: '', redirectTo: '/schieramento', pathMatch: 'full'},
  {path: 'schieramento', component: FormSchieramentoComponent},
  {path: 'x5zykmnwp3', component: TableSchieramentoComponent},
  {path: 'JYqD4I0XjpJ7', component: FormGestioneCreditiComponent},
  {path: '**', redirectTo: '/schieramento', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
