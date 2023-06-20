import { createContext } from 'react';
import Writer from '../Writer';
import Game from './Game';
import { gameWriter } from './GameWriter';

export const GameWriterContext = createContext<Writer<Game>>(gameWriter);
