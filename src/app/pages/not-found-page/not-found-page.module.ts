import { NotFoundPageRoutingModule } from './not-found-page.routing.module';
import { NotFoundPageComponent } from './not-found-page.component';
import { SharedModule } from './../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        SharedModule,
        FormsModule,
        CommonModule,
        NotFoundPageRoutingModule
    ],
    declarations: [
        NotFoundPageComponent
    ]
})
export class NotFoundPageModule { }
