getShows()
.then(data=>getFiveShows(data))

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