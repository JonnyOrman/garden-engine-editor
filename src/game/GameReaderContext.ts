import { createContext } from 'react';
import Reader from '../Reader';
import Game from './Game';
import { gameReader } from './GameReader';

export const GameReaderContext = createContext<Reader<Game>>(gameReader);
