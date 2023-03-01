function EditScene(props: any) {
    return (
        <div>
            {
                props.objects.map((object: any) => {
                    return <div>{object.name}, {object.type}</div>
                })
            }
        </div>
    )
}

export default EditScene;