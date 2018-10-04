import { FieldType } from './../../shared/models/Enums/field-type.enum';
import { TagsService } from './../../core/services/tags/tags.service';
import { Hero } from './../../shared/models/hero.model';
import { HeroesService } from './../../core/services/heroes/heroes.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { Tag } from '../../shared/models/tag.model';

@Component({
  selector: 'app-heroes-list-page',
  templateUrl: './heroes-list-page.component.html',
  styleUrls: ['./heroes-list-page.component.scss']
})
export class HeroesListPageComponent implements OnInit, OnDestroy {

    heroes: Hero[];
    tags: Tag[];
    tagsFilter: Tag[] = [];
    tagsIds: number[] = [];
    heroId: number;
    fieldType: any;

    private subs: Subscription[] = [];
    constructor(
        private heroesService: HeroesService,
        private tagsService: TagsService,
        private router: Router
    ) {
        this.fieldType = FieldType;
    }

    ngOnInit() {
        this.loadHeroes();
        this.loadTags();
    }

    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
    }

    loadHeroes() {
        this.subs.push(this.heroesService.loadHeroes().subscribe(heroes => {
            if (heroes) {
                this.heroes = heroes;
                this.heroId = this.heroes.reduce((prev, current) => (prev.id > current.id) ? prev : current).id;
            }
        }));
    }

    loadTags() {
        this.subs.push(this.tagsService.loadTags().subscribe(tags => {
            if (tags) {
                this.tags = tags;
            }
        }));
    }

    createHero(hero: Hero) {
        this.subs.push(this.heroesService.createHero(hero).subscribe(data => {
            this.loadHeroes();
        }));
    }

    showHeroDetail(heroId: number) {
        this.router.navigate(['hero', heroId]);
    }

    addNewTag(tag: Tag) {
        this.subs.push(this.tagsService.addTag(tag).subscribe(data => {}));
    }

    like(hero: Hero) {
        this.subs.push(this.heroesService.editHero(hero).subscribe(data => {
            this.loadHeroes();
        }));
    }

    setFilterTags(tag: Tag) {
        const tagIndex = this.tagsFilter.indexOf(this.tagsFilter.find(t => t.id === tag.id));
        if (tagIndex === -1) {
            this.tagsFilter.push(tag);
            this.tagsIds.push(tag.id);
        }
    }

    removeFilterTags(tag: Tag) {
        this.tagsFilter.splice(this.tagsFilter.indexOf(this.tagsFilter.find(t => t.id === tag.id)), 1);
        this.tagsIds.splice(this.tagsIds.indexOf(this.tagsIds.find(id => id === tag.id)), 1);
    }

    removeNewTag(tag: Tag) {
        this.subs.push(this.tagsService.deleteTag(tag).subscribe());
    }

}
