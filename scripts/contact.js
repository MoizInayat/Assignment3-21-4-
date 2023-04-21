// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

var thank_you = "Thanks for your message!";
var input_text = document.getElementById("contact-page");
var sumbmission = document.getElementById("submit-button");

sumbmission.addEventListener("click", change_text);

function change_text() {
    input_text.innerHTML = thank_you;
}

input_text.style.fontSize = "24px";