import { DashboardPageComponent } from './dashboard-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const dashboardRoutes: Routes = [
    {
        path: '',
        component: DashboardPageComponent
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(
            dashboardRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class DashboardPageRoutingModule {}
