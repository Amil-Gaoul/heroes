import { HeroDetailPageRoutingModule } from './hero-detail-page.routing.module';
import { HeroDetailPageComponent } from './hero-detail-page.component';
import { SharedModule } from './../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        SharedModule,
        FormsModule,
        CommonModule,
        HeroDetailPageRoutingModule
    ],
    declarations: [
        HeroDetailPageComponent
    ]
})
export class HeroDetailPageModule { }
