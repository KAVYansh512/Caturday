let details= document.querySelector(".details");
let imgContainer= document.querySelector(".img-container");
let nextBtn= document.getElementById("next");

let url= "https://api.thecatapi.com/v1/images/search?limit=20&api_key=live_XwmC1q0QV5nvrQLw2KEPuCSDSMBuIbOE4o7DgNfpbRoLMXCNcgPF2VywcyhAkiWQ";

let getCat= () => {
    fetch(url).then((resp) => resp.json()).then((data) => {
        console.log(data);
        console.log(data[[0]].url);
       console.log(data[[0]].categories[0].name);
        
        imgContainer.innerHTML = `<img src= ${data[[0]].url}>`;
        nextBtn.innerHTML = `<h3>NEXT</h3>`;
        details.innerHTML = `<h2>${data[[0]].categories[0].name}</h2>`;
        let randomColor = "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
        document.documentElement.style.setProperty("--theme-color" , randomColor);
    });
};

window.addEventListener("load",getCat);
nextBtn.addEventListener("click", getCat);