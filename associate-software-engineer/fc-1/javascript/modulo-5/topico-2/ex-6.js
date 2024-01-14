fetch('https://randomuser.me/api/110')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error("Error! -> ", err));   
