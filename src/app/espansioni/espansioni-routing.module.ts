import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspansioniPage } from './espansioni.page';

const routes: Routes = [
  {
    path: '',
    component: EspansioniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspansioniPageRoutingModule {}
