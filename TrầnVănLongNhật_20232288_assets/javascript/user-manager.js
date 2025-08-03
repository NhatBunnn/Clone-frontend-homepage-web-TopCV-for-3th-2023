function userManager(){
    var showUser = document.querySelector('.user-manager-tbody');
    showUser.innerHTML = ''; 

    for (var i = 0; i < accounts.length; i++) {
        showUser.innerHTML = showUser.innerHTML + '<tr>' + '<td>' + i + '</td>' + '<td>' + accounts[i].userName + '</td>'+ '<td>' +  accounts[i].email + '</td>'+ '<td>' + accounts[i].passWord + '</td>' + '</tr>';
    }

    closeModal()
}