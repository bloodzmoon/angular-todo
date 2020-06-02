import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './app-input.component.html',
  styleUrls: ['./app-input.component.css'],
})
export class AppInputComponent {
  @Input() inputModel: string;
  @Input() name: string;
  @Input() placeholder: string;

  @Output() inputModelChange = new EventEmitter<string>();

  constructor() {}
}
