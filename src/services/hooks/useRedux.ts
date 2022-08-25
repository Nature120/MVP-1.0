import {
  TypedUseSelectorHook,
  useDispatch as useLibDispatch,
  useSelector as useLibSelector,
} from 'react-redux';

import { store } from '@services/store';

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useLibDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useLibSelector;
