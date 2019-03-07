var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
var sessionStore = new MySQLStore({
  host     : 'localhost',
  user     : 'bayart',
  password : '1Zad2bulki',
  database : 'bayart'
})

module.exports = session({
  key: 'sid',
  secret: 'ljaljoaiwelk293749aosdjfl23oiu9a8sdul1n238709a8acvalnmw3l41j987adjf',
  store: sessionStore,
  resave: false,
  saveUninitialized: false,
  cookie: { expires: new Date(Date.now() + 864000000) }
})