// newsletter confirmation

function handleContact(event) {
    event.preventDefault();

    const email = event.target.email.value;
    console.log(email);

    const confirmationContainer = document.getElementById("confirmation_container");
    console.log(confirmationContainer);


    const emailParagraph = document.createElement("p");
    const confirmationMessage = document.createElement("p");
    confirmationMessage.innerText = `Subscription successful!`;
    emailParagraph.innerText = `Subscribed e-mail: ${email}`;


    console.log(confirmationMessage);
    console.log(emailParagraph);
    confirmationContainer.appendChild(confirmationMessage);
    confirmationContainer.appendChild(emailParagraph);
}