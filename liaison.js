var text = document.querySelector(".title")
document.getElementsByClassName("title")
text.textContent = "goodbye"
text.style.color = "red"

var container = document.createElement("div")

container.style.height = "200px"
container.style.backgroundColor = "gray"

var text1 = document.createElement("input")

container.append("text1")
document.body.append(container)

var person = {
    firstname : "first",
    lastname : "last"
}
console.log(person)