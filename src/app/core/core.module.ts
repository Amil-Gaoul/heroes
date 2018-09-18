import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesService } from './services/heroes/heroes.service';
import { TagsService } from './services/tags/tags.service';
import { HttpClient } from './services/http-client';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    providers: [
        HttpClient,
        HeroesService,
        TagsService
    ]
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
