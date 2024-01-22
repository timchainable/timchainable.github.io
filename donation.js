function setQuantity(button) {
    // clear the "selected" class from all buttons
    const buttons = document.getElementsByClassName('tb_donation-options-button');
    // remove the "selected" class from all buttons
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('tb_donation-options-button_selected');
    }
    // remove the dollar sign, if it exists
    const dollarSign = document.getElementById('tb_dollarSign_' + button.dataset.productId + '_' + button.dataset.variantId);
    if (dollarSign) {
        dollarSign.remove();
    }
    // add the "selected" class to the button
    button.classList.add('tb_donation-options-button_selected');
    // get the quantity selector
    const quantitySelector = document.getElementById('tb_quantity_' + button.dataset.productId + '_' + button.dataset.variantId);
    // get the quantity from the button
    const quantity = parseInt(button.dataset.quantity, 10);
    // if this is not the custom button, hide the quantity selector
    if (quantity != 0) {
        quantitySelector.classList.add('tb_hidden');
    }
    // set the quantity field to the quantity from the button
    quantitySelector.value = quantity;
    // if the quantity is zero, show the quantity field
    if (quantity == 0) {
        quantitySelector.classList.remove('tb_hidden');
        // create the span to hold the $ before teh quantity field
        const dollarSign = document.createElement('span');
        dollarSign.id = 'tb_dollarSign_' + button.dataset.productId + '_' + button.dataset.variantId;
        dollarSign.innerHTML = '$';
        //dollarSign.classList.add('tb_quantity-label');
        // insert the dollar sign before the quantity field
        quantitySelector.insertAdjacentElement('beforebegin', dollarSign);
    }
};
