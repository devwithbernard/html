import './style.css'
import {getPhotos} from "./pexels.js";

document.addEventListener("DOMContentLoaded", DomController);

async function DomController(e) {
    const PHOTOS = {};
    let choice = "Nature";

    const allRadioBtns = $(".radio-choice");
    const inputSearch = document.querySelector(".form-control");
    let {photos} = await getPhotos(choice, 80);
    PHOTOS.photos = photos;

    for (let radio of allRadioBtns) {
        radio.addEventListener("change", async (e) => {
            document.querySelector("#search-result").innerHTML = ""
            choice = e.target.value;
            let {photos} = await getPhotos(choice, 80);
            PHOTOS.photos = photos;
            addToGallery(PHOTOS?.photos);
        })
    }
    if (PHOTOS.photos !== null) {
        addToGallery(PHOTOS?.photos);
    }

    inputSearch.addEventListener("input", (e) => {
        let foundItems = PHOTOS.photos.filter(p => {
            return p.alt.toLowerCase().includes(e.target.value.toLowerCase());
        });

        addToGallery(foundItems);

        if(e.target.value === ""){
            foundItems = null;
            document.querySelector("#found-items-number").innerHTML = ""
        }

        // document.querySelector("#search-result").innerHTML = ""
        if (foundItems?.length > 0) {
            foundItems?.forEach(item => {
                document.querySelector("#search-result").innerHTML += `
                    <p class="search-item">${item.alt}</p>  
                `
                document.querySelector("#found-items-number").innerHTML = `<span style="color: red; display: inline-block; margin: 5px 0;">${foundItems?.length} photos found</span>` ;
            });
        } else {
            document.querySelector("#search-result").innerHTML = "";
        }
    })
}

function $(element){
    return document.querySelectorAll(element);
}
function photo(photoItem){
    return `
        <div>
            <img style="width: 100%; height: 100%; object-fit: cover" src="${photoItem.src.large}" alt="${photoItem.alt}" >
        </div>
    `
}
function addToGallery(photos){
    const galleryDiv = document.querySelector("#gallery");
    galleryDiv.innerHTML = "";
    if(photos.length === 0){
        galleryDiv.innerHTML = `<p>No photos found...</p>`;
        return;
    }
    photos.forEach(p => {
        galleryDiv.innerHTML += photo(p);
    })
}