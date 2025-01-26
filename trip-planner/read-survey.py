import openai

# Set up your OpenAI API key
openai.api_key = ""

# Dictionary for city-to-IATA code mapping
iata_codes = {
    "atlanta": "ATL",
    "boston": "BOS",
    "chicago": "ORD",
    "dallas_fort_worth": "DFW",
    "denver": "DEN",
    "detroit": "DTW",
    "honolulu": "HNL",
    "houston": "IAH",
    "las_vegas": "LAS",
    "los_angeles": "LAX",
    "miami": "MIA",
    "minneapolis": "MSP",
    "new_york_jfk": "JFK",
    "new_york_laguardia": "LGA",
    "orlando": "MCO",
    "philadelphia": "PHL",
    "phoenix": "PHX",
    "salt_lake_city": "SLC",
    "san_diego": "SAN",
    "san_francisco": "SFO",
    "seattle": "SEA",
    "washington_dc_dulles": "IAD",
    "washington_dc_reagan": "DCA",
    "anchorage": "ANC",
    "austin": "AUS",
    "baltimore": "BWI",
    "charlotte": "CLT",
    "cincinnati": "CVG",
    "cleveland": "CLE",
    "columbus": "CMH",
    "indianapolis": "IND",
    "kansas_city": "MCI",
    "memphis": "MEM",
    "milwaukee": "MKE",
    "nashville": "BNA",
    "new_orleans": "MSY",
    "pittsburgh": "PIT",
    "portland": "PDX",
    "sacramento": "SMF",
    "san_antonio": "SAT",
    "san_jose": "SJC",
    "st_louis": "STL",
    "tampa": "TPA",
    "raleigh_durham": "RDU",
    "santa_ana": "SNA",
    "fort_lauderdale": "FLL",
    "oakland": "OAK",
    "burbank": "BUR",
    "long_beach": "LGB",
    "ontario": "ONT",
    "sarasota": "SRQ",
    "west_palm_beach": "PBI",
    "jacksonville": "JAX",
    "fort_myers": "RSW",
    "buffalo": "BUF",
    "albany": "ALB",
    "rochester": "ROC",
    "syracuse": "SYR",
    "hartford": "BDL",
    "providence": "PVD",
    "manchester": "MHT",
    "birmingham": "BHM",
    "huntsville": "HSV",
    "mobile": "MOB",
    "little_rock": "LIT",
    "fayetteville": "XNA",
    "tucson": "TUS",
    "mesa": "AZA",
    "fresno": "FAT",
    "bakersfield": "BFL",
    "stockton": "SCK",
    "colorado_springs": "COS",
    "grand_junction": "GJT",
    "new_haven": "HVN",
    "wilmington": "ILM",
    "greensboro": "GSO",
    "charleston_sc": "CHS",
    "columbia_sc": "CAE",
    "greenville_spartanburg": "GSP",
    "savannah": "SAV",
    "augusta": "AGS",
    "boise": "BOI",
    "spokane": "GEG",
    "idaho_falls": "IDA",
    "peoria": "PIA",
    "springfield_il": "SPI",
    "bloomington": "BMI",
    "evansville": "EVV",
    "fort_wayne": "FWA",
    "south_bend": "SBN",
    "des_moines": "DSM",
    "cedar_rapids": "CID",
    "wichita": "ICT",
    "lexington": "LEX",
    "louisville": "SDF",
    "new_orleans": "MSY",
    "baton_rouge": "BTR",
    "shreveport": "SHV",
    "portland_me": "PWM",
    "bangor": "BGR",
    "hyannis": "HYA",
    "nantucket": "ACK",
    "martha's_vineyard": "MVY",
    "worcester": "ORH",
    "flint": "FNT",
    "grand_rapids": "GRR",
    "kalamazoo": "AZO",
    "lansing": "LAN",
    "saginaw": "MBS",
    "duluth": "DLH",
    "rochester_mn": "RST",
    "gulfport": "GPT",
    "jackson_ms": "JAN",
    "columbia_mo": "COU",
    "springfield_mo": "SGF",
    "billings": "BIL",
    "missoula": "MSO",
    "lincoln": "LNK",
    "omaha": "OMA",
    "las_vegas": "LAS",
    "reno": "RNO",
    "manchester": "MHT",
    "atlantic_city": "ACY",
    "albuquerque": "ABQ",
    "santa_fe": "SAF",
    "albany": "ALB",
    "islip": "ISP",
    "white_plains": "HPN",
    "ithaca": "ITH",
    "syracuse": "SYR",
    "rochester": "ROC",
    "buffalo": "BUF",
    "charlotte": "CLT",
    "raleigh_durham": "RDU",
    "greensboro": "GSO",
    "fargo": "FAR",
    "bismarck": "BIS",
    "akron": "CAK",
    "cincinnati": "CVG",
    "cleveland": "CLE",
    "columbus": "CMH",
    "dayton": "DAY",
    "toledo": "TOL",
    "oklahoma_city": "OKC",
    "tulsa": "TUL",
    "eugene": "EUG",
    "medford": "MFR",
    "bend": "RDM",
    "harrisburg": "MDT",
    "scranton": "AVP",
    "state_college": "SCE",
    "allentown": "ABE",
    "philadelphia": "PHL",
    "pittsburgh": "PIT",
    "providence": "PVD",
    "charleston_sc": "CHS",
    "greenville_spartanburg": "GSP",
    "columbia_sc": "CAE",
    "rapid_city": "RAP",
    "sioux_falls": "FSD",
    "chattanooga": "CHA",
    "knoxville": "TYS",
    "memphis": "MEM",
    "nashville": "BNA",
    "austin": "AUS",
    "dallas_fort_worth": "DFW",
    "houston_hobby": "HOU",
    "houston_bush": "IAH",
    "san_antonio": "SAT",
    "el_paso": "ELP",
    "salt_lake_city": "SLC",
    "burlington": "BTV",
    "norfolk": "ORF",
    "richmond": "RIC",
    "roanoke": "ROA",
    "seattle": "SEA",
    "spokane": "GEG",
    "charleston_wv": "CRW",
    "madison": "MSN",
    "milwaukee": "MKE",
    "cheyenne": "CYS",
    "jackson_hole": "JAC",
    "casper": "CPR",
}

