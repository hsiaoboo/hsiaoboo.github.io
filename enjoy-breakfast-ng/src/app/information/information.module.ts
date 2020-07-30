import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationComponent } from './information.component';
import { EnjoyLocationComponent } from './enjoy-location/enjoy-location.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    InformationComponent,
    EnjoyLocationComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    InformationComponent
  ]
})
export class InformationModule { }
