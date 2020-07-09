import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationComponent } from './information.component';
import { LocationComponent } from './location/location.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    InformationComponent,
    LocationComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InformationComponent
  ]
})
export class InformationModule { }
