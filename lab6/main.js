
window.onload = function(){        
const preloader = document.querySelector(".preloader");
    preloader.className += " hidden";       
  fetch('https://jsonplaceholder.typicode.com/comments?_start=0&_limit=10')
       .then((res)=>res.json())
       .then((data)=>{
       let output = '<div></div>';
       data.forEach(function(todo){
        output += `
<div class="card mx-2 my-2" style="width: 14rem;">
  <img class="card-img-top" src="https://marmotamaps.com/de/fx/wallpaper/download/faszinationen/Marmotamaps_Wallpaper_Berchtesgaden_Desktop_1920x1080.jpg" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${todo.name}</h5>
    <p class="card-text">${todo.email}</p
    <p class="card-text">${todo.body}</p>
  </div>
</div>
      `;
    });
    document.getElementById('posts').innerHTML=output;

});   
}
