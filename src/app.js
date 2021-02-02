const path = require("path")
const express = require("express")

console.log(__dirname)

const joinedPath = path.join(__dirname, "..")
console.log(joinedPath)

const app = express()

app.get("", (req, res) => {
	res.send("Hello express")
});

app.get("/help", (req, res) => {
	res.send("Help page")
})

app.get("/about", (req,res) => {
	res.send("<h1>About</h1>")
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

const PORT = 3000
app.listen(PORT, () => {
	// everything here shows up in the terminal
	console.log(`Server up and running on port:[${PORT}]`)
})
