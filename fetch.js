document.getElementById('Button1').addEventListener('click', loadCustomer);
// document.getElementById('Button1').addEventListener('click', loadCustomers);

//load single customer
function loadCustomer(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);

    xhr.onload = function(){
        if(this.status === 200){
            // console.log(this.responseText);

            //parse to convert to object
            const customer = JSON.parse(this.responseText);

            const output = `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>
                    <li>Phone: ${customer.phone}</li>
                </ul>

            `;

            document.getElementById('Customer').innerHTML = output; 

        }
    }
    xhr.send();
}