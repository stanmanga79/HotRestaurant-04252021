const clearBtn = document.getElementById("clear");

const translateCustomersToHTML = (customers) => {
    let customerHTML = ''
    console.log(`Starting to render customers from data..`)
    //load customer data from API 
    customers.forEach((customer, i) => {
        console.log(customer)
        customerHTML +=
            `
        <li class="list-group-item mt-4">
            <h2>Position #${i + 1}</h2>
            <hr>
            <h2>ID: ${customer.id}</h2>
            <h2>Name: ${customer.name}</h2>
            <h2>Email: ${customer.email}</h2>
            <h2>Phone: ${customer.phone}</h2>
        </li>        
        `
    });

    return customerHTML;

}

const loadCustomers = (apiURL, tableId) => {
    //DOM Broswer code...
    const customerTableList = document.getElementById(tableId);

    fetch(apiURL)
        .then(response => response.json())
        .then(customerData => customerTableList.innerHTML = translateCustomersToHTML(customerData))
        .catch(error => console.error('Error', error))
}

const clearCustomers = () => {
    alert(`WARNING: You are about to DELETE all customers (tables / waitlist)`);

    fetch(`http://localhost:8080/api/clear`, { method: 'POST' })
        .then(response => response.json())
        .then(() => {
            const customerTableList = document.getElementById("tableList");
            const waitList = document.getElementById("waitList");

            //Since user the screen, the list will empty to give user feedback / output
            customerTableList.innerHTML = '';
            waitList.innerHTML = '';
        })
        .catch(error => alert(`Unable to clear list at this time!!`))
}

loadCustomers("/api/tables", "tableList")
loadCustomers("/api/waitlist", "waitList")



clearBtn.addEventListener('click', clearCustomers)


