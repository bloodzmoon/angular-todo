import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() value: string;
  @Output() onChange = new EventEmitter<string>();
}
