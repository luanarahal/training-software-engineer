const main = async () => {
    const data = await fetch('https://randomuser.me/api/');
    const response = await data.json();
    console.log(response);
}

main();
