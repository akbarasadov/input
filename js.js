let button = document.querySelector("button")
let inputs = document.querySelectorAll(".eror")
let p = document.querySelectorAll(".p")
let feel = document.querySelectorAll(".feel")
image = document.querySelectorAll("img")

button.onclick = () => {
    value = false
    inputs.forEach(input => {
        error = input.value === ""
        if (error) {
            value = true
        }
    })
    inputs.forEach(input => {
        p.forEach(p11 => {
            feel.forEach(fell => {
                image.forEach(img => {
                    if (value) {
                        input.classList.add("add")
                        p11.classList.add("p1")
                        fell.classList.add("p1")
                        fell.textContent = "Please enter your email adress"
                        img.classList.add("img")
                    } else {
                        input.classList.remove("add")
                        p11.classList.remove("p1")
                        fell.classList.remove("p1")
                        fell.textContent = "Need to fill"
                        img.classList.remove("img")
                        console.log("Ваши данные отправлены");
                    }
                })
            })

        })

    })

}

