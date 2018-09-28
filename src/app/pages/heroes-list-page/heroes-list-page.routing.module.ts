import { HeroesListPageComponent } from './heroes-list-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const heroesListRoutes: Routes = [
    {
        path: '',
        component: HeroesListPageComponent
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(
            heroesListRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class HeroesListPageRoutingModule {}
