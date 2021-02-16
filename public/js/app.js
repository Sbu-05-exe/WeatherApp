const search = document.querySelector("input")
const weatherform = document.querySelector("form")
const messageOne = document.querySelector("#message-one")
const messageTwo = document.querySelector("#message-two")

weatherform.addEventListener("submit", (e) => {
	e.preventDefault();

	messageOne.className=""
	messageOne.textContent = "Loading..."
	messageTwo.textContent= ""

	fetch(`/weather?address=${search.value}`).then((response) => {
		// console.log(response)

		response.json().then(data => {

			if (data.error) {
				messageOne.className="error"
				return messageOne.innerText = data.error
			} 

			messageOne.className=""
			messageOne.textContent = data.location
			messageTwo.textContent = data.forecast

		})
	}).catch(err => {
		console.log(err)
	})
})