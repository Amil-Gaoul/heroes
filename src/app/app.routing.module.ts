import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HeroDetailPageComponent } from './pages/hero-detail-page/hero-detail-page.component';
import { HeroesListPageComponent } from './pages/heroes-list-page/heroes-list-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
    { path: 'dashboard', component: DashboardPageComponent },
    { path: 'heroes', component: HeroesListPageComponent },
    { path: 'hero/:id', component: HeroDetailPageComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '**', component: NotFoundPageComponent }
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
