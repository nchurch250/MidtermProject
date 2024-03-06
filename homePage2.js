fetch("./data.json")
    .then(response => response.json())
    .then(webPictures => loadPictures(webPictures));


function loadPictures(webPictures) {

    var mainContainer = document.getElementById("posts2");

    for (let i=4; i<5; i++) {
        let description = webPictures.page1[i].description;
        let url = webPictures.page1[i].url;

        let division = document.createElement("div");

        division.classList.add("post");

        division.innerHTML = `
        <a href=${url}><img src=${url} /></a>
        <p class="postText">${description}
        `;

        mainContainer.appendChild(division);
    }
}