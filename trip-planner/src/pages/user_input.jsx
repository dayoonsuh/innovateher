import React, { useState } from 'react';
import './user_input.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { saveAs } from 'file-saver';

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
    const handleStateChange = (option) => setState(option.value);
    const handleCityChange = (e) => setCity(e.target.value);
    const handleWithWhoChange = (option) => setWithWho(option.value);
    const handleTypeChange = (option) => setType(option.value);
    const handleDesStateChange = (option) => setDesState(option.value);
    const handleDesCityChange = (e) => setDesCity(e.target.value);


    async function saveFile(content, filename) {
        try {
          const handle = await window.showSaveFilePicker({
            suggestedName: filename,
            types: [
              {
                description: 'Text file',
                accept: { 'text/plain': ['.txt'] },
              },
            ],
          });
          const writable = await handle.createWritable();
          await writable.write(content);
          await writable.close();
          console.log('File saved successfully');
        } catch (err) {
          console.error('Error saving file:', err);
        }
      }
      

    function navigation() {
        const content = `${depDate.getDate()}_${depDate.getMonth() + 1}_${depDate.getFullYear()},${arrDate.getDate()}_${arrDate.getMonth() + 1}_${arrDate.getFullYear()},${city},${state},${desCity},${desState},${withWho},${type}`;
        //saveFile(content, 'trip_details.txt');

        const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
        saveAs(blob, 'hello_world.txt');
        
        // const fs = require('fs');
        // fs.writeFile('example.txt', content, err => {
        //     if (err) {
        //         console.err;
        //         return;
        //     }
        // })

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
                    {label: 'AL', value: 'AL'},
                    {label: 'AK', value: 'AK'},
                    {label: 'AZ', value: 'AZ'},
                    {label: 'AR', value: 'AR'},
                    {label: 'CA', value: 'CA'},
                    {label: 'CO', value: 'CO'},
                    {label: 'CT', value: 'CT'},
                    {label: 'DE', value: 'DE'},
                    {label: 'FL', value: 'FL'},
                    {label: 'GA', value: 'GA'},
                    {label: 'HI', value: 'HI'},
                    {label: 'ID', value: 'ID'},
                    {label: 'IL', value: 'IL'},
                    {label: 'IN', value: 'IN'},
                    {label: 'IA', value: 'IA'},
                    {label: 'KS', value: 'KS'},
                    {label: 'KY', value: 'KY'},
                    {label: 'LA', value: 'LA'},
                    {label: 'ME', value: 'ME'},
                    {label: 'MD', value: 'MD'},
                    {label: 'MA', value: 'MA'},
                    {label: 'MI', value: 'MI'},
                    {label: 'MN', value: 'MN'},
                    {label: 'MS', value: 'MS'},
                    {label: 'MO', value: 'MO'},
                    {label: 'MT', value: 'MT'},
                    {label: 'NE', value: 'NE'},
                    {label: 'NV', value: 'NV'},
                    {label: 'NH', value: 'NH'},
                    {label: 'NJ', value: 'NJ'},
                    {label: 'NM', value: 'NM'},
                    {label: 'NY', value: 'NY'},
                    {label: 'NC', value: 'NC'},
                    {label: 'ND', value: 'ND'},
                    {label: 'OH', value: 'OH'},
                    {label: 'OK', value: 'OK'},
                    {label: 'OR', value: 'OR'},
                    {label: 'PA', value: 'PA'},
                    {label: 'RI', value: 'RI'},
                    {label: 'SC', value: 'SC'},
                    {label: 'SD', value: 'SD'},
                    {label: 'TN', value: 'TN'},
                    {label: 'TX', value: 'TX'},
                    {label: 'UT', value: 'UT'},
                    {label: 'VT', value: 'VT'},
                    {label: 'VA', value: 'VA'},
                    {label: 'WA', value: 'WA'},
                    {label: 'WV', value: 'WV'},
                    {label: 'WI', value: 'WI'},
                    {label: 'WY', value: 'WY'}

                ]}
                value={state}
                onChange={handleStateChange}

            />

            <p>What are you looking to get out of the place that you want to visit?</p>
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
                    {label: 'AL', value: 'AL'},
                    {label: 'AK', value: 'AK'},
                    {label: 'AZ', value: 'AZ'},
                    {label: 'AR', value: 'AR'},
                    {label: 'CA', value: 'CA'},
                    {label: 'CO', value: 'CO'},
                    {label: 'CT', value: 'CT'},
                    {label: 'DE', value: 'DE'},
                    {label: 'FL', value: 'FL'},
                    {label: 'GA', value: 'GA'},
                    {label: 'HI', value: 'HI'},
                    {label: 'ID', value: 'ID'},
                    {label: 'IL', value: 'IL'},
                    {label: 'IN', value: 'IN'},
                    {label: 'IA', value: 'IA'},
                    {label: 'KS', value: 'KS'},
                    {label: 'KY', value: 'KY'},
                    {label: 'LA', value: 'LA'},
                    {label: 'ME', value: 'ME'},
                    {label: 'MD', value: 'MD'},
                    {label: 'MA', value: 'MA'},
                    {label: 'MI', value: 'MI'},
                    {label: 'MN', value: 'MN'},
                    {label: 'MS', value: 'MS'},
                    {label: 'MO', value: 'MO'},
                    {label: 'MT', value: 'MT'},
                    {label: 'NE', value: 'NE'},
                    {label: 'NV', value: 'NV'},
                    {label: 'NH', value: 'NH'},
                    {label: 'NJ', value: 'NJ'},
                    {label: 'NM', value: 'NM'},
                    {label: 'NY', value: 'NY'},
                    {label: 'NC', value: 'NC'},
                    {label: 'ND', value: 'ND'},
                    {label: 'OH', value: 'OH'},
                    {label: 'OK', value: 'OK'},
                    {label: 'OR', value: 'OR'},
                    {label: 'PA', value: 'PA'},
                    {label: 'RI', value: 'RI'},
                    {label: 'SC', value: 'SC'},
                    {label: 'SD', value: 'SD'},
                    {label: 'TN', value: 'TN'},
                    {label: 'TX', value: 'TX'},
                    {label: 'UT', value: 'UT'},
                    {label: 'VT', value: 'VT'},
                    {label: 'VA', value: 'VA'},
                    {label: 'WA', value: 'WA'},
                    {label: 'WV', value: 'WV'},
                    {label: 'WI', value: 'WI'},
                    {label: 'WY', value: 'WY'}

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