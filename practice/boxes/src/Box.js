function Box(props) {
    const style = {
        backgroundColor: props.on ? "black" : ""
    }
    return (
        <div style={style} className="box" key={props.id}></div>
    )
}

export default Box