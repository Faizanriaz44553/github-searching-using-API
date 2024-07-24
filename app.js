let main = document.querySelector("#main")
let loder = document.querySelector("#loder")
 
const userSearch = ()=>{
    loder.classList.add = "loader"
    let user = document.querySelector("#user").value
    fetch(`https://api.github.com/users/${user}
`)
    .then((req)=>{
        return req.json()
    })
    .then((data)=>{
        loder.classList.remove = "loader"
        main.innerHTML = `<div class="box">
            <div class="box2">
                <div class="main-image-div">
                     <div class="image-div">
                        <img class="img" src="${data.avatar_url}" alt="">
                     </div>
                </div>
                <div class="contant-div">
                      <p class="name">${data.name}</p>
                      <p class="user-name">${data.login}</p>
                      <p class="descriotion">${data.bio}</p>
                </div>
                <div class="button-div">
                     <p><span><i class="fa-solid fa-user-group"></i> ${data.
                        followers
                        } followers . ${data.following} following</p>
                     <p><span><i class="fa-solid fa-location-dot"></i></span> ${data.location}</p>
                     <div class="b-div">
                        <a href="${data.html_url}" target="_blank"><button>Follow</button></a>
                     </div>
                </div>
            </div>
        </div>`
console.log(data);
    })
}
