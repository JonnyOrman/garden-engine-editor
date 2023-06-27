import react, { useEffect } from 'react';
import Entity from '../../Entity';
import ContentInstance from './ContentInstance';
import ContentInstancesModalProps from './ContentInstancesModalProps';
import React from 'react';

function ObjectInstancesModal<
  TContent extends Entity,
  TContentInstance extends ContentInstance,
  TCreateContentInstance
>(props: ContentInstancesModalProps<TContent, TContentInstance>) {
  const [contentInstances, setContentInstances] =
    react.useState<TContentInstance[]>();

  useEffect(() => {
    async function getContentInstances() {
      const contentInstances = await props.contentInstancesProvider.get(
        props.content.name
      );

      setContentInstances(contentInstances);
    }

    if (!contentInstances) {
      getContentInstances();
    }
  }, []);

  return (
    <div {...props} aria-labelledby="content-instances-modal">
      <div>
        <div id="content-instances-modal">{props.content.name} instances</div>
      </div>
      <div>
        <h4>Triangle instances</h4>
        <div>
          {contentInstances?.map((contentInstance: TContentInstance) => {
            return (
              <div>
                {contentInstance.name}, location: {contentInstance.position.x},{' '}
                {contentInstance.position.y}
              </div>
            );
          })}
        </div>
        {props.createContentInstance}
      </div>
    </div>
  );
}

export default ObjectInstancesModal;
