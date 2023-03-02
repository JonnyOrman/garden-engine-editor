import ObjectListItem from "./ObjectListItem";

function EditContent(props: { content: any }) {
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
                <button type="submit">Add content</button>
            </div>
        </div >
    )
}

export default EditContent;