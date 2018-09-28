import { NotFoundPageComponent } from './not-found-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const notFoundRoutes: Routes = [
    {
        path: '',
        component: NotFoundPageComponent
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(
            notFoundRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class NotFoundPageRoutingModule {}
