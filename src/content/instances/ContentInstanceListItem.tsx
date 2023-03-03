import ContentInstanceListItemProps from "./ContentInstanceListItemProps";

function ContentInstanceListItem(props: ContentInstanceListItemProps) {
    return (
        <div>
            <div>Name: {props.contentInstance.name}</div>
            <div>Location: {props.contentInstance.position.x}, {props.contentInstance.position.y}</div>
            <div>Scale: {props.contentInstance.scale}</div>
        </div>
    )
}

export default ContentInstanceListItem;