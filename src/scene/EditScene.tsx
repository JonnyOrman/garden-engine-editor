import EditSceneProps from './EditSceneProps';
import React from 'react';

function EditScene(props: EditSceneProps) {
  return (
    <div
      className="h-100"
      style={{
        background: 'black',
      }}
    >
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
    </div>
  );
}

export default EditScene;
