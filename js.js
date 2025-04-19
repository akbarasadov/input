let form = document.querySelector(".signup")
let labels = form.querySelectorAll("label")
let button = document.querySelector("button")

let text1 = document.querySelector(".text1")
let text2 = document.querySelector(".text2")
let text3 = document.querySelector(".text3")
let text4 = document.querySelector(".text4")

let required = form.querySelectorAll(".required")



text1.textContent = "All: " + labels.length
text2.textContent = "Need: " + required.length

let error = 0
let success = 0

let p = document.querySelectorAll(".p")
let erors = document.querySelectorAll(".eror")

let name = document.querySelector("#name")
let email = document.querySelector("#email")
let age = document.querySelector("#age")
let questions = document.querySelectorAll("#questions")

let name1 = document.querySelector(".name")
let email1 = document.querySelector(".email")
let age1 = document.querySelector(".age")
let questions1 = document.querySelectorAll(".questions")



let regex = [
    //name
    /^[A-Za-z]+(?: [A-Za-z]+)*$/,
    //email
    /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim,
    //age
    /^(?:1[01][0-9]|120|[1-9]?[0-9])$/,
    //all
    /^[\s\S]*$/,
]

let nametexterror = document.querySelector(".nametexterror")
let emailtexterror = document.querySelector(".emailtexterror")
let agetexterror = document.querySelector(".agetexterror")
let questionstexterror = document.querySelector(".questionstexterror")


let values = [name, age, email, questions]
let a = [name1, age1, email1, questions1]
let errortext = [
    nametexterror.querySelector(".nametext"),
    emailtexterror.querySelector(".emailtext"),
    agetexterror.querySelector(".agetext"),
    questionstexterror.querySelector(".questionstext"),
]

button.onclick = () => {

    formData = {}

    error = 0
    success = 0

    values.forEach((input, idx) => {
        let isValid = regex[idx].test(input.value);
        let errorText = errortext[idx];

        console.log(input);


        if (input.value === "") {
            input.classList.add("error")
            input.classList.remove("notError")
            errorText.textContent = "Please enter " + input.name
            error++
        } else if (isValid === false) {
            input.classList.add("error")
            input.classList.remove("notError")
            errorText.textContent = `Invalid ${input.name}`
            error++
        } else {
            errorText.textContent = `Good thank you`
            formData[input.name] = input.value
            success++
            input.classList.add("notError")
            input.classList.remove("error")
        }
    });


    text3.textContent = "Success: " + required.length + "/" + (required.length - error)
    text4.textContent = "Error: " + required.length + "/" + error

    if (error === 0) {
        labels.forEach(label => {
            label.querySelector("input")
            label.value = ""
            console.log(formData);
        })
    } else {
        button.classList.add("err")
    }
}