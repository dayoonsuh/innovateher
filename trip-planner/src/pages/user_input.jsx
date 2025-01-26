import React, { useState } from 'react';
import './user_input.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from 'react-dropdown';



function UserInput() {
    const [depDate, setDepDate] = useState(null);

    const handleDepDateChange = (date) => {
        setDepDate(date);
    };

    const [arrDate, setArrDate] = useState(null);

    const handleArrDateChange = (date) => {
        setArrDate(date);
    };

    const [state, setState] = useState(null);

    const handleStateChange = (value) => {
        setState(value);
    };

    const [city, setCity] = useState('');

    const handleCityChange = (value) => {
        setCity(value);
    };

    const [withWho, setWithWho] = useState('');

    const handleWithWhoChange = (value) => {
        setWithWho(value);
    };

    const [type, setType] = useState(null);

    const handleTypeChange = (value) => {
        setType(value);
    };

    return(
        <div className = {'user-input-page'}>
            <h1 className = {'title-of-user-input'}>Preferences</h1>
            <p>Departure Date</p>
            <DatePicker
                selected={depDate}
                onChange={handleDepDateChange}
                dateFormat="MM/dd/yyyy"
            />
            <p>Arrival Date</p>
            <DatePicker
                selected={arrDate}
                onChange={handleArrDateChange}
                dateFormat="MM/dd/yyyy"
            />
            <p>What city are you currently in?</p>

            <input
                type="text"
                value={city}
                onChange={handleCityChange}
            />
            
            <p>What state are you in?</p>

            <input
                type="text"
                value={state}
                onChange={handleStateChange}
            />

            <p>What type of place would you like to go to?</p>
            <Dropdown
                options={[
                { label: 'Nature', value: 'nature' },
                { label: 'Beach', value: 'beach' },
                { label: 'Food', value: 'food' },
                { label: 'City Vibes', value: 'city vibes' },
                { label: 'Kids', value: 'kids' },
                { label: 'Historial / Cultural', value: 'historical_cultural' },
                ]}
                value={type}
                onChange={handleTypeChange}
            />

            <p>Who would you be travelling with, if anyone?</p>
            <Dropdown
                options={[
                { label: 'Solo', value: 'solo' },
                { label: 'Couple', value: 'couple' },
                { label: 'Family', value: 'family' },
                { label: 'Friends', value: 'friends' }
                ]}
                value={withWho}
                onChange={handleWithWhoChange}
            />

            
        </div>
    );
}

export default UserInput;