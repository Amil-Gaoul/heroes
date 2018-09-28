import { EditHeroPageComponent } from './edit-hero-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const editHeroRoutes: Routes = [
    {
        path: '',
        component: EditHeroPageComponent
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(
            editHeroRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class EditHeroPageRoutingModule {}
