import { Component } from '@angular/core';

@Component({
  selector: 'speedofcars',
  templateUrl: './speedofcars.component.html',
  styleUrls: ['./speedofcars.component.scss']
})
export class SpeedofcarsComponent {
  isYellowCarSelected: boolean = false;
  constructor() {

  }
  ngOnInit(): void {}
getSelectedCar(isYellowSelected: boolean): void {
  this.isYellowCarSelected = isYellowSelected;
}
}
