import Game from '../game/Game';
import Reader from '../Reader';
import Writer from '../Writer';
import Content from './Content';

export default interface EditContentProps {
  content: Content | undefined;
  gameReader: Reader<Game>;
  gameWriter: Writer<Game>;
}
