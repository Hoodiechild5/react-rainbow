import React, { useState } from "react";

export default function ColorForm({ onAddColor }) {
    let [inputVal, setinputVal] = useState('')

    const onSubmitForm = e => {
        e.preventDefault();
        onAddColor(inputVal)
        setinputVal('')
    }

    return <div className="colorForm">
        <form onSubmit={onSubmitForm}>
            <input type="text"
                onChange={e => setinputVal(e.target.value)}
            />
            <button type="submit">Submit!</button>
        </form>
    </div>
}