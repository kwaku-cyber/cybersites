const numItemsToGenerate = 1; //how many gallery items you want on the screen
const imageWidth = 480; //your desired image width in pixels
const imageHeight = 480; //desired image height in pixels
const collectionID = 52025927; //the collection ID from the original url
function renderGalleryItem(){
  fetch(`https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/`).then((response)=> {    
    let galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');
    galleryItem.innerHTML = `
      <img class="gallery-image" src="${response.url}" alt="gallery image"/>
    `
    document.body.appendChild(galleryItem);
  }) 
}
for(let i=0;i<numItemsToGenerate;i++){
  renderGalleryItem();
}