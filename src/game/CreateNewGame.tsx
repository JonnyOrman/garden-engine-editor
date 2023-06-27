import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Game from './Game';
import Scene from '../scene/Scene';
import Name from '../fields/name/NameEditor';
import { SceneEditor } from '../scene/SceneEditor';
import { GameWriterContext } from './GameWriterContext';
import Header1 from '../headers/Header1';
import Form from '../forms/Form';
import Component from '../components/Component';

function CreateNewGame() {
  const [name, setName] = useState('');

  const [scene, setScene] = useState<Scene>({
    width: 0,
    height: 0,
  });

  const navigate = useNavigate();

  const gameWriter = useContext(GameWriterContext);

  return (
    <Component>
      <Header1 text="Create new game"></Header1>
      <Form
        buildValue={() => {
          return {
            name: name,
            scene: scene,
            content: {
              objects: [],
            },
            objects: [],
          };
        }}
        onSubmit={(game: Game, e: any) => {
          if (game) {
            e.preventDefault();

            gameWriter.write(game).then(() => {
              navigate('/edit-game');
            });
          }
        }}
        defaultValue={{
          name: name,
          scene: scene,
          content: {
            objects: [],
          },
          objects: [],
        }}
        fieldRenderers={[
          () => <Name onChange={setName} key="name" />,
          () => <SceneEditor onChange={setScene} key="scene" />,
        ]}
        dependencies={[name, scene]}
      ></Form>
    </Component>
  );
}

export default CreateNewGame;
