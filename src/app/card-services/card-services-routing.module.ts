import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardServicesPage } from './card-services.page';

const routes: Routes = [
  {
    path: '',
    component: CardServicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardServicesPageRoutingModule {}
