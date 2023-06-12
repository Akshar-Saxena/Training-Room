const check_btn = document.querySelector("button");
var _name_ = document.querySelector("#n");
var age = document.querySelector("#a");
var gender = document.querySelector("#g");
var weight = document.querySelector("#w");
var height = document.querySelector("#h");

_name_.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        check_btn.click()
    }
})
age.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        check_btn.click()
    }
})
gender.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        check_btn.click()
    }
})
weight.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        check_btn.click()
    }
})
height.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        check_btn.click()
    }
})

check_btn.addEventListener('click', function () {
    if (_name_.value == "" || age.value == "" || gender.value == "" || weight.value == "" || height.value == "") {
        alert("Fill each field")
    }
    else {
        try {
            let a = parseInt(age.value)
            let b = parseInt(weight.value)
            let c = parseInt(height.value)
            if (!(a > 0)) {
                alert("Enter a valid age")
            }
            else if (!(b > 0)) {
                alert("Enter a valid weight")
            }
            else if (!(c > 0)) {
                alert("Enter a valid height")
            }
            else {
                push_data()
            }

        }
        catch {
            alert("Please check the entered data once!")
        }
        function push_data() {
            var data = _name_.value + "|" + age.value + "|" + gender.value + "|" + weight.value + "|" + height.value;
            localStorage.setItem("data", data);
            if (gender.value == "M" || gender.value == "m") { window.location.href = "mainformale.html" }
            else if (gender.value == "F" || gender.value == "f") { window.location.href = "mainforfemale.html" }
            else { alert("Enter a valid gender") }
        }

    }
})