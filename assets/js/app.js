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

function showSpecificShow(show) {
    const title = document.querySelector("title");
    title.textContent = show.name;

    const cleanSummary = show.summary 
        ? show.summary.replace(/<\/?[^>]+(>|$)/g, "").trim() 
        : "No summary available";

    let genres = show.genres && show.genres.length > 0
        ? show.genres.join(', ')
        : 'N/A';

    const imageUrl = (show.image && show.image.original) 
        ? show.image.original 
        : './assets/billeder/NoIMG.png';

    const country = show.network && show.network.country 
        ? show.network.country.name 
        : 'N/A';

    const premiered = show.premiered || 'N/A';
    const ended = show.ended || 'N/A';
    const language = show.language || 'N/A';
    const rating = (show.rating && show.rating.average) || 'N/A';

    conWrap.innerHTML += `
        <div>
            <img src="${imageUrl}" alt="">
        </div>
        <div>
            <p>${cleanSummary}</p>
            <a href="${show.officialSite}"><button class="styleBN">Se deres officielle side</button></a>
        </div>
        <div>
            <h3>${show.name}</h3>
            <p>Premiered: ${premiered}</p>
            <p>Ended: ${ended}</p>
            <p>Genre: ${genres}</p>
            <p>Rating: ${rating}<i class="fa-solid fa-star"></i></p>
            <p>Language: ${language}</p>
            <p>Country: ${country}</p>
        </div>
    `;
}


function showSeachs(shows) {
    shows.forEach(function(post) {
        // Tjekker om billedet er null og bruger et standardbillede hvis det er
        const imageUrl = (post.show.image && post.show.image.medium) 
            ? post.show.image.medium 
            : './assets/billeder/NoIMG.png';

        // Tjekker om rating er null og sætter til "n/a" hvis det er
        const rating = (post.show.rating && post.show.rating.average) 
            ? post.show.rating.average 
            : 'n/a';

        container.innerHTML += `
            <a href="Specific.html?id=${post.show.id}">
                <div class="card">
                    <img src="${imageUrl}" alt="">
                    <div class="titlendStar">
                        <p>${post.show.name}</p>
                        <p>${rating}<i class="fa-solid fa-star"></i></p>
                    </div>
                </div>
            </a>
        `;
    });
}
















