import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ProducerRoutingModule } from './producer-routing.module';
import { ProducerComponent } from './producer.component';
import { ProducerDetailComponent } from './producer-detail.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ProducerRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ProducerComponent,
    ProducerDetailComponent
  ]
})
export class ProducerModule { }
