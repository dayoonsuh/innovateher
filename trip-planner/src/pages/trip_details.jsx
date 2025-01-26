import React, { useState } from 'react';
import axios from 'axios';

const GOOGLE_API_KEY = ''; // Your Google Maps API key
const OPENAI_API_KEY = ''; // Your OpenAI API key

const TripDetails = () => {
  const [itinerary, setItinerary] = useState('');
  const [links, setLinks] = useState([]);

  const getPlaceId = async (place, location = null) => {
    try {
      const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json`;
      const params = {
        input: place,
        inputtype: 'textquery',
        fields: 'place_id',
        key: GOOGLE_API_KEY,
        locationbias: location ? `point:${location.lat},${location.lng}` : undefined,
      };

      const response = await axios.get(url, { params });
      const candidates = response.data.candidates;
      return candidates.length > 0 ? candidates[0].place_id : null;
    } catch (error) {
      console.error('Error fetching place ID:', error);
      return null;
    }
  };

  const getWebsites = async (placesList) => {
    const websiteList = [];

    for (const place of placesList) {
      const placeId = await getPlaceId(place);
      if (!placeId) continue;

      try {
        const url = `https://maps.googleapis.com/maps/api/place/details/json`;
        const params = {
          place_id: placeId,
          fields: 'name,website',
          key: GOOGLE_API_KEY,
        };

        const response = await axios.get(url, { params });
        const result = response.data.result;
        if (result && result.website) {
          websiteList.push(result.website);
        }
      } catch (error) {
        console.error('Error fetching website:', error);
      }
    }

    return websiteList;
  };

  const generateFlightLink = async (city1, city2, departureDate1, departureDate2) => {
    try {
      const url = `https://api.openai.com/v1/chat/completions`;
      const payload = {
        model: 'gpt-4',
        messages: [
          { role: 'user', content: `What is the IATA code of the nearest international airport for ${city1} and ${city2} for each?` },
          { role: 'assistant', content: 'Give the IATA code only in the format of IATA1 IATA2' },
        ],
      };

      const response = await axios.post(url, payload, {
        headers: { Authorization: `Bearer ${OPENAI_API_KEY}`, 'Content-Type': 'application/json' },
      });

      const codes = response.data.choices[0].message.content.trim().split(' ');
      const iata1 = codes[0].toLowerCase();
      const iata2 = codes[1].toLowerCase();

      return `https://www.skyscanner.com/transport/flights/${iata1}/${iata2}/${departureDate1}/${departureDate2}/?adultsv2=1&cabinclass=economy`;
    } catch (error) {
      console.error('Error generating flight link:', error);
      return null;
    }
  };

  const generateHotelLink = (city) => {
    const cityEncoded = encodeURIComponent(city);
    return `https://www.booking.com/searchresults.html?ss=${cityEncoded}&nflt=class%3D3%3Bclass%3D4%3Bclass%3D5`;
  };

  const createItinerary = async (city, state, days, withWho, theme) => {
    const prompt = `Create a detailed and personalized ${days}-day trip plan for visiting ${city}, ${state} ${withWho}. The trip should focus on a '${theme}' theme. Include daily itineraries with suggestions for meals, cultural experiences, and local attractions.`;

    try {
      const url = `https://api.openai.com/v1/chat/completions`;
      const payload = {
        model: 'gpt-4',
        messages: [
          { role: 'user', content: prompt },
          { role: 'assistant', content: "Format the schedule like Day 1\nMorning:\nAfternoon:\nEvening:\nDay 2\n ... Write it in plain text." },
        ],
      };

      const response = await axios.post(url, payload, {
        headers: { Authorization: `Bearer ${OPENAI_API_KEY}`, 'Content-Type': 'application/json' },
      });

      setItinerary(response.data.choices[0].message.content);
    } catch (error) {
      console.error('Error creating itinerary:', error);
    }
  };

  const createLinks = async (placesList, origin, destination, date1, date2) => {
    const websites = await getWebsites(placesList);
    const flightLink = await generateFlightLink(origin, destination, date1, date2);
    const hotelLink = generateHotelLink(destination);

    setLinks([flightLink, hotelLink, ...websites.filter(Boolean)]);
  };

  return (
    <div>
      <h1>Travel Planner</h1>
      <button
        onClick={() => {
          const city = 'San Diego';
          const state = 'CA';
          const days = 4;
          const withWho = 'with friends';
          const theme = 'food';
          createItinerary(city, state, days, withWho, theme);
        }}
      >
        Generate Itinerary
      </button>

      <button
        onClick={() => {
          const placesList = ["Balboa Park", "San Diego Zoo"];
          const origin = "Lafayette_IN";
          const destination = "San_Diego_CA";
          const date1 = "250303";
          const date2 = "250306";
          createLinks(placesList, origin, destination, date1, date2);
        }}
      >
        Generate Links
      </button>

      <div>
        <h2>Itinerary</h2>
        <pre>{itinerary}</pre>
      </div>

      <div>
        <h2>Links</h2>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TripDetails;