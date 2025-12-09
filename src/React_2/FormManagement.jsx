import React, { useReducer, useState } from 'react'

const formState = {
    firstname: "",
    lastname: ""
}

const constant = {
    UPDATE_FIRST_NAME: "firstName",
    UPDATE_LAST_NAME: "lastName",
    CLEAR: "clear"
}

const reducerFunction = (state, action) => {
    switch (action.type) {
        case constant.UPDATE_FIRST_NAME:
            return { firstname: action.payload };
        case constant.UPDATE_LAST_NAME:
            return { lastname: action.payload };
        case constant.CLEAR:
            return { firstname: "", lastname: "" };
        default:
            state;
    }
}

function FormManagement() {

    const [formState, dispatch] = useReducer(reducerFunction, formState);

    return (
        <form>
            <input
                type="text"
                value={formState.firstname}
                onChange={(e) => { dispatch({ type: constant.UPDATE_FIRST_NAME, payload: e.target.value }) }} />
            <input
                type="text"
                value={formState.lastname}
                onChange={(e) => { dispatch({ type: constant.UPDATE_LAST_NAME, payload: e.target.value }) }} />

            <button onClick={(e) => {
                e.preventDefault();
                dispatch({type:constant.CLEAR})
            }}>Clear Fields</button>
        </form>
    )
}

export default FormManagement
