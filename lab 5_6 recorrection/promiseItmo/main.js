
window.onload = function(){        
const preloader = document.querySelector(".preloader");
    preloader.className += " hidden";       
  fetch(`https://jsonplaceholder.typicode.com/comments?_start=0&_limit=${Math.floor(Math.random() * 40)}`)
       .then((res)=>res.json())
       .then((data)=>{
       let output = '<template></template>';
       data.forEach(function(todo){
        output += `
<div class="card" style="width: 14rem;">
  <img class="card-img-top" src="https://marmotamaps.com/de/fx/wallpaper/download/faszinationen/Marmotamaps_Wallpaper_Berchtesgaden_Desktop_1920x1080.jpg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">${todo.email}</p
    <p class="card-text">${todo.body}</p>
  </div>
</div>
      `;
      console.log(data)
    });
    document.getElementById('posts').innerHTML=output;
});   
}
