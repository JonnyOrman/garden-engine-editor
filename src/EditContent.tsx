import React from "react";
import Button from "react-bootstrap/Button";
import CreateContentModal from "./CreateContentModal";
import ObjectListItem from "./ObjectListItem";

function EditContent(props: any) {
    const [createContentModalShow, setCreateContentModalShow] = React.useState(false);

    return (
        <div>
            <div className="row">
                {
                    props?.content?.objects?.map((object: any) => {
                        return <ObjectListItem object={object || {}} />
                    })
                }
            </div>
            <div className="row">
                <Button variant="primary" onClick={() => setCreateContentModalShow(true)}>Add content</Button>
            </div>
            <CreateContentModal
                show={createContentModalShow}
                onHide={() => setCreateContentModalShow(false)}
            />
        </div>
    )
}

export default EditContent;