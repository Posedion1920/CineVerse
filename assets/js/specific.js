
let id = getQueryParameter();
getSpecificShow(id)
.then(data=>showSpecificShow(data))


function showSpecificShow(show) {
    const cleanSummary = show.summary.replace(/<\/?[^>]+(>|$)/g, "").trim();

    let genres = '';
    show.genres.forEach((genre, index) => {
        genres += genre + (index < show.genres.length - 1 ? ', ' : '');
    });

    const imageUrl = (show.image && show.image.original) 
        ? show.image.original 
        : './assets/billeder/1e02f22aad1745de5019d8e7dcd23320.png';

    conWrap.innerHTML += `
        <div>
            <img src="${imageUrl}" alt="">
        </div>
        <div>
            <p>${cleanSummary}</p>
            <button class="styleBN">Se deres officielle site</button>
        </div>
        <div>
            <h3>${show.name}</h3>
            <p>Premiered: ${show.premiered}</p>
            <p>Ended: ${show.ended}</p>
            <p>Genre: ${genres}</p>
            <p>Rating: 7.5<i class="fa-solid fa-star"></i></p>
            <p>Language: ${show.language}</p>
            <p>Country: ${show.network.country.name}</p>
        </div>
    `;
}