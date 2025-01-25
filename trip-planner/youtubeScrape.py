import requests

def get_travel_vlogs(city_name, api_key):
    # Base URL for YouTube API
    url = "https://www.googleapis.com/youtube/v3/search"

    # Parameters for the API request
    params = {
        "part": "snippet",
        "q": f"{city_name} travel vlog",
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
API_KEY = "AIzaSyD4shIi89YJuMkDEtS0FXVUX9cT0wbDe5U"
city = "Honolulu"
vlogs = get_travel_vlogs(city, API_KEY)
for vlog in vlogs:
    print(f"Title: {vlog['title']}")
    print(f"Channel: {vlog['channel']}")
    print(f"URL: {vlog['url']}\n")
