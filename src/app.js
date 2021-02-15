// modules that need requiring
const hbs = require("hbs")
const path = require("path");
const express = require("express");

// utilities files that I wrote that needs requiring
const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")

// define paths for express config
const publicDirectoryPath = path.join(__dirname, "../public");
const partialsPath = path.join(__dirname, "../templates/partials")
const viewPath = path.join(__dirname,"../templates/views");

const app = express();
const port = process.env.PORT || 3000  

app.set("view engine","hbs");
app.set("views", viewPath);
app.use(express.static(publicDirectoryPath));
hbs.registerPartials(partialsPath)

app.get("/", (req, res) => {
	res.render("index", {
		title: "Weather",
		name: "psych"
	});
});

app.get("/About", (req,res) => {

	res.render("About", {
		title: "About",
		name: "psych"
	});
});

app.get("/Help", (req,res) => {

	res.render("Help", {
		title: "Help",
		name: "psych",
		helpText: "Psych, how may I assist you ;)"
	});
});

app.get("/weather", (req,res) => {

	if (!req.query.address) {
		return res.send({
			error:"Please enter address"
		})
	}

	geocode(req.query.address, (error, {location, latitude, longitude } = {} ) => {

		if (error) {

			return res.send({error})
		}

		forecast(longitude, latitude, (error, data) => {

			if (error) {

				return res.send({error})
			}

			res.send({
				address: req.query.address,
				forecast: data,
				location,
					// forecast: "Raining inside"
			});
		})

	});
	
});

app.get("/help/*", (req, res) => {
	res.render("404", {
		title: "404 :(",
		name: "psych",
		errorMessage: "Help article not found",
		error: "missing article"
	});
});

app.get("*", (req, res) => {
	res.render("404", {
		title: "404 :(",
		name: "psych",
		errorMessage: "Ooops... something went wrong",
		error: "oops"
	});
});

app.listen(port, () => {
	console.log(`Server up and running on port:[${port}]`);
});
