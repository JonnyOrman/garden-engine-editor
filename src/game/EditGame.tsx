import { useContext, useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import EditContent from '../content/EditContent';
import EditScene from '../scene/EditScene';
import Game from './Game';
import React from 'react';
import { GameReaderContext } from './GameReaderContext';

function EditGame() {
  const [game, setGame] = useState<Game>();

  const gameReader = useContext(GameReaderContext);

  useEffect(() => {
    async function getGame() {
      const game = await gameReader.read();

      setGame(game);
    }

    if (!game) {
      getGame();
    }
  }, []);

  return (
    <Row className="h-100">
      <Col xs="10">
        <EditScene objects={game?.objects || []} />
      </Col>
      <Col xs="2">
        <EditContent content={game?.content} />
      </Col>
    </Row>
  );
}

export default EditGame;
