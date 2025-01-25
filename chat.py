from openai import OpenAI

# Example user inputs 
city = "Paris"
days = "5"
theme = "food"
budget = 1000
style = 'modern and minimalistic'
transportation = 'car'
with_who = "with friends"

prompt = f"Create a detailed and personalized {days}-day trip plan for visiting {city} {with_who}. \
    The trip should focus on a '{theme}' theme, with a {style} style for cafes and restaurants. \
    The group has a budget of {budget} per person and will be using {transportation} for transportation. \
    The plan should include daily itineraries with suggestions for meals at renowned or hidden-gem restaurants, \
    cultural experiences, and local attractions. \
    Each day should also incorporate activities or landmarks near the dining locations to optimize the schedule. \
    # If there is any place that requires booking or reservations or requires tickets, list the website links or reservation page links at the bottom separately.\
    "

client = OpenAI(
  api_key=""
)

completion = client.chat.completions.create(
  model="gpt-4o-mini",
  store=True,
  messages=[
    {"role": "user", "content": prompt},
    {"role": "developer", "content": "Format the results into a table with rows representing the time of the day (Morning, Afternoon, Evening) and columns representing each day in the format of Day #.\
     Then, at the very bottom, make a python list of the places."}
  ]
)

response_content = completion.choices[0].message.content

file_name = f"{city}_itinerary_{days}_days.md"  # Name the file dynamically
with open(file_name, "w", encoding="utf-8") as file:
    file.write(response_content)

print(f"Response saved to {file_name}")

