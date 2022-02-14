let toDay = new Date();
toDay = toDay.toLocaleString()
document.getElementById('date').innerText = toDay;
let count = 1;
document.getElementById('addProduct').addEventListener('click', function() {
    let name = document.getElementById('name');

    let address = document.getElementById('address');
    let invNum = document.getElementById('inv-num');
    if (address.innerText == "" && invNum.innerText == "") {
        address.innerText = name.value;
        invNum.innerText = Math.round(Math.random() * 10000) + 1;
    }

    let table = document.getElementById('table');
    let product = document.getElementById('p-name');
    let quantity = document.getElementById('quantity');
    let price = document.getElementById('price');

    if (product.value != "" && quantity.value > 0 && price.value > 0) {

        let amount = parseInt(quantity.value) * parseInt(price.value);
        table.innerHTML += `  
    <tr>
        <td>${count++}</td>
        <td>${product.value}</td>
        <td>${parseInt(quantity.value)}</td>
        <td><span>$</span>${parseInt(price.value)}</td>
        <td >$<span class="item-value">${amount}</span></td>
        </tr>
        `;

        document.getElementById('sub-total').innerText = (total());
        let tax = document.getElementById('tax').innerText = ((total() * .2).toFixed(2));
        document.getElementById('grant-total').innerText = (parseFloat(total()) + parseFloat(tax));
    }
    product.value = "";
    quantity.value = "";
    price.value = "";
    name.value = "";
})

function total() {
    let itemValue = document.querySelectorAll('.item-value');
    let totalAmount = 0;
    for (let i = 0; i < itemValue.length; i++) {
        let productCost = itemValue[i].innerText;
        let cost = parseInt(productCost);
        totalAmount = totalAmount + cost;
    }
    return totalAmount;
}