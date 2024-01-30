const GITHUB_REPOS_URL = 'https://api.github.com/users/adrianopratesr/repos';

const getReposNames = async (url) => {
    try {
        const data = await fetch(url);
        const response = await data.json();
        response.forEach(repo => console.log(repo.name));
    } catch (error) {
        console.error(error);
    }
}

getReposNames(GITHUB_REPOS_URL);
