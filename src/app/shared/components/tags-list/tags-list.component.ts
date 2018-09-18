import { Tag } from './../../models/tag.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-tags-list',
    templateUrl: './tags-list.component.html',
    styleUrls: ['./tags-list.component.scss']
})
export class TagsListComponent implements OnInit {

    @Input() tags: string[];
    @Input() removable: boolean;
    @Input() selectable: boolean;
    @Input() colorType: number;
    @Output() emitTag: EventEmitter<Tag> = new EventEmitter<Tag>();
    @Output() emitRemoveTag: EventEmitter<Tag> = new EventEmitter<Tag>();
    colors = ['none', 'primary', 'accent', 'warn'];

    constructor() { }

    ngOnInit() {
    }

    setTag(tag: Tag) {
        console.log('set tag', tag);
        this.emitTag.emit(tag);
    }

    remove(tag: Tag) {
        console.log('remove tag', tag);
        this.emitRemoveTag.emit(tag);
    }

}
