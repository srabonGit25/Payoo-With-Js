// add money to the account
document.getElementById('btn-add-money').addEventListener('click', function(event){
    // prevent page reload after form submit
    event.preventDefault();
    const addMoneyInput = document.getElementById('input-add-money').value;
    const pinNumberInput = document.getElementById('input-pin-number').value;

    // verfiy pin number & this is not right way
    if(pinNumberInput === '1234'){

        const balance = document.getElementById('account-balance').innerText;
        // string to number convert
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        
        // updste the balance in the ui/dom
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Wrong Pin Number, Please Try Again');
    }
})
/*  Cashout Section*/ 
document.getElementById('btn-cashout').addEventListener('click', function(event){
    event.preventDefault();
    const cashoutAddMoney = document.getElementById('cashout-add-money').value;
    const cashoutPinNumber = document.getElementById('cashout-pin-number').value;

    if( cashoutPinNumber === '1234'){
        const balance = document.getElementById('account-balance').innerText;
        const cashoutAddMoneyNumber = parseFloat(cashoutAddMoney);
        const cashoutNewBalance = balance - cashoutAddMoneyNumber;
        document.getElementById('account-balance').innerText = cashoutNewBalance;
        

    }
    else{
        alert('Wrong Pin Numbe,Try Again');
    }
})