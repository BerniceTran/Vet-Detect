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
            latitude: 40.757780,
            longitude: -73.919620,
            phone: 17187282822,
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
            latitude: 40.759850,
            longitude: -73.920197,
            phone: 17182787811,
            image: "https://lh3.googleusercontent.com/proxy/WHw0zgNUp85oVNwRKDSmGHPLd2LgOBs8uBsDlfhJWhTZLogGke-OXC_tHtMa6uVbZW5FBVRfQbtuAvMO1-9sgKaIn1E4Q4s0ujHPpv_DIcSBvXDm5a-bhQFwnZleTCBMNicDQw",
        },
        {
            name: "Court Square Animal Hospital",
            address: {
                street: "4234 Crescent Street",
                city: "Long Island City",
                state: "NY",
                zip: "11101",
            },
            latitude: 40.749721,
            longitude: -73.941572,
            phone: 17185774701,
            image: "https://liccourtsquare.com/wp-content/uploads/2019/07/unnamed-32.jpg",
        },
        {
            name: "Urban Vets Animal Hospital",
            address: {
                street: "163 Loisaida Ave",
                city: "New York",
                state: "NY",
                zip: "10009",
            },
            
            latitude:  40.726076658024894,
            longitude: -73.97771520917628,
            phone: 12126746200,
            image: "https://live.staticflickr.com/586/23469561891_73e67c65d0_b.jpg"
        },
        {
            name: "ASPCA Community Veterinary Center",
            address: {
                street: "501 E 161 St",
                city: "Bronx",
                state: "NY",
                zip: "10451",
            },
            latitude: 40.82326974763307,
            longitude: -73.90937884208836,
            phone: 18446927722,
            image: "https://lh5.googleusercontent.com/p/AF1QipOlCLrm4sQgWZxmKuZbSZVriSrt6iEa9Qv-CzhG=w408-h272-k-no",
        },
        {
            name: "Bond Vet - Upper West Side",
            address: {
                street: "352 Amsterdam Ave",
                city: "New York",
                state: "NY",
                zip: "10024",
            },
            latitude: 40.78175838083548, 
            longitude: -73.9795732899591,
            phone: 12127299661,
            image: "https://lh5.googleusercontent.com/p/AF1QipPr_buHo9WxPKUZgaQ-pB0Yw-ibdKvVUD8p89Qg=w426-h240-k-no",
        },
        {
            name: "Bond Vet - Chelsea",
            address: {
                street: "555 6th Ave",
                city: "New York",
                state: "NY",
                zip: "10011",
            },
            latitude: 40.73861140851091,
            longitude: -73.99609878581889,
            phone: 12125184667,
            image: "https://lh5.googleusercontent.com/p/AF1QipOLEA9DVHTEohBO0x5BVrBT_1KyEdaA5cbosnqi=w426-h240-k-no",
        },
        {
            name: "Pure Paws Veterinary Care of Clinton Hill",
            address: {
                street: "944 Fulton St",
                city: "Brooklyn",
                state: "NY",
                zip: "11238",
            },
            latitude: 40.682533847446535,
            longitude: -73.96301852804066,
            phone: 17187835500,
            image: "https://lh5.googleusercontent.com/p/AF1QipPr_buHo9WxPKUZgaQ-pB0Yw-ibdKvVUD8p89Qg=w426-h240-k-no",
        },
        {
            name: "Manhattan Beach Animal Clinic",
            address: {
                street: "126 Brighton 11th St",
                city: "Brooklyn",
                state: "NY",
                zip: "11235",
            },
            latitude: 40.57992616542961,
            longitude: -73.95795053640249,
            phone: 17186160964,
            image: "https://lh5.googleusercontent.com/p/AF1QipMGg7rNz9pSST4Ry0OCj1d7lLGD9x0BUl0WrcYE=w408-h544-k-no",
        },
    ]
}


export default data;