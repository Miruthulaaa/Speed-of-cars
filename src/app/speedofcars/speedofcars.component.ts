import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { speedActions } from 'src/app/store/speed.actions';
import { initialState } from 'src/app/store/speed.reducer';
import { speedFeature } from 'src/app/store/speed.selector';
import { Car } from 'src/app/store/speed.state';

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
      speedActions.setSpeed({ carDetails: initialState })
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
