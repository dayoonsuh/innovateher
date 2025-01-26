import requests

def get_travel_vlogs(city_name, category, api_key):
    """
    Fetch travel vlogs based on city name and category.
    
    Args:
        city_name (str): Name of the city.
        category (str): Travel category (e.g., "solo", "couples", "family", "friends").
        api_key (str): YouTube Data API key.
        
    Returns:
        list: A list of dictionaries containing video details.
    """
    # Base URL for YouTube API
    url = "https://www.googleapis.com/youtube/v3/search"

    # Parameters for the API request
    params = {
        "part": "snippet",
        "q": f"{category} {city_name} travel vlog",
        "type": "video",
        "maxResults": 3,
        "key": api_key
    }

    # Make the API request
    response = requests.get(url, params=params)
    
    if response.status_code == 200:
        results = response.json()
        # Extract video details
        vlogs = []
        for item in results.get("items", []):
            vlog = {
                "title": item["snippet"]["title"],
                "channel": item["snippet"]["channelTitle"],
                "url": f"https://www.youtube.com/watch?v={item['id']['videoId']}"
            }
            vlogs.append(vlog)
        return vlogs
    else:
        print(f"Error: {response.status_code}, {response.text}")
        return []

# Example usage
API_KEY = ""
city = "Honolulu"  # Example city
category = "solo"  # Example category (solo, couples, family, friends)

vlogs = get_travel_vlogs(city, category, API_KEY)
for vlog in vlogs:
    print(f"Title: {vlog['title']}")
    print(f"Channel: {vlog['channel']}")
    print(f"URL: {vlog['url']}\n")
