import styled from 'styled-components';
import Component from '../components/Component';
import EditSceneProps from './EditSceneProps';
import React from 'react';
import ContentInstance from '../content/instances/ContentInstance';
import ContentInstanceSelectItem from './ContentInstanceSelectItem';

const EditSceneComponent = styled(Component)({
  backgroundColor: 'black',
});

function EditScene(props: EditSceneProps) {
  return (
    <EditSceneComponent>
      {props.objects.map((object: ContentInstance) => {
        return <ContentInstanceSelectItem object={object} key={object.name} />;
      })}
    </EditSceneComponent>
  );
}

export default EditScene;
