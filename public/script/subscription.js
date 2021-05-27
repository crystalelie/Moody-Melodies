document.addEventListener('DOMContentLoaded', getSubscription);

function getSubscription(){
    
    document.getElementById("subscribeSubmit").addEventListener('click', function(event){
    document.getElementById('subscription').style.display = 'none';
    div = document.getElementById("hidden");
    div.style.display = 'block';

        firstName = document.getElementById("name1").value;
        lastName = document.getElementById("name2").value;
        email = document.getElementById("email").value;
        phone = document.getElementById("phone").value;


    // Request for the users name from the POST form
    var req = new XMLHttpRequest();
    var payload = {"name": null, "email": null, "phone": null};
    payload.name = document.getElementById("name1").value + ' ' + document.getElementById("name2").value;
    payload.email = document.getElementById("email").value;
    payload.phone = document.getElementById("phone").value;
    
    req.open("POST", "http://httpbin.org/post", true);
    req.setRequestHeader('Content-Type', 'application/json');
    
    req.addEventListener('load', function() {
        var response = JSON.parse(JSON.parse(req.responseText).data);
        console.log(response)
        document.getElementById("data").textContent = response.name;
        document.getElementById("data1").textContent = response.email;
        document.getElementById("data2").textContent = response.phone;

    })

    req.send(JSON.stringify(payload))
    event.preventDefault();
    })
}
