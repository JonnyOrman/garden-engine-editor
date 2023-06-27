import { useContext, useEffect, useState } from 'react';
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
    <div>
      <div>
        <EditScene objects={game?.objects || []} />
      </div>
      <div>
        <EditContent content={game?.content} />
      </div>
    </div>
  );
}

export default EditGame;
