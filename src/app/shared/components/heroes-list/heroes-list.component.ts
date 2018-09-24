import { Hero } from './../../models/hero.model';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Tag } from '../../models/tag.model';

@Component({
    selector: 'app-heroes-list',
    templateUrl: './heroes-list.component.html',
    styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit, OnChanges {

    @Input() model: Hero[];
    @Input() tags: Tag[];
    @Input() tagsIds: number[];
    @Output() emitHero: EventEmitter<number> = new EventEmitter<number>();
    @Output() emitTag: EventEmitter<Tag> = new EventEmitter<Tag>();
    @Output() emitLike: EventEmitter<Hero> = new EventEmitter<Hero>();
    canVote: boolean;

    constructor() { }

    ngOnInit() {
        this.canVote = true;
        console.log(this.model);
    }

    ngOnChanges(changes) {
        if ('tagsIds' in changes) {
            console.log(this.tagsIds);
        }
    }

    setTag(tag: Tag) {
        this.emitTag.emit(tag);
    }

    like(hero: Hero) {
        for (let i = 0; i < this.model.length; i++) {
            if (this.model[i].id === hero.id) {
                this.model[i].likes += 1;
                this.emitLike.emit(this.model[i]);
            }
        }
    }

    shoHeroDetail(hero: Hero) {
        this.emitHero.emit(hero.id);
    }

}
