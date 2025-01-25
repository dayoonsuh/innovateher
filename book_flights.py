def generate_flight_link(city1, city2, departure_date1, departure_date2):
    # Lookup IATA codes for the cities (you'll need an API or database for this)
    
    flights_link = f"https://www.skyscanner.com/transport/flights/{city1.lower()}/{city2.lower()}/{departure_date1}/{departure_date2}/?adultsv2=1&cabinclass=economy&childrenv2=&ref=home&rtn=1&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false"
    return flights_link

# Example usage
city1 = "jfk"
city2 = "las"
departure_date1 = "250301"
departure_date2= "250310"

link = generate_flight_link(city1, city2, departure_date1, departure_date2)
print(f"Book your flight here: {link}")
