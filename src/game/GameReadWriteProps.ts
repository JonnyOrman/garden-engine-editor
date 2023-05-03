import Reader from '../Reader';
import Writer from '../Writer';
import Game from './Game';

export default interface GameReadWriteProps {
  gameReader: Reader<Game>;
  gameWriter: Writer<Game>;
}
