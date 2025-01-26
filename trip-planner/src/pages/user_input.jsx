import React, { useState } from 'react';
import './user_input.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function UserInput() {
    const [depDate, setDepDate] = useState(null);
    const [arrDate, setArrDate] = useState(null);
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [desState, setDesState] = useState('')
    const [desCity, setDesCity] = useState('')
    const [withWho, setWithWho] = useState(null);
    const [type, setType] = useState(null);

    const handleDepDateChange = (date) => setDepDate(date);
    const handleArrDateChange = (date) => setArrDate(date);
    const handleStateChange = (value) => setState(value);
    const handleCityChange = (value) => setCity(value);
    const handleWithWhoChange = (option) => setWithWho(option);
    const handleTypeChange = (option) => setType(option);
    const handleDesStateChange = (value) => setDesState(value);
    const handleDesCityChange = (value) => setDesCity(value);

    function navigation() {
        window.location.href = '/trip_details';
    }

    return(
        <div className="user-input-page">
            <h1 className="title-of-user-input">Preferences</h1>
            
            <p>Departure Date</p>
            <DatePicker
                selected={depDate}
                onChange={handleDepDateChange}
                dateFormat="MM/dd/yyyy"
                className="react-datepicker-wrapper"
            />
            
            <p>Arrival Date</p>
            <DatePicker
                selected={arrDate}
                onChange={handleArrDateChange}
                dateFormat="MM/dd/yyyy"
                className="react-datepicker-wrapper"
            />
            
            <p>What city are you currently in?</p>
            <input
                type="text"
                value={city}
                onChange={handleCityChange}
            />
            
            <p>What state are you in?</p>
            <Dropdown
                options={[
                    {label: 'AL', value: 'Alabama'},
                    {label: 'AK', value: 'Alaska'},
                    {label: 'AZ', value: 'Arizona'},
                    {label: 'AR', value: 'Arkansas'},
                    {label: 'CA', value: 'California'},
                    {label: 'CO', value: 'Colorado'},
                    {label: 'CT', value: 'Connecticut'},
                    {label: 'DE', value: 'Delaware'},
                    {label: 'FL', value: 'Florida'},
                    {label: 'GA', value: 'Georgia'},
                    {label: 'HI', value: 'Hawaii'},
                    {label: 'ID', value: 'Idaho'},
                    {label: 'IL', value: 'Illinois'},
                    {label: 'IN', value: 'Indiana'},
                    {label: 'IA', value: 'Iowa'},
                    {label: 'KS', value: 'Kansas'},
                    {label: 'KY', value: 'Kentucky'},
                    {label: 'LA', value: 'Louisiana'},
                    {label: 'ME', value: 'Maine'},
                    {label: 'MD', value: 'Maryland'},
                    {label: 'MA', value: 'Massachusetts'},
                    {label: 'MI', value: 'Michigan'},
                    {label: 'MN', value: 'Minnesota'},
                    {label: 'MS', value: 'Mississippi'},
                    {label: 'MO', value: 'Missouri'},
                    {label: 'MT', value: 'Montana'},
                    {label: 'NE', value: 'Nebraska'},
                    {label: 'NV', value: 'Nevada'},
                    {label: 'NH', value: 'New Hampshire'},
                    {label: 'NJ', value: 'New Jersey'},
                    {label: 'NM', value: 'New Mexico'},
                    {label: 'NY', value: 'New York'},
                    {label: 'NC', value: 'North Carolina'},
                    {label: 'ND', value: 'North Dakota'},
                    {label: 'OH', value: 'Ohio'},
                    {label: 'OK', value: 'Oklahoma'},
                    {label: 'OR', value: 'Oregon'},
                    {label: 'PA', value: 'Pennsylvania'},
                    {label: 'RI', value: 'Rhode Island'},
                    {label: 'SC', value: 'South Carolina'},
                    {label: 'SD', value: 'South Dakota'},
                    {label: 'TN', value: 'Tennessee'},
                    {label: 'TX', value: 'Texas'},
                    {label: 'UT', value: 'Utah'},
                    {label: 'VT', value: 'Vermont'},
                    {label: 'VA', value: 'Virginia'},
                    {label: 'WA', value: 'Washington'},
                    {label: 'WV', value: 'West Virginia'},
                    {label: 'WI', value: 'Wisconsin'},
                    {label: 'WY', value: 'Wyoming'}
                ]}
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
                    { label: 'Historical / Cultural', value: 'historical_cultural' },
                ]}
                value={type}
                onChange={handleTypeChange}
                placeholder="Select an option"
                className="Dropdown-root"
                controlClassName="Dropdown-control"
                menuClassName="Dropdown-menu"
                arrowClassName="Dropdown-arrow"
            />

            <p>What city do you want to go to?</p>
            <input
                type="text"
                value={desCity}
                onChange={handleDesCityChange}
            />


            <p>What state do you want to go to?</p>
            <Dropdown
                options={[
                    {label: 'AL', value: 'Alabama'},
                    {label: 'AK', value: 'Alaska'},
                    {label: 'AZ', value: 'Arizona'},
                    {label: 'AR', value: 'Arkansas'},
                    {label: 'CA', value: 'California'},
                    {label: 'CO', value: 'Colorado'},
                    {label: 'CT', value: 'Connecticut'},
                    {label: 'DE', value: 'Delaware'},
                    {label: 'FL', value: 'Florida'},
                    {label: 'GA', value: 'Georgia'},
                    {label: 'HI', value: 'Hawaii'},
                    {label: 'ID', value: 'Idaho'},
                    {label: 'IL', value: 'Illinois'},
                    {label: 'IN', value: 'Indiana'},
                    {label: 'IA', value: 'Iowa'},
                    {label: 'KS', value: 'Kansas'},
                    {label: 'KY', value: 'Kentucky'},
                    {label: 'LA', value: 'Louisiana'},
                    {label: 'ME', value: 'Maine'},
                    {label: 'MD', value: 'Maryland'},
                    {label: 'MA', value: 'Massachusetts'},
                    {label: 'MI', value: 'Michigan'},
                    {label: 'MN', value: 'Minnesota'},
                    {label: 'MS', value: 'Mississippi'},
                    {label: 'MO', value: 'Missouri'},
                    {label: 'MT', value: 'Montana'},
                    {label: 'NE', value: 'Nebraska'},
                    {label: 'NV', value: 'Nevada'},
                    {label: 'NH', value: 'New Hampshire'},
                    {label: 'NJ', value: 'New Jersey'},
                    {label: 'NM', value: 'New Mexico'},
                    {label: 'NY', value: 'New York'},
                    {label: 'NC', value: 'North Carolina'},
                    {label: 'ND', value: 'North Dakota'},
                    {label: 'OH', value: 'Ohio'},
                    {label: 'OK', value: 'Oklahoma'},
                    {label: 'OR', value: 'Oregon'},
                    {label: 'PA', value: 'Pennsylvania'},
                    {label: 'RI', value: 'Rhode Island'},
                    {label: 'SC', value: 'South Carolina'},
                    {label: 'SD', value: 'South Dakota'},
                    {label: 'TN', value: 'Tennessee'},
                    {label: 'TX', value: 'Texas'},
                    {label: 'UT', value: 'Utah'},
                    {label: 'VT', value: 'Vermont'},
                    {label: 'VA', value: 'Virginia'},
                    {label: 'WA', value: 'Washington'},
                    {label: 'WV', value: 'West Virginia'},
                    {label: 'WI', value: 'Wisconsin'},
                    {label: 'WY', value: 'Wyoming'}
                ]}
                value={desState}
                onChange={handleDesStateChange}

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
                placeholder="Select an option"
                className="Dropdown-root"
                controlClassName="Dropdown-control"
                menuClassName="Dropdown-menu"
                arrowClassName="Dropdown-arrow"
            />
            

            <section>
                <button className="cta-button" onClick={navigation}> Get Your Trip Details</button>
            </section>

            
        </div>
    );
}

export default UserInput;