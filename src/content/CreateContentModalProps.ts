import GameReadWriteProps from '../game/GameReadWriteProps';

export default interface CreateContentModalProps extends GameReadWriteProps {
  onHide: () => void;
  show: boolean;
}
