const baseUrl = "https://api.tvmaze.com/";
const container = document.querySelector(".gridContainer");
const conWrap = document.querySelector(".gridconWrap");

const input = document.querySelector(".wrapperSearch input");
const searchbtn = document.querySelector(".wrapperSearch button");


function getSpecificShow(id){
    return fetch(baseUrl+`shows/${id}`)
    .then(res=>res.json())
    .then(data=>data)
}

function getShows(){
    return fetch(baseUrl+"shows")
    .then(res=>res.json())
    .then(data=>data)
}


function singleSearch(query){
    return fetch(baseUrl+`singlesearch/shows?q=${query}`)
    .then(res=>res.json())
    .then(data=>console.log(data))
}


function showSearch(query){
    return fetch(baseUrl+`search/shows?q=${query}`)
    .then(res=>res.json())
    .then(data=>data)
}

function randomShows(){
}








// getShows()
// .then(data=>getFiveShows(data))


function getFiveShows(shows) {
    let counter = 0;
    shows.forEach(function(post){
        if(counter>=5){
            return
        }
        container.innerHTML+=`
        <a href="Specific.html?id=${post.id}"><div class="card">
                    <img src="${post.image.medium}" alt="">
                    <div class="titlendStar"><p>${post.name}</p><p>${post.rating.average}<i class="fa-solid fa-star"></i></p></div>
                </div></a>
        `
        counter++;
    })
}

function getQueryParameter(){
    let queryParamter = window.location.search;
    let query = queryParamter.split("=")[1];
    return query;
}

// let id = getQueryParameter();
// getSpecificShow(id)
// .then(data=>showSpecificShow(data))


// function showSpecificShow(show) {
//     const cleanSummary = show.summary.replace(/<\/?[^>]+(>|$)/g, "").trim();

//     let genres = '';
//     show.genres.forEach((genre, index) => {
//         genres += genre + (index < show.genres.length - 1 ? ', ' : '');
//     });

//     conWrap.innerHTML += `
//         <div>
//             <img src="${show.image.original}" alt="">
//         </div>
//         <div>
//             <p>${cleanSummary}</p>
//             <button class="styleBN">
//                 <a href="${show.officialsite}" target="_blank">Se deres officielle site</a>
//             </button>
//         </div>
//         <div>
//             <h3>${show.name}</h3>
//             <p>Premiered: ${show.premiered}</p>
//             <p>Ended: ${show.ended}</p>
//             <p>Genre: ${genres}</p>
//             <p>Rating: 7.5<i class="fa-solid fa-star"></i></p>
//             <p>Language: ${show.language}</p>
//             <p>Country: ${show.network.country.name}</p>
//             <a href="https://www.cwtv.com/">Official website</a>
//         </div>
//     `;
// }

// let counter = 0;
// searchbtn.addEventListener("click",function(e){
//     container.innerHTML= "";
//     let query = input.value;
//     if(query ===""){
//         alert("DU HAR IKKE INDTASTET NOGET");
//         counter++;
//     }
//     if(counter==3){
//         window.location.href="https://www.youtube.com/watch?v=pbA0VWHhJUc&ab_channel=SidewalksandSkeletons";
//     }

//     showSearch(query)
//     .then(data=>showSeachs(data))
// })

// function showSeachs(shows) {
//     shows.forEach(function(post) {
//         // Tjekker om billedet er null og bruger et standardbillede, hvis det er
//         const imageUrl = (post.show.image && post.show.image.medium) 
//             ? post.show.image.medium 
//             : './assets/billeder/1e02f22aad1745de5019d8e7dcd23320.png';

//         // Tjekker om rating er null og sætter til "n/a", hvis det er
//         const rating = (post.show.rating && post.show.rating.average) 
//             ? post.show.rating.average 
//             : 'n/a';

//         // Tilføjer kortet til containeren
//         container.innerHTML += `
//             <div class="card">
//                 <img src="${imageUrl}" alt="">
//                 <div class="titlendStar">
//                     <p>${post.show.name}</p>
//                     <p>${rating}<i class="fa-solid fa-star"></i></p>
//                 </div>
//             </div>
//         `;
//     });
// }
















