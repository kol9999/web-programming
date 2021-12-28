
window.addEventListener('load', () => {
    let itemId = 1;
    const preloader = document.getElementById("preloader");
    const cards = document.getElementById("cards");
    const toggle = document.getElementById("card-plus");
    const f_card = document.getElementById("f-card");
    toggle.addEventListener('click', async function (e) {
        toggle.disabled = true;
        const card = f_card.content.cloneNode(true);
        const name_card = card.querySelector("h3");
        const card_dimension = card.getElementById("card-body");
        preloader.classList.remove('disabled');
        try {
            let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${itemId}`);
            let jsonData = await res.json();
                if (res && Object.keys(jsonData).length) {
                    name_card.innerHTML = jsonData.title;
                    card_dimension.setAttribute('id', itemId);
                    card_dimension.innerHTML = jsonData.body;
                    itemId += 1;
                    preloader.classList.add('disabled');
                    cards.insertBefore(card, preloader);
                    toggle.disabled = false;
                } 
        } catch (error) {
            alert("Error: " + error);
            preloader.classList.add('disabled');     
            toggle.disabled = false;
        }
    });
})




// $( document ).ready(function() {
//     let id = 1;
//     const preloader = $("#preloader");
//     const cards = $("#cards");
//     const toggle = $("#card-plus");
//     toggle.click(async function (e) {
//         toggle.disabled = true;
//         const f_card = $("#f-card");
//         const card = f_card.clone(true);
//         const name_card = $("h3");
//         const card_dimension = $("#card-body");
//         preloader.removeClass('disabled');
//         try {
//             let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//             if (res) {
//                 let json = await res.json();
//                 if (Object.keys(json).length) {
//                     name_card.innerHTML = json.title;
//                     card_dimension.attr('id', id);
//                     card_dimension.innerHTML = json.body;
//                     id = id + 1;
//                 } else {
//                     alert("Sorry There is an Error!");
//                 }
//                 preloader.addClass('disabled');
//                 cards.insertBefore(card, preloader);
//             } else {
//                 alert("Sorry There is an Error !");
//             }
//             toggle.disabled = false;
//         } catch (error) {
//             alert(error);
//             preloader.addClass('disabled');     
//             toggle.disabled = false;
//         }
//     });
// })
