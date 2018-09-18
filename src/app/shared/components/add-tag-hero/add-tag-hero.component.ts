import { FormControl } from '@angular/forms';
import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, startWith } from 'rxjs/operators';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';

@Component({
    selector: 'app-add-tag-hero',
    templateUrl: './add-tag-hero.component.html',
    styleUrls: ['./add-tag-hero.component.scss']
})
export class AddTagHeroComponent implements OnInit {

    @Input() allTags: string[];
    @Output() emitTags: EventEmitter<string[]> = new EventEmitter<string[]>();
    @ViewChild('tagInput') tagInput: ElementRef;
    tags: string[] = [];
    visible = true;
    selectable = true;
    removable = true;
    addOnBlur = false;
    separatorKeysCodes: number[] = [ENTER, COMMA];
    tagCtrl = new FormControl();
    filteredTags: Observable<string[]>;

    constructor() {
        this.filteredTags = this.tagCtrl.valueChanges.pipe(
            startWith(null),
            map((fruit: string | null) => fruit ? this.filterTag(fruit) : this.allTags.slice()));
    }

    ngOnInit() {
    }

    addTag(event: MatChipInputEvent): void {
        const input = event.input;
        const value = event.value;

        if ((value || '').trim()) {
            this.tags.push(value.trim());
            this.outputTags();
        }

        if (input) {
            input.value = '';
        }

        this.tagCtrl.setValue(null);
    }

    removeTag(tag: string): void {
        const index = this.tags.indexOf(tag);

        if (index >= 0) {
            this.tags.splice(index, 1);
            this.outputTags();
        }
    }

    selectedTag(event: MatAutocompleteSelectedEvent): void {
        this.tags.push(event.option.viewValue);
        this.outputTags();
        this.tagInput.nativeElement.value = '';
        this.tagCtrl.setValue(null);
    }

    outputTags() {
        this.emitTags.emit(this.tags);
    }

    private filterTag(value: string): string[] {
        const filterValue = value.toLowerCase();
        return this.allTags.filter(tag => tag.toLowerCase().indexOf(filterValue) === 0);
    }

}
