const BASE_URL ="https://api.github.com/users";

export async function getUser(username){
    const res = await fetch(`${BASE_URL}/${username}`);
    return res.json();
}

export async function getRepos(username){
    const  res = await fetch(`${BASE_URL}/${username}/repos`);
    return res.json();
}

export async function getFollowers(username){
    const  res = await fetch(`${BASE_URL}/${username}/followers`);
    return res.json();
}
export async function getGists(username){
    const  res = await fetch(`${BASE_URL}/${username}/gists`);
    return res.json();
}