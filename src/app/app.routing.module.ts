import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HeroDetailPageComponent } from './pages/hero-detail-page/hero-detail-page.component';
import { HeroesListPageComponent } from './pages/heroes-list-page/heroes-list-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

const routes: Routes = [
    { path: 'dashboard', component: DashboardPageComponent },
    { path: 'heroes', component: HeroesListPageComponent },
    { path: 'hero/:id', component: HeroDetailPageComponent },
    { path: '', redirectTo: 'heroes', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }
