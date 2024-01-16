const main = async () => {
    try {
        const data = await fetch('https://randomuser.me/api/110');
        const response = await data.json();
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

main();
