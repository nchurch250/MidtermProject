fetch("./data.json")
    .then(response => response.json())
    .then(webPictures => loadPictures(webPictures));


function loadPictures(webPictures) {

    var mainContainer = document.getElementById("posts");

    for (let i=0; i<webPictures.pictures.length; i++) {
        let description = webPictures.pictures[i].description;
        let url = webPictures.pictures[i].url;

        let division = document.getElementById("posts");

        division.innerHTML = `
        <a href=${url}><img src=${url} /></a>
        <p class="postText">${description}
        `;

        // mainContainer.appendChild(division);
    }
}