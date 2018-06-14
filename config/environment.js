const port = process.env.PORT || 4000;
const env = process.env.NODE_ENV || 'dev';
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/litmap-${env}`;
const secret = process.env.SECRET || 'a gigantic hound!';

module.exports = { port, dbURI, secret, env };
