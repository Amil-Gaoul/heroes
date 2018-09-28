import { DashboardPageRoutingModule } from './dashboard-page.routing.module';
import { DashboardPageComponent } from './dashboard-page.component';
import { SharedModule } from './../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        SharedModule,
        FormsModule,
        CommonModule,
        DashboardPageRoutingModule
    ],
    declarations: [
        DashboardPageComponent
    ]
})
export class DashboardPageModule { }
