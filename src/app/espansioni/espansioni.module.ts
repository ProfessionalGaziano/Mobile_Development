import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { EspansioniPageRoutingModule } from './espansioni-routing.module';

import { EspansioniPage } from './espansioni.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspansioniPageRoutingModule,
  ],
  declarations: [EspansioniPage]
})
export class EspansioniPageModule {}
