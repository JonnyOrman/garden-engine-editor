import { useContext, useEffect, useState } from 'react';
import EditContent from '../content/EditContent';
import EditScene from '../scene/EditScene';
import Game from './Game';
import React from 'react';
import { GameReaderContext } from './GameReaderContext';
import styled from 'styled-components';
import { VerticalComponent } from '../components/VerticalComponent';
import Component from '../components/Component';
import WindowDock from '../windows/WindowDock';

const Editor = styled(Component)({
  flexGrow: 1,
});

const EditSceneContainer = styled.div({
  flexGrow: 1,
});

const EditContentContainer = styled.div({
  width: '200px',
});

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
    <VerticalComponent>
      <Editor>
        <EditSceneContainer>
          <EditScene objects={game?.objects || []} />
        </EditSceneContainer>
        <EditContentContainer>
          <EditContent content={game?.content} />
        </EditContentContainer>
      </Editor>
      <WindowDock />
    </VerticalComponent>
  );
}

export default EditGame;
