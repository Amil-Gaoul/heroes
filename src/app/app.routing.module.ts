import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: 'dashboard',
        loadChildren: 'app/pages/dashboard-page/dashboard-page.module#DashboardPageModule'
    },
    {
        path: 'heroes',
        loadChildren: 'app/pages/heroes-list-page/heroes-list-page.module#HeroesListPageModule'
    },
    {
        path: 'hero/:id',
        loadChildren: 'app/pages/hero-detail-page/hero-detail-page.module#HeroDetailPageModule'
    },
    {
        path: 'edit-hero/:id',
        loadChildren: 'app/pages/edit-hero-page/edit-hero-page.module#EditHeroPageModule'
    },
    {
        path: '404',
        loadChildren: 'app/pages/not-found-page/not-found-page.module#NotFoundPageModule'
    },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: '404' }
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
