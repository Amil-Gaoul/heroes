import { Hero } from './../../models/hero.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TagColor } from '../../models/Enums/tag-color.enum';
import { Tag } from '../../models/tag.model';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent implements OnInit {

    @Input() model: Hero;
    @Output() emitTag: EventEmitter<Tag> = new EventEmitter<Tag>();
    @Output() emitLike: EventEmitter<Hero> = new EventEmitter<Hero>();
    canVote: boolean;
    str: number;
    showMore: boolean;
    showMoreBtnText = 'show more >>>';
    colorType: any;

    private defaulStr = 150;

    constructor() {
        this.colorType = TagColor;
    }

    ngOnInit() {
        this.showMore = false;
        this.str = this.defaulStr;
        this.canVote = true;
    }

    showMoreText() {
        this.showMore = !this.showMore;
        if (this.showMore) {
            this.str = this.model.synopsis.length;
            this.showMoreBtnText = 'hide more <<<';
            return;
        }
        this.str = this.defaulStr;
        this.showMoreBtnText = 'show more >>>';
    }

    setTag(tag: Tag) {
        this.emitTag.emit(tag);
    }

    like() {
        console.log(this.model);
        this.emitLike.emit(this.model);
    }

}
