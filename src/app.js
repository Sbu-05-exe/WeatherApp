const path = require("path");
const express = require("express");

// define paths for express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname,"../templates");

const app = express();

app.set("view engine","hbs");
app.set("views", viewPath);
app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
	res.render("index", {
		title: "Weather",
		name: "Andrew mead"
	});
});

app.get("/About", (req,res)=> {

	res.render("About", {
		title: "About",
		name: "Psych"
	})
})

app.get("/Help", (req,res) => {

	res.render("Help", {
		title: "Help",
		helpText: "Ooops... something went wrong :("
	})
})
app.get("/weather", (req,res) => {
	res.send({
		current: {
			location: "Alberton",
			temperature: 20,
			forecast: "Raining inside"
		}
	})
})

const PORT = 3000;
app.listen(PORT, () => {
	// everything here shows up in the terminal
	console.log(`Server up and running on port:[${PORT}]`);
})
