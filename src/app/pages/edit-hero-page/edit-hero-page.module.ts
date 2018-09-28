import { EditHeroPageRoutingModule } from './edit-hero-page.routing.module';
import { EditHeroPageComponent } from './edit-hero-page.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        EditHeroPageRoutingModule
    ],
    declarations: [
        EditHeroPageComponent
    ]
})
export class EditHeroPageModule { }
