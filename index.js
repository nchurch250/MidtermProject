fetch("./data.json")
    .then(response => response.json())
    .then(webPictures => loadPictures(webPictures));


function loadPictures(webPictures) {

    var mainContainer = document.getElementById("posts");

    for (let i=0; i<webPictures.page1.length; i++) {
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