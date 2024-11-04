import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { SpeedState } from './speed.state';


export const speedActions = createActionGroup({
  source: 'Speed Actions',
  events: {
    'Set Speed': props<{carDetails: SpeedState}>(),
  },
});
