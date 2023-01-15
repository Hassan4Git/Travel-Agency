// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json(
        {
            employees : [
                {
                    name : "Arman",
                    title : "Event Planner",
                    image : "/person1.jpg",
                    experience: '10 Years Experience',
                    email: 'something@loremtravels.com',
                    frontPage: true,
                },
                {
                    name : "Osama",
                    title : "Pilot",
                    image : "/person0.jpg",
                    experience: '7 Years Experience',
                    email: 'something@loremtravels.com',
                    frontPage: true,
                },
                {
                    name : "Sandy",
                    title : "Hotel Specialist",
                    image : "/person2.jpeg",
                    experience: '15 Years Experience',
                    email: 'something@loremtravels.com',
                    frontPage: true,
                },
                {
                    name : "Emils",
                    title : "Flower boy",
                    image : "/person3.jpg",
                    experience: '4 Years Experience',
                    email: 'something@loremtravels.com',
                    frontPage: true,
                },
                {
                    name : "Hassan",
                    title : "DogeCoin Connoisseur",
                    image : "/person3.jpg",
                    experience: '22 Years Experience',
                    email: 'something@loremtravels.com',
                    frontPage: false,
                },
            ]
        }
    )
  }
  