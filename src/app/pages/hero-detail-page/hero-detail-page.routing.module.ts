import { HeroDetailPageComponent } from './hero-detail-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const heroDetailRoutes: Routes = [
    {
        path: '',
        component: HeroDetailPageComponent
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(
            heroDetailRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class HeroDetailPageRoutingModule {}
