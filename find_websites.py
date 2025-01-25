import googlemaps
import pprint
import re
gmaps = googlemaps.Client(key='')

def get_list(file_path):
    with open("Paris_itinerary_5_days.txt", "r") as f:
        places = f.read()


    pattern = r"places = \[\n(.*?)\n\]"
    match = re.search(pattern, places, re.DOTALL)  # re.DOTALL allows matching across multiple lines

    if match:
        extracted_content = match.group(1)  # Extract the part inside the brackets
        # Split the content into a Python list by stripping and splitting lines
        places_list = [line.strip().strip('"') for line in extracted_content.split(",\n")]
        print("Extracted Python List:")
        print(places_list)
    else:
        print("No matching content found.")

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


places_list = get_list("Paris_itinerary_5_days.txt")
websites = get_websites(places_list)
print(websites)