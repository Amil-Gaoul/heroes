import { FormGroup, FormControl } from '@angular/forms';
import { InputField } from './../../models/input-field.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-textarea-field',
    templateUrl: './textarea-field.component.html',
    styleUrls: ['./textarea-field.component.scss']
})
export class TextareaFieldComponent implements OnInit {

    @Input() model: InputField;
    @Input() form: FormGroup;
    control: FormControl;

    constructor() { }

    ngOnInit() {
        this.control = <FormControl>this.form.controls[this.model.controlName];
    }

}
