const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const Place = require('../models/place');
const { dbURI } = require('../config/environment');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  Place
    .create([{
      name: 'London Bridge',
      address: 'London SE1 9DD',
      location: { lat: 51.507879, lng: -0.087732 },
      book: 'Oliver Twist',
      description: 'Several bridges named London Bridge have spanned the River Thames between the City of London and Southwark, in central London. The current crossing, which opened to traffic in 1973, is a box girder bridge built from concrete and steel. It replaced a 19th-century stone-arched bridge, which in turn superseded a 600-year-old stone-built medieval structure. This was preceded by a succession of timber bridges, the first of which was built by the Roman founders of London.',
      image: 'https://en.wikipedia.org/wiki/London_Bridge#/media/File:London_Bridge_Illuminated.jpg'
    }
    ])
    .then(places => console.log(`${places.length} places created!`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
