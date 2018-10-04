import { FieldType } from './../../shared/models/Enums/field-type.enum';
import { InputField } from './../../shared/models/input-field.model';
import { TagsService } from './../../core/services/tags/tags.service';
import { HeroesService } from './../../core/services/heroes/heroes.service';
import { Subscription } from 'rxjs/Subscription';
import { Hero } from './../../shared/models/hero.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Tag } from '../../shared/models/tag.model';

@Component({
    selector: 'app-edit-hero-page',
    templateUrl: './edit-hero-page.component.html',
    styleUrls: ['./edit-hero-page.component.scss']
})
export class EditHeroPageComponent implements OnInit, OnDestroy {

    hero: Hero;
    tags: Tag[];
    heroId: number;
    isDisabledBtn: boolean;
    fieldType: any;

    private subs: Subscription[] = [];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private heroesService: HeroesService,
        private tagsService: TagsService
    ) {
        this.fieldType = FieldType;
        this.subs.push(this.route.params.subscribe((params: Params) => {
            this.heroId = +params['id'];
        }));
    }

    ngOnInit() {
        this.getHero();
        this.loadTags();
    }

    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }

    getHero() {
        this.subs.push(this.heroesService.loadHeroes().subscribe(heroes => {
            if (heroes && this.heroId) {
                this.hero = heroes.filter(hero => hero.id === this.heroId)[0];
                if (!this.hero) {
                    this.router.navigate(['404']);
                }
            }
        }));
    }

    loadTags() {
        this.subs.push(this.tagsService.loadTags().subscribe(tags => {
            this.tags = tags;
        }));
    }

    editHero(hero: Hero) {
        this.subs.push(this.heroesService.editHero(hero).subscribe(hero => {
            this.router.navigate(['hero', this.heroId]);
        }));
    }

    addNewTag(tag: Tag) {
        this.subs.push(this.tagsService.addTag(tag).subscribe());
    }

    removeNewTag(tag: Tag) {
        this.subs.push(this.tagsService.deleteTag(tag).subscribe());
    }

}
