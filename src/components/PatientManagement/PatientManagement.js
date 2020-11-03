import React, { useReducer, useRef } from 'react';
import { patientReducer,patientState } from '../../reducers/patientReducer';

const PatientManagement = () => {
    const nameRef = useRef();

    const [state ,dispatch] =useReducer(patientReducer, patientState)
    console.log(state);
    const handleSubmit =event =>{
        event.preventDefault();
        dispatch({
            type:'ADD_PATIENT', name: nameRef.current.value,
            id: state.patients.length
        })
        console.log(nameRef.current.value);
    }

    return (
        <div>
            <h1>Patient Management: {state.patients.length}</h1>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef}>
                </input>
            </form>
        </div>
    );
};

export default PatientManagement;