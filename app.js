let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let mongo = require('mongodb').MongoClient;
let session = require('express-session');
let logger  = require('morgan');
let cors = require('cors');

let dbConfig = require('./config/dbConfig');
let collectionConfig = require('./config/collectionConfig');

let indexRouter = require('./routes/index');
let formRouter =  require('./routes/form');

let app = express();
let db = {};

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(cors());
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
app.use('/form',formRouter);

app.use(function (req, res, next) {
	next(createError(404));
});

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(function (err, req, res, next) {
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	res.status(err.status || 500);
	res.render('error');
});

// connect to data base
mongo.connect(dbConfig.URI, {
	useNewUrlParser: true,
	useUnifiedTopology : true
}, function (err, client) {
	if (err) {
		console.log('Error in connecting to db ' + err);
		throw err;
	} else {
		db = client.db(dbConfig.dbName);
		console.log('Connected to db : ' + db);
		let Collections = collectionConfig.Collections;
		Collections.initCollections(db);
		formRouter.getCollectionNames(collectionConfig.collectionNames);
	}
});


module.exports = app;
