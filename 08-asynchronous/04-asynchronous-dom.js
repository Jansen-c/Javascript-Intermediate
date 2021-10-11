const elFormUsername = document.querySelector("#form-username");
const elCard = document.querySelector(".card");
const elCardImg = document.querySelector(".card-img-top");
const elCardBtn = document.querySelector("#card-btn");
const elCardTitle = document.querySelector("#card-title");

const getGitHubUser = async (username) => {
    try {
        const users = await fetch(`https://api.github.com/users/${username}`)
        const json = await users.json()
        return json } 
    catch (e) {
        console.log(e)}
}

elFormUsername.onsubmit = async (e) => {
    e.preventDefault();

    let input = elFormUsername[0].value //ambil class input yajadi index ke 0

    let data = await getGitHubUser(input) // gakan jalan, keatas dulu soalny

    if (data.login) {
        elCard.classList.remove("d-none")
        elCardBtn.classList.remove("d-none")
        elCardImg.classList.remove("d-none")
    
        elCardTitle.innerText = data.login

        elCardImg.src = data.avatar_url
        elCardBtn.href = data.html_url
        elFormUsername.firstElementChild.value = ""

        return elCard
    }

    else {
        elCardBtn.classList.add("d-none")
        elCardImg.classList.add("d-none")
        elCardTitle.innerText = "Not Found"

        return elCard
    }}