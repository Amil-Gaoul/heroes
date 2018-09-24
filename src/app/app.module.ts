import { AppRoutingModule } from './app.routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryWebApiService } from './core/services/in-memory-web-api/in-memory-web-api.service';

import { MaterialAppModule } from './app.material.module';

import { AppComponent } from './app.component';
import { HeroDetailPageComponent } from './pages/hero-detail-page/hero-detail-page.component';
import { HeroesListPageComponent } from './pages/heroes-list-page/heroes-list-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

@NgModule({
    declarations: [
        AppComponent,
        HeroesListPageComponent,
        HeroDetailPageComponent,
        DashboardPageComponent,
        NotFoundPageComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialAppModule,
        SharedModule,
        CoreModule,
        AppRoutingModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryWebApiService, { dataEncapsulation: false, post204: false }
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
