import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { speedActions } from 'src/app/store/speed.actions';
import { Car } from 'src/app/store/speed.state';
import { speedFeature } from '../store/speed.selector';

@Component({
  selector: 'speedofcars',
  templateUrl: './speedofcars.component.html',
  styleUrls: ['./speedofcars.component.scss'],
})
export class SpeedofcarsComponent {
  car$: Observable<Car> = new Observable();
  speed$: Observable<number> = new Observable();
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.initialsizeStore();
  }

  initialsizeStore(): void {
    this.car$ = this.store.select(speedFeature.selectCar);
    this.speed$ = this.store.select(speedFeature.selectSpeed);
    this.store.dispatch(
      speedActions.setSpeed({ carDetails: { speed: 60, car: Car.BLUE } })
    );
  }

  /**
   * Get selected car details on toggle
   * @param isYellowSelected boolean
   */
  getSelectedCar(isYellowSelected: boolean): void {
    this.store.dispatch(
      speedActions.setSpeed({
        carDetails: {
          speed: this.generateSpeedValue(),
          car: isYellowSelected ? Car.YELLOW : Car.BLUE,
        },
      })
    );
  }

  /**
   *
   * generate random number for speed upto 200
   * @returns speed number
   */
  generateSpeedValue(): number {
    return Math.floor(Math.random() * 200);
  }
}
