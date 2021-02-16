const search = document.querySelector("input")
const weatherform = document.querySelector("form")
const messageOne = document.querySelector("#message-one")
const messageTwo = document.querySelector("#message-two")
const weatherIcon = document.querySelector(".weather-icon")
weatherIcon.hidden = true

weatherform.addEventListener("submit", (e) => {
	e.preventDefault();

	weatherIcon.hidden = true
	messageOne.classList.remove("error")
	messageOne.textContent = "Loading..."
	messageTwo.textContent= ""

	fetch(`/weather?address=${search.value}`).then((response) => {

		response.json().then(data => {

			if (data.error) {
				messageOne.classList.add("error")
				return messageOne.innerText = data.error
			} 

			weatherIcon.hidden = false
			weatherIcon.src = data.icon

			messageOne.textContent = data.location
			messageTwo.textContent = data.forecast

		})
	})
})