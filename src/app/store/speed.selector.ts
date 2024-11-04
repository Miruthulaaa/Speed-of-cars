import { createFeature } from '@ngrx/store';
import { speedReducer } from 'src/app/store/speed.reducer';

/**
 * used `createFeature` to reduce naming conflicts with existing selectors and have single point of definition
 */
export const speedFeature = createFeature({
  name: 'speedState',
  reducer: speedReducer,
});
