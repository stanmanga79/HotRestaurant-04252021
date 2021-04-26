const btnSubmit = document.getElementById("submit")

btnSubmit.addEventListener("click", (event) => {
    event.preventDefault();

    let customerInfo = {
        name: document.getElementById("reserve-name").value.trim(),
        email: document.getElementById("reserve-email").value.trim(),
        id: document.getElementById("reserve-unique-id").value.trim(),
        phone: document.getElementById("reserve-phone").value.trim()
    }

    console.log(`Creating reservation for ${customerInfo.name}`)

    fetch(`/api/tables`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(customerInfo)
    })
        .then(response => response.json())
        .then(data => {
            const message = data ? `Your reservation for ${customerInfo.name} is confirmated!!`
                : `${customerInfo.name} is on the waiting list!!`

            alert(message)

            location.href = '/tables';
        })
        .catch(err => console.error(err));
})