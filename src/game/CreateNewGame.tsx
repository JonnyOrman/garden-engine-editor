import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Game from './Game';
import Scene from '../scene/Scene';
import NameEditor from '../fields/name/NameEditor';
import { SceneEditor } from '../scene/SceneEditor';
import { GameWriterContext } from './GameWriterContext';
import Header1 from '../headers/Header1';
import Form from '../forms/Form';
import { VerticalComponent } from '../components/VerticalComponent';

function CreateNewGame() {
  const [name, setName] = useState('');

  const [scene, setScene] = useState<Scene>({
    width: 0,
    height: 0,
  });

  const navigate = useNavigate();

  const gameWriter = useContext(GameWriterContext);

  const buildValue = () => {
    return {
      name: name,
      scene: scene,
      content: {
        objects: [],
      },
      objects: [],
    };
  };

  const onSubmit = (game: Game, e: any) => {
    if (game) {
      e.preventDefault();

      gameWriter.write(game).then(() => {
        navigate('/edit-game');
      });
    }
  };

  const defaultValue = {
    name: name,
    scene: scene,
    content: {
      objects: [],
    },
    objects: [],
  };

  return (
    <VerticalComponent>
      <Header1 text="Create new game"></Header1>
      <Form
        buildValue={buildValue}
        onSubmit={onSubmit}
        defaultValue={defaultValue}
        dependencies={[name, scene]}
      >
        <NameEditor onChange={setName} />
        <SceneEditor onChange={setScene} />
      </Form>
    </VerticalComponent>
  );
}

export default CreateNewGame;
