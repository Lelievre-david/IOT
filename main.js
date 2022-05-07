let url = "https://api.sigfox.com/v2/devices/C3068E/messages?limit=1";
let username = '62767f7bdb89951ba6c40c35';
let password = 'eef003cf7d11d28839ecb8c22e860530';
let headers = new Headers();
headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));
let request = new Request(url, {
    method: 'GET',
    headers: headers
});
fetch(request)
    .then(response => response.json())
    .then(data => {
        var donnee = data.data[0].data;
        console.log(donnee);
        var div = document.querySelector('#nombre_passages');
        div.innerHTML = donnee;

    });