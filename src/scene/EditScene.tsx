import styled from 'styled-components';
import Component from '../components/Component';
import EditSceneProps from './EditSceneProps';
import React from 'react';

const EditSceneComponent = styled(Component)({
  backgroundColor: 'black',
});

function EditScene(props: EditSceneProps) {
  return (
    <EditSceneComponent>
      {props.objects.map((object: any) => {
        return (
          <div
            style={{
              color: 'white',
            }}
          >
            {object.name}, {object.type}
          </div>
        );
      })}
    </EditSceneComponent>
  );
}

export default EditScene;
