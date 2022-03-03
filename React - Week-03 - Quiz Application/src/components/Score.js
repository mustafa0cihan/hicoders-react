import React, { useState } from 'react'

export default function Score(props) {

    return (
        <div className="valid-part">
            <p id="correct">True:{
                props.plus
            }</p>
            <p id="falsch">False:{
                props.minus
            }</p>
        </div>
    )
}
