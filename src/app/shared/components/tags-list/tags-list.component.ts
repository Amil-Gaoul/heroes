import { Tag } from './../../models/tag.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-tags-list',
    templateUrl: './tags-list.component.html',
    styleUrls: ['./tags-list.component.scss']
})
export class TagsListComponent implements OnInit {

    @Input() tagIds: number[];
    @Input() tags: Tag[];
    @Input() removable: boolean;
    @Input() selectable: boolean;
    @Input() colorType: number;
    @Output() emitTag: EventEmitter<Tag> = new EventEmitter<Tag>();
    @Output() emitRemoveTag: EventEmitter<Tag> = new EventEmitter<Tag>();
    filterTags: Tag[] = [];
    colors = ['none', 'primary', 'accent', 'warn'];

    constructor() { }

    ngOnInit() {
        this.initTags();
    }

    initTags() {
        if (this.tagIds && this.tags) {
            for (let i = 0; i < this.tags.length; i++) {
                for (let j = 0; j < this.tagIds.length; j++) {
                    if (this.tags[i].id === this.tagIds[j]) {
                        this.filterTags.push(this.tags[i]);
                    }
                }
            }
            return;
        }
        this.filterTags = this.tags;
    }

    setTag(tag: Tag) {
        this.emitTag.emit(tag);
    }

    remove(ev: MouseEvent, tag: Tag) {
        ev.stopPropagation();
        this.emitRemoveTag.emit(tag);
    }

}
