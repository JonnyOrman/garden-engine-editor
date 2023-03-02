import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CreateContentModal from "./CreateContentModal";
import ObjectListItem from "./ObjectListItem";

function EditContent(props: any) {
    const [createContentModalShow, setCreateContentModalShow] = React.useState(false);

    return (
        <Col>
            <Row>
                {
                    props?.content?.objects?.map((object: any) => {
                        return <ObjectListItem object={object || {}} />
                    })
                }
            </Row>
            <Row>
                <Button variant="primary" onClick={() => setCreateContentModalShow(true)}>Add content</Button>
            </Row>
            <CreateContentModal
                show={createContentModalShow}
                onHide={() => setCreateContentModalShow(false)}
            />
        </Col>
    )
}

export default EditContent;