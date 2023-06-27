import React from 'react';
import CreateContentModal from './CreateContentModal';
import EditContentProps from './EditContentProps';
import ObjectListItem from './ObjectListItem';

function EditContent(props: EditContentProps) {
  const [createContentModalShow, setCreateContentModalShow] =
    React.useState(false);

  return (
    <div>
      <div>
        {props?.content?.objects?.map((object: any) => {
          return <ObjectListItem object={object || {}} />;
        })}
      </div>
      <div>
        <input type="button" onClick={() => setCreateContentModalShow(true)}>
          Add content
        </input>
      </div>
      <CreateContentModal
        show={createContentModalShow}
        onHide={() => setCreateContentModalShow(false)}
      />
    </div>
  );
}

export default EditContent;
