import React, { useState } from 'react';
import EditContentProps from './EditContentProps';
import styled from 'styled-components';
import PrimaryButton from '../buttons/PrimaryButton';
import { VerticalComponent } from '../components/VerticalComponent';
import CreateContentModal from './CreateContentModal';
import VerticalButtonCollection from '../buttons/VerticalButtonCollection';
import ContentSelectItem from './ContentSelectItem';
import Modal from '../modals/Modal';

const AddContentContainer = styled.div({
  width: '100%',
  height: '50px',
  justifyContent: 'center',
  display: 'flex',
});

function EditContent(props: EditContentProps) {
  const [createContentModalShow, setCreateContentModalShow] =
    React.useState(false);

  const [selectedContent, setSelectedContent] = useState('');

  return (
    <VerticalComponent>
      <AddContentContainer>
        <PrimaryButton
          text="Add content"
          onClick={() => setCreateContentModalShow(true)}
        />
      </AddContentContainer>
      <VerticalButtonCollection>
        {props?.content?.objects?.map((object: any) => {
          return (
            <ContentSelectItem
              key={object.name}
              object={object}
              onClick={() => {
                setSelectedContent(object.name);
              }}
              show={object.name == selectedContent}
              onClose={() => setSelectedContent('')}
            />
          );
        })}
      </VerticalButtonCollection>
      <Modal
        show={createContentModalShow}
        renderContent={() => {
          return (
            <CreateContentModal
              show={createContentModalShow}
              onHide={() => setCreateContentModalShow(false)}
            />
          );
        }}
      />
    </VerticalComponent>
  );
}

export default EditContent;
