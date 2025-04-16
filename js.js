let form = document.querySelector(".signup")
let labels = form.querySelectorAll("label")
let button = document.querySelector("button")

let text1 = document.querySelector(".text1")
let text2 = document.querySelector(".text2")
let text3 = document.querySelector(".text3")
let text4 = document.querySelector(".text4")

let error = document.querySelectorAll(".error")
let required = form.querySelectorAll(".required")
let notError = form.querySelectorAll(".notError")

labels.forEach(label => {
    label.classList.remove("error")
})

text1.textContent = "All: " + labels.length
text2.textContent = "Need: " + required.length
console.log(error);




button.onclick = (e) => {
    e.preventDefault()
    text3.textContent = "Success: 7/" + notError.length
    text4.textContent = "Error: " + error.length + "/"  + required.length
    const formData = {}
    let isError = false
    
    labels.forEach(label => {
        let input = label.querySelector("input")
        let erorMassage = label.querySelector(".feel")

        if (label.classList.contains("required")) {
            if (input.value.length === 0) {
                label.classList.add("error")
                erorMassage.textContent = "Please enter " + input.name
                isError = true
                button.classList.add("err")
                label.classList.remove("notError")
            } else {
                label.classList.remove("error")
                erorMassage.textContent = "Need to fil"
                button.classList.remove("err")
                label.classList.add("notError")
            }
        }
        formData[input.name] = input.value
    })
    if (isError === false) {
        console.log(formData);
        labels.forEach(label => {
            label.querySelector("input")
            label.value = ""
        })
    }
}