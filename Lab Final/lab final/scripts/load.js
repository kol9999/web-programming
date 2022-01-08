(function() { let before_loadtime = new Date().getTime();
window.onload = Pageloadtime;
function Pageloadtime() {
    let aftr_loadtime = new Date().getTime();
// Time calculating in seconds
    pgloadtime = (aftr_loadtime - before_loadtime) / 1000 //I do this to get the time loading in milliseconds
    document.getElementById("loadtime").innerHTML = "Pgae load time is <b>" + pgloadtime + "</b>Seconds";
    let links = document.getElementsByClassName("link_element");
    for (let i = 0; i < links.length; i++)
    {
        if (links[i].href === window.location.href)
        {
            links[i].classList.add("link_element_active");
        }
    }
}
})(); //IIFE