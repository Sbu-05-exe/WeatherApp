const search = document.querySelector("input")
const weatherform = document.querySelector("form")
const messageOne = document.querySelector("#message-one")
const messageTwo = document.querySelector("#message-two")

weatherform.addEventListener("submit", (e) => {
	e.preventDefault();

	console.log(messageOne)

	messageOne.className="success"
	messageOne.textContent = "Loading..."
	messageTwo.textContent= ""

	fetch(`/weather?address=${search.value}`).then((response) => {
		// console.log(response)

		response.json().then(data => {

			if (data.error) {
				messageOne.className="error"
				messageOne.innerText = data.error
				return console.log(data.error)
			} 

			console.log(data.location)
			console.log(data.forecast)
			messageOne.className=""
			messageOne.textContent = data.location
			messageTwo.textContent = data.forecast

		})
	})
})