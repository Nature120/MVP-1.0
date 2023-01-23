import { createContext, useContext } from 'react';

import { IPlayerContext } from './immersion-timer.types';

export const PlayerContext = createContext<IPlayerContext | Record<string, never>>({});
export const usePlayer = () => useContext(PlayerContext);
