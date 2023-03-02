import { BaseDirectory, readTextFile } from "@tauri-apps/api/fs";
import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import EditContent from "./EditContent";
import EditScene from "./EditScene";

function EditGame() {
    const [content, setContent] = useState<any>();

    useEffect(() => {
        async function getContent() {
            const contentJson: any = await readTextFile('PATH_HERE/content.json', { dir: BaseDirectory.AppConfig });

            const content = JSON.parse(contentJson);

            setContent(content);
        };

        if (!content) {
            getContent();
        }
    }, []);

    return (
        <Row className="h-100">
            <Col xs="10">
                <EditScene objects={content?.objects || []} />
            </Col>
            <Col xs="2">
                <EditContent content={content?.content || {}} />
            </Col>
        </Row>
    )
}

export default EditGame;