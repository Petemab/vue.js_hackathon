const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const Place = require('../models/place');
const { dbURI } = require('../config/environment');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  Place
    .create([{
      name: 'The George Inn',
      address: '77 Borough High Street',
      location: { lat: 51.504211, lng: -0.090031 },
      description: "The George Inn dates back to the late 16th century, and it stands as the last remaining original coaching inn in London. A placard in the courtyard (which offers ample seating) counts both Shakespeare and Charles Dickens among those who 'knew the hospitality of the inn,' and the spot even has a mention in Dickens' Little Dorrit. The 300-year-old building is pretty stunning, with two floors of interlocking, oak-beamed dining rooms, latticed windows, open fireplaces, and long galleries.",
      image: 'https://www.groupeinseec-london.co.uk/wp-content/uploads/2014/04/george-southwark-021.jpg'
    }, {
      name: "King's Cross Station",
      address: 'Euston Road, N1 9AL',
      location: { lat: 51.526715, lng: -0.132666 },
      description: "The “Platform 9¾” sign (which marks the secret passageway to the Hogwarts Express, but you knew that) has moved around a bit since the first film was released, but these days you can find it in the western departures concourse at King’s Cross Station. Half of a luggage trolley, complete with owl cage, sticks out of the wall underneath it, and a surprisingly short line of Harry Potter fans weave around, waiting for their photo op. At first it seems like maybe it will be embarrassing, since you are in the middle of the concourse and (maybe, in some cases) you are noticeably older than both the friendly employees and the fellow fans, but then you get closer, and you choose a scarf, and the employee validates your choice (“Of course you’re a Hufflepuff, look at you!”), and then OMG YOU’RE GOING TO HOGWARTS IT’S HAPPENING!!",
      image: 'https://s3.eu-central-1.amazonaws.com/locationscoutnet/images/2015-04/platform-9-3-4-of-harry-potter-kings-cross-london-united-kingdom_l.jpeg'
    }, {
      name: "Sherlock Holmes Museum",
      address: '221B Baker Street',
      location: { lat: 51.523767, lng: -0.158556 },
      description: "The Sherlock Holmes Museum is an odd beast. It's an attraction dedicated to a person who never existed, at a location different to the one described in the books. This handsome Georgian house is officially addressed at 221b Baker Street, but you'll find it between numbers 237 and 241. It's easiest to look for the queue. The museum spreads out over four storeys. Each room is crammed with a mix of authentic furniture of the era and pastiche props. It's as though the famous duo have just popped out on a case, and we're snooping round their rooms. And very nice they are too. If you come from a place without any Victorian heritage (i.e. most of the world), then you're in for a visual treat.",
      image: 'https://assets.londonist.com/uploads/2017/05/i730/dsc_0171.jpg'
    }
  ])
    .then(places => console.log(`${places.length} places created!`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
