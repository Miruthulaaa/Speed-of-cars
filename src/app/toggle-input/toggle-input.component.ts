import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'toggle-input',
  templateUrl: './toggle-input.component.html',
  styleUrls: ['./toggle-input.component.scss'],
})
export class ToggleInputComponent {
  @Input() leftText: string = '';
  @Input() rightText: string = '';
  @Output() onSelect: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() isRightActive: boolean = false;

  toggle(): void {
    this.isRightActive = !this.isRightActive;
    this.onSelect.emit(this.isRightActive);
  }
}
