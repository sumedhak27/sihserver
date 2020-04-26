let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let mongo = require('mongodb').MongoClient;
let pdf = require('express-pdf');
let session = require('express-session');
// firebase
// Configs
let dbConfig = require('./config/dbConfig');
let collectionConfig = require('./config/collectionConfig');
// let firebaseConfig = require('./config/firebaseConfig');
// routers 
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let loginRouter = require('./routes/login');
let formRouter =  require('./routes/form');
let notifyRouter = require('./routes/notify');

let app = express();
let db = {};
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.use(pdf);
// app.use(express.static(path.join(__dirname, "public")));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
	secret: 'secret',
	saveUninitialized: true,
	resave: true
}));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/form',formRouter);
app.use('/notify',notifyRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});
// headers for web
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

// connect to data base
mongo.connect(dbConfig.URI, {
	useNewUrlParser: true
}, function (err, client) {
	if (err) {
		console.log('Error in connecting to db ' + err);
		throw err;
	} else {
		// initalize firebase
		// firebase.initializeApp(firebaseConfig);
		// console.log('firebase : ' + firebase + ' set up ');
		db = client.db(dbConfig.dbName);
		console.log('Connected to db : ' + db);
		// intialize collection
		let Collections = collectionConfig.Collections;
		Collections.initCollections(db);
		loginRouter.getCollectionNames(collectionConfig.collectionNames);
		formRouter.getCollectionNames(collectionConfig.collectionNames);
	}
});


module.exports = app;
