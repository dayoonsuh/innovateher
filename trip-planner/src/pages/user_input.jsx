import React, { useState } from 'react';
import './user_input.css';
//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";



function UserInput() {
    const [depDate, setDepDate] = useState(null);

    const handleDepDateChange = (date) => {
        setDepDate(date);
    };

    const [arrDate, setArrDate] = useState(null);

    const handleArrDateChange = (date) => {
        setArrDate(date);
    };

    return(
        <div className = {'user-input-page'}>
            <h1 className = {'title-of-user-input'}>Preferences</h1>
            <p>Hello World</p>
        </div>
    );
}

export default UserInput;