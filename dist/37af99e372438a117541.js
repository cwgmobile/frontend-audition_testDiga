import axios from"axios";import"/src/assets/page.css";import"/src/assets/photo-card.css";import photoCard from"./components/photoCard";import photoList from"./components/photoList";var photos=[],renderPhoto=[],filterPhoto=[],totalPhotos=null,lastElement=20,listViewOn=!1;const container=document.getElementById("container");function getPhotos(){axios.get("https://jsonplaceholder.typicode.com/photos").then((function(t){photos=t.data,renderPhoto=photos,totalPhotos=photos.length,renderPhotos(renderPhoto)})).catch((t=>{alert(t)}))}function renderPhotos(t){container.innerHTML="",t.slice(0,lastElement).forEach((t=>{listViewOn?container.appendChild(photoList(t)):container.appendChild(photoCard(t))})),paginator()}function paginator(){document.getElementById("element-num").innerHTML=totalPhotos>=lastElement?` Mostrando ${lastElement} de ${totalPhotos}`:` Mostrando ${totalPhotos} de ${totalPhotos}`}function showMore(){lastElement<totalPhotos&&(lastElement+=20,renderPhotos(renderPhoto=photos.slice(0,lastElement)))}function listView(){listViewOn=!0,renderPhotos(renderPhoto)}function gridView(){listViewOn=!1,renderPhotos(renderPhoto)}getPhotos(),document.getElementById("load-more").addEventListener("click",showMore),document.getElementById("search").addEventListener("input",(({target:t})=>{const o=t.value;filterPhoto=photos.filter((({title:t})=>t.indexOf(o)>=0)),renderPhotos(renderPhoto=filterPhoto.slice(0,20)),totalPhotos=filterPhoto.length})),document.getElementById("list").addEventListener("click",listView),document.getElementById("grid").addEventListener("click",gridView);