import { Action, createReducer, on } from '@ngrx/store';
import { Car, SpeedState } from 'src/app/store/speed.state';
import { speedActions } from 'src/app/store/speed.actions';

export const initialState: SpeedState = {
 speed: 60,
 car: Car.BLUE
};

const _speedReducer = createReducer(
  initialState,
  on(speedActions.setSpeed, (state, action) => {
    return {
      ...state,
      speed: action.carDetails.speed,
      car: action.carDetails.car
    };
  }),
);

export function speedReducer(
  state: SpeedState | undefined,
  action: Action
): SpeedState {
  return _speedReducer(state, action);
}