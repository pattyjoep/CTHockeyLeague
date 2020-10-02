import React from 'react'
import "./style.css"

function alert(props) {
    return (
        <div class={props.importance} role="alert">
            A simple primary alert—check it out!
        </div>
    )
}
export default alert;