import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            firstName: 'Bernice',
            lastName: 'Tran',
            email: 'admin@gmail.com',
            password:  bcrypt.hashSync('1234', 8),
            isAdmin: true
        },
        {
            firstName: 'John',
            lastName: 'Smith',
            email: 'user@example.com',
            password:  bcrypt.hashSync('1234', 8),
            isAdmin: false 
        }
    ],
    clinics: [
        {
            name: "Steinway Court Veterinarian",
            address: {
                street: "3241 Steinway Street",
                city: "Queens",
                state: "NY",
                zip: "11103",
            },
            // street: "3241 Steinway Street",
            // city: "Queens",
            // state: "NY",
            // zip: 11103,
            phone: 7187282822,
            image: "https://s3-media0.fl.yelpcdn.com/bphoto/qG7JWhNjZojuf0ZD4Md4rg/l.jpg",
        },
        {
            name: "Veterinary Care Group - Astoria",
            address: {
                street: "37-03 Broadway",
                city: "Queens",
                state: "NY",
                zip: "11103",
            },
            // street: "37-03 Broadway",
            // city: "Queens",
            // state: "NY",
            // zip: 11103,
            phone: 7182787811,
            image: null,
        },
        {
            name: "Court Square Animal Hospital",
            address: {
                street: "4234 Crescent Street",
                city: "Long Island City",
                state: "NY",
                zip: "11101",
            },
            // street: "4234 Crescent Street",
            // city: "Long Island City",
            // state: "NY",
            // zip: 11101,
            phone: 7185774701,
            image: null,
        }
    ]
}


export default data;