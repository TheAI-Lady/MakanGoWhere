alasql("CREATE TABLE restaurants (name STRING, address STRING, restaurant_district STRING, cuisine STRING, opening_hours STRING, phone_number STRING, website STRING, google_maps_link STRING)");
alasql.tables.restaurants.data = [
    {   
        name: 'iO Italian Osteria',
        address: '4 Hillview Rise Hill V2 Singapore 667979',
        restaurant_district: 'Bukit Batok',
        cuisine: 'italian',
        opening_hours: '10:00 AM - 10:00 PM',
        phone_number: '+65 6710 7150',
        website: 'io-osteria.com',
        google_maps_link: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6894555487015!2d103.76231221426535!3d1.3629887619139576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1053aa50898d%3A0xc66016df53793535!2siO%20Italian%20Osteria%20Singapore!5e0!3m2!1sen!2ssg!4v1607763975885!5m2!1sen!2ssg" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
    },
    {   
        name: 'The Naked Finn', 
        address: '39 Malan Rd,Gilman barracks,singapore 109442',
        restaurant_district: 'Queenstown',
        cuisine: 'seafood',
        opening_hours: '12:00 PM - 3:00 PM, 6:00 PM - 10:30 PM',
        phone_number: '+65 6694 0807',
        website: 'nakedfinn.com',
        google_maps_link: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.314033379!2d103.8044554!3d1.2762813!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbb7790db0449f5f!2sNaked%20Finn!5e0!3m2!1sen!2ssg!4v1607766713826!5m2!1sen!2ssg" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>',
    },
    {
        name: 'Heart of Darkness Singapore',
        address: '1 Keong Saik Rd, Singapore 089109',
        restaurant_district: 'Tanjong Pagar',
        cuisine: 'Bars',
        opening_hours:'12:00 PM - 12:00 AM (Next day)',
        phone_number: '+65 6208 7940',
        website: 'heartofdarknessbrewery.com.sg',
        google_maps_link: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.297660015913!2d103.8414072!3d1.2789177!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x48ffb80c07f4cda5!2sHeart%20of%20Darkness%20Singapore!5e0!3m2!1sen!2ssg!4v1607766878542!5m2!1sen!2ssg" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
    },
    {
        name: 'Burnt Ends',
        address: '20 Teck Lim Rd, Singapore 088391',
        restaurant_district: 'Outram Park',
        cuisine: 'Australian',
        opening_hours: '12:00 PM - 2:00 PM, 6:00 PM - 11:00 PM',
        phone_number: '+65 6224 3933',
        website: 'https://burntends.com.sg/',
        google_maps_link: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.287549257317!2d103.8418394!3d1.280543!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb324b3b59b409d43!2sBurnt%20Ends!5e0!3m2!1sen!2ssg!4v1607766929412!5m2!1sen!2ssg" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
    },
    {
        name: 'Pietrasanta',
        address: '1 Fusionopolis Way #01-08 Connexis Connexis Tower, Singapore 138632',
        restaurant_district: 'Queenstown',
        cuisine: 'italian',
        opening_hours: '11:45 AM - 2:30 PM, 5:30 PM - 10:00 PM',
        phone_number: '+65 6479 9521',
        website: 'http://www.ristorante-pietrasanta.com/',
        google_maps_link: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.174582820824!2d103.7879226!3d1.298564!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x536fd14711fcb2!2sPietrasanta%20The%20Italian%20Restaurant!5e0!3m2!1sen!2ssg!4v1607766967062!5m2!1sen!2ssg" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
    },
    {
        name: 'Jiak Modern Tzechar @ Hillview',
        address: '4 Hillview Rise, #02-04, Singapore 667979',
        restaurant_district: 'Bukit Batok',
        cuisine: 'chinese',
        opening_hours: '11:30 AM - 9:00 PM',
        phone_number: '+65 6265 1097',
        website: 'https://www.jiak.com.sg/',
        google_maps_link: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.688749429052!2d103.76241441457263!3d1.3634149990056192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1052bd47fb13%3A0x477301144ebcf073!2sJiak%20Modern%20Tzechar%20%40%20Hillview!5e0!3m2!1sen!2ssg!4v1607767111184!5m2!1sen!2ssg" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
    },
    {
        name: 'Humpback',
        address: '20 Bukit Pasoh Rd',
        restaurant_district: 'Tanjong Pagar',
        cuisine: 'American (Traditional)',
        opening_hours: '5:00 PM - 12:00 AM (Next day)',
        phone: '+65 6750 4461',
        website: 'humpback.sg',
        google_maps_link: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8240127308463!2d103.8386352145726!3d1.279176499067008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da196d8dfe3df5%3A0xb586c57168be44b0!2sHumpback!5e0!3m2!1sen!2ssg!4v1607767172307!5m2!1sen!2ssg" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
    },
    {
        name: 'Potato Head Singapore',
        address: '36 Keong Saik Rd, Singapore 089143',
        restaurant_district: 'Outram Park',
        cuisine: 'Restaurants, Burgers',
        opening_hours: '11:00 AM - 12:00 AM',
        phone: '+65 6327 1939',
        website: 'https://potatohead.co/singapore',
        google_maps_link: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.822095835891!2d103.8395254145725!3d1.2804089990661238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da197263cd0299%3A0xad77e0cd9ff03662!2sPotato%20Head%20Singapore!5e0!3m2!1sen!2ssg!4v1607767196128!5m2!1sen!2ssg" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
    }
];