# Function to query OpenAI for the nearest airport IATA code
def get_nearest_airport(city, state):
    try:
        prompt = (
            f"What is the nearest major airport IATA code for {city.replace('_', ' ')} in "
            f"{state.upper()}? Please return only the 3-letter IATA code, in all caps, no additional text."
        )
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": prompt}
            ]
        )
        # Extract the response
        return response["choices"][0]["message"]["content"].strip()
    except Exception as e:
        print(f"Error querying OpenAI API: {e}")
        return "UNKNOWN"

# Function to reformat the date
def reformat_date(date_str):
    month, day, year = date_str.split("_")
    return f"{year[2:]}{month}{day}"

# File reading and processing with error handling
survey_data = {}

try:
    with open("survey-result.txt", "r") as file:
        lines = file.readlines()
    
    # Check if the file has at least two lines
    if len(lines) < 2:
        raise ValueError("The file does not contain enough lines to process.")
    
    # Process the second line
    header = lines[0]
    data_line = lines[1].strip()  # Assuming the second line contains the data
    
    # Parse the second line
    start_date, end_date, num_days, curr_location, theme, with_who = data_line.split(",")
    
    # Reformat dates
    formatted_start_date = reformat_date(start_date)
    formatted_end_date = reformat_date(end_date)
    
    # Parse city and state
    if "_" in curr_location:
        city, state = curr_location.rsplit("_", 1)
    else:
        city, state = curr_location, ""

    # Get IATA code from the dictionary or use OpenAI API
    curr_location_iata = iata_codes.get(city)
    if not curr_location_iata:
        curr_location_iata = get_nearest_airport(city, state)
    
    # Store the data in a dictionary
    survey_data = {
        "start_date": formatted_start_date,
        "end_date": formatted_end_date,
        "num_days": int(num_days),
        "curr_location": curr_location_iata,
        "theme": theme,
        "with_who": with_who,
    }
    
    # Print the processed data
    print(survey_data)

except FileNotFoundError:
    print("Error: The file 'survey-result.txt' was not found.")
except ValueError as ve:
    print(f"Error: {ve}")
except Exception as e:
    print(f"An unexpected error occurred: {e}")
