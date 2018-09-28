import { HeroesListPageRoutingModule } from './heroes-list-page.routing.module';
import { HeroesListPageComponent } from './heroes-list-page.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        HeroesListPageRoutingModule
    ],
    declarations: [
        HeroesListPageComponent
    ]
})
export class HeroesListPageModule { }
