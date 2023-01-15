// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json(
        {
            hotels : [
                {
                    hotelName : "Holiday Inn",
                    hotelImage : "/0.jpg",
                    countryName : "United Kingdom",
                    // countryImage : "/airplane.jpg"
                },
                {
                    hotelName : "Ritz Carlton",
                    hotelImage : "/1.jpg",
                    countryName : "United Kingdom",
                    // countryImage : "/airplane.jpg"
                },
                {
                    hotelName : "Marriott",
                    hotelImage : "/2.jpg",
                    countryName : "United Kingdom",
                    // countryImage : "/airplane.jpg"
                },
                {
                    hotelName : "Hyatt",
                    hotelImage : "/3.jpg",
                    countryName : "United Kingdom",
                    // countryImage : "/airplane.jpg"
                },
                {
                    hotelName : "Four Seasons",
                    hotelImage : "/4.jpg",
                    countryName : "United Kingdom",
                    // countryImage : "/airplane.jpg"
                },
                {
                    hotelName : "Belmond",
                    hotelImage : "/5.jpg",
                    countryName : "United Kingdom",
                    // countryImage : "/airplane.jpg"
                },
                {
                    hotelName : "Peninsula",
                    hotelImage : "/6.jpg",
                    countryName : "United Kingdom",
                    // countryImage : "/airplane.jpg"
                },
                {
                    hotelName : "Ryahd",
                    hotelImage : "/7.jpg",
                    countryName : "United Kingdom",
                    // countryImage : "/airplane.jpg"
                },
                {
                    hotelName : "Stanley Hotel",
                    hotelImage : "/8.jpg",
                    countryName : "United Kingdom",
                    // countryImage : "/airplane.jpg"
                },
                {
                    hotelName : "Aman Resorts",
                    hotelImage : "/9.jpg",
                    countryName : "United Kingdom",
                    // countryImage : "/airplane.jpg"
                }
            ]
        }
    )
  }
  