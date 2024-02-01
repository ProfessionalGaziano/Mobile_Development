import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardServicesPageRoutingModule } from './card-services-routing.module';

import { CardServicesPage } from './card-services.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardServicesPageRoutingModule
  ],
  declarations: [CardServicesPage]
})
export class CardServicesPageModule {}
