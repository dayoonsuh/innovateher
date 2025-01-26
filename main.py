import googlemaps
import pprint
import re
import ast
from openai import OpenAI

gmaps = googlemaps.Client(key='')

def get_list(file_path, city):
    with open(file_path, "r") as f:
        places = f.read()


    # pattern = r"= \[\n(.*?)\n\]"
    # match = re.search(pattern, places, re.DOTALL)  # re.DOTALL allows matching across multiple lines

    # if match:
    #     extracted_content = match.group(1)  # Extract the part inside the brackets
    #     # Split the content into a Python list by stripping and splitting lines
    #     places_list = [line.strip().strip('"') + ", "+ city for line in extracted_content.split(",\n")]
    # else:
    #     print("No matching content found.")
    list_str = places.split("=", 1)[1].strip()

    # Convert the string into a Python list
    places_list = ast.literal_eval(list_str)

    return places_list

def get_place_id(place, location=None):
    place_id = gmaps.find_place(
        input=place,
        input_type="textquery",
        fields=["place_id"],
        location_bias=f"point:{location['lat']},{location['lng']}" if location else None
    )
    if place_id.get("candidates"):
        return place_id["candidates"][0]["place_id"]
    
    return None

def get_websites(places_list):
    
    website_list = []
    for place in places_list:
        place_id = get_place_id(place)

        if place_id == None:
            continue
        
        website = gmaps.place(
            place_id=place_id,
            fields=["name", "website"]
        )
        if website.get("result"):
            place_details = website["result"]
            website_list.append( place_details.get("website"))
    
    return website_list

def need_flight(origin, destination):
    distance = int(gmaps.directions(origin=origin, destination=destination)[0]['legs'][0]['distance']['text'].split()[0].replace(",", ""))
    if distance > 200 :
        return True
    
    return False

def generate_flight_link(city1, city2, departure_date1, departure_date2):
    # Lookup IATA codes for the cities (you'll need an API or database for this)
    client = OpenAI(
            api_key=""  
            )

    completion = client.chat.completions.create(
                    model="gpt-4o-mini",
                    store=True,
                    messages=[
                        {"role": "user", "content": f"What is the IATA code of the nearest international airport for {city1} and {city2} for each?"},
                        {"role": "developer", "content": "Give the IATA code only in the format of IATA1 IATA2"}
                        ]
    )

    response_content = completion.choices[0].message.content
    city1, city2 = response_content.split(" ")[0], response_content.split(" ")[1]
    
    flights_link = f"https://www.skyscanner.com/transport/flights/{city1.lower()}/{city2.lower()}/{departure_date1}/{departure_date2}/?adultsv2=1&cabinclass=economy&childrenv2=&ref=home&rtn=1&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false"
    return flights_link

def generate_hotel_link(city):
    # Encode the city name to make it URL-safe
    from urllib.parse import quote
    city_encoded = quote(city)

    # Booking.com URL with star rating filter (3+ stars)
    booking_url = f"https://www.booking.com/searchresults.html?ss={city_encoded}&nflt=class%3D3%3Bclass%3D4%3Bclass%3D5"

    return booking_url


def create_itinerary(city, state, days, with_who, theme):
    prompt = f"Create a detailed and personalized {days}-day trip plan for visiting {city, state} {with_who}. \
    The trip should focus on a '{theme}' theme. \
    The plan should include daily itineraries with suggestions for meals at renowned or hidden-gem restaurants, \
    cultural experiences, and local attractions. \
    Each day should also incorporate activities or landmarks near the dining locations to optimize the schedule. \
    "

    client = OpenAI(
            api_key=""  
            )

    completion = client.chat.completions.create(
                    model="gpt-4o-mini",
                    store=True,
                    messages=[
                        {"role": "user", "content": prompt},
                        {"role": "developer", "content": "Format the schedule like Day 1\nMorning:\nAfternoon:\nEvening:\nDay 2\n ...\
                        Write it in plain texts. No * or #. Then, at the very bottom, make a python list of the places starting with places = ."}
                        ]
    )

    print("Creating itineraries...")
    print()

    response_content = completion.choices[0].message.content

    file_name = f"{city}_{state}_itinerary_{days}_days.txt"  # Name the file dynamically
    with open(file_name, "w", encoding="utf-8") as file:
        file.write(response_content)

    print(f"Response saved to {file_name}")
    return

def create_links(file_path, origin, destination, date1, date2):
    places_list = get_list(file_path, destination)
    websites = get_websites(places_list)
    
    file_name = f"{destination}_links.txt"

    with open(file_name, "w", encoding="utf-8") as file:
        file.write(generate_flight_link(origin, destination, date1, date2) + "\n")
        file.write(generate_hotel_link(origin) + "\n")

        for website in websites:
            if website:
                file.write(website + "\n")

    print(f"Response saved to {file_name}")
    return

if __name__ == "__main__":
    org_city, org_state, des_city, des_state, days, date1, date2, with_who, theme = "Lafayette", "IN", "San Diego", "CA", 4, "250303", "250306", "with friends", 'food'
    origin =  org_city + "_" + org_state
    destination = des_city + "_" + des_state

    file_path = f"{des_city}_{des_state}_itinerary_{days}_days.txt"

    create_itinerary(des_city, des_state, days, with_who, theme)
    
    create_links(file_path, origin, destination, date1, date2)