import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

    @Input() text: string;
    @Input() isDisabled: boolean;
    @Output() emitClick = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    clickBtn() {
        this.emitClick.emit();
    }

}
