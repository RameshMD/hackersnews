var dbconfig = {
		dev: "mongodb://localhost/hacker-news",
		prod: process.env.MONGOLAB_URI
}

var config = {
	port: process.env.PORT || 2000,
	db: dbconfig.prod || dbconfig.dev
}

module.exports = config;