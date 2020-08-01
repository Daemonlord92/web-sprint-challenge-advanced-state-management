import React, { useState } from 'react';
import "../components/App.css";

const SmurfForm = (props) => {
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: ''
    });

    const handleSubmit = e => {
        e.preventDefault();
        props.addSmurf(newSmurf);
        setNewSmurf({
            name: "",
            age: "",
            height:""
        });
    };

    const handleChanges = e => {
        setNewSmurf({
            ...newSmurf,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            <form className="formContainer" onSubmit={handleSubmit}>
                <h3>Create your Smurf</h3>
                <input
                    type="text"
                    name="name"
                    placeholder="Smurf name"
                    onChange={handleChanges}
                    value={newSmurf.name} />
                <input
                    type="text"
                    name="age"
                    placeholder="Smurf age"
                    onChange={handleChanges}
                    value={newSmurf.age} />
                <input
                    type="text"
                    name="height"
                    placeholder="Smurf height in cm"
                    onChange={handleChanges}
                    value={newSmurf.height}
                />
                <br />
                <button className = "submitButton" type="submit">Create Smurf</button>
                {/* <button className = "clearForm" type="">Clear Smurfs</button> */}
            </form>
        </div>
    );
};

export default SmurfForm;