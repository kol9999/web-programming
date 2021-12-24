
window.addEventListener('load', () => {
    let id = 1;
    const preloader = document.getElementById("preloader");
    const cards = document.getElementById("cards");
    const toogle = document.getElementById("card-plus");
    toogle.addEventListener('click', async function (e) {
        toogle.disabled = true;
        const f_card = document.getElementById("f-card");
        const card = f_card.content.cloneNode(true);
        const name_card = card.querySelector("h3");
        const card_dimension = card.getElementById("card-body");
        preloader.classList.remove('disabled');
        try {
            let res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
            if (res.ok) {
                let json = await res.json();
                console.log(json);
                if (Object.keys(json).length) {
                    name_card.innerHTML = json.title;
                    card_dimension.setAttribute('id', id);
                    card_dimension.innerHTML = json.body;
                    id = id + 1;
                } else {
                    alert("Sorry There is an Error !");
                }
                preloader.classList.add('disabled');
                cards.insertBefore(card, preloader);
            } else {
                alert("Sorry There is an Error !");
            }
            toogle.disabled = false;
        } catch (error) {
            alert("Sorry There is an Error !");
            preloader.classList.add('disabled');     
            toogle.disabled = false;
        }
    });
})
