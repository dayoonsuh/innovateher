def generate_hotel_booking_link(city):
    # Encode the city name to make it URL-safe
    from urllib.parse import quote
    city_encoded = quote(city)

    # Booking.com URL with star rating filter (3+ stars)
    booking_url = f"https://www.booking.com/searchresults.html?ss={city_encoded}&nflt=class%3D3%3Bclass%3D4%3Bclass%3D5"

    return booking_url

# Example usage
city = "San Diego"
link = generate_hotel_booking_link(city)
print(f"Book your hotel here: {link}")
