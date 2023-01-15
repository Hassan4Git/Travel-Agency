// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
	res.status(200).json(
		{
			countries: [
				'United Kingdom',
				'France',
				'Germany',
				'Spain',
				'Italy',
				'Switzerland',
				'Lithuania',
				'Romania',
				'Turkey',
				'Poland',
				'Czech Republic',
				'Belarus'
			]
		}
	)
}


// countries: [
// 	{
// 		countryName: 'France',
// 		products: [
// 			{
// 				packageName: 'Specialty',
// 				hotelName: 'Ryahd',
// 				hotelImage: 'ryahd.png',
// 				price: 1300,
// 				date: '05/10/2023'
// 			},
// 			{
// 				packageName: 'Retreat',
// 				hotelName: 'Holiday Inn',
// 				hotelImage: 'holidayInn.png',
// 				price: 900,
// 				date: '15/06/2023'
// 			},
// 			{
// 				packageName: 'Bougie',
// 				hotelName: 'Hyatt',
// 				hotelImage: 'hyatt.png',
// 				price: 1800,
// 				date: '01/07/2023'
// 			},
// 		]
// 	},
// ]