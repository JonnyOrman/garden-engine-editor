function EditContent(props: any) {
    return (
        <div>
            {
                props?.content?.objects?.map((object: any) => {
                    return <div>{object.name}</div>
                })
            }
        </div >
    )
}

export default EditContent;