
const marvel = {
    render: () => {
        const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=cb5213e18d90e0401505c296809e19d2&hash=16ee065805f4ab73dc5f71edda301c0a';
        const container = document.querySelector('#marvel-row');
        let contentHTML = '';

        fetch(urlAPI)
            .then(res => res.json())
            .then((json) => {
                for (const hero of json.data.results) {
                    let urlHero = hero.urls[0].url;
                    contentHTML += `
                            <div class="col-md-4">
                            <a href="${urlHero}" target="_blank">
                                <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                            </a>
                            <h3 class="title">${hero.name}</h3>
                            </div> `;
                }
                container.innerHTML = contentHTML;
            })
    }
};
marvel.render();

const marvel1 = {
    render: () => {
        const urlAPI = 'https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=cb5213e18d90e0401505c296809e19d2&hash=16ee065805f4ab73dc5f71edda301c0a';
        const container1 = document.querySelector('#marvel-row1');
        let contentHTML1 = '';

        fetch(urlAPI)
            .then(res => res.json())
            .then((json) => {
                for (const hero1 of json.data.results) {
                    let urlHero1 = hero1.urls[0].url;
                    contentHTML1 += `
                        <div class="col-md-4">
                        <a href="${urlHero1}" target="_blank">
                            <img src="${hero1.thumbnail.path}.${hero1.thumbnail.extension}" alt="${hero1.name}" class="img-thumbnail">
                        </a>
                        <h3 class="title">${hero1.title}</h3>
                        </div> `;
                }
                container1.innerHTML = contentHTML1;
            })
    }
};
marvel1.render();

const marvel2 = {
    render: () => {
        
        const urlAPI = 'https://gateway.marvel.com:443/v1/public/events?ts=1&apikey=cb5213e18d90e0401505c296809e19d2&hash=16ee065805f4ab73dc5f71edda301c0a';
        const container2 = document.querySelector('#marvel-row2');
        let contentHTML2 = '';

        fetch(urlAPI)
            .then(res => res.json())
            .then((json) => {
                for (const hero2 of json.data.results) {
                    let urlHero2 = hero2.urls[0].url;
                    contentHTML2 += `
                        <div class="col-md-4">
                        <a href="${urlHero2}" target="_blank">
                            <img src="${hero2.thumbnail.path}.${hero2.thumbnail.extension}" alt="${hero2.name}" class="img-thumbnail">
                        </a>
                        <h3 class="title">${hero2.title}</h3>
                        </div> `;
                }
                container2.innerHTML = contentHTML2;
            })
    }
};
marvel2.render();

const marvel3 = {
    render: () => {
        
        const urlAPI = 'https://gateway.marvel.com:443/v1/public/stories?ts=1&apikey=cb5213e18d90e0401505c296809e19d2&hash=16ee065805f4ab73dc5f71edda301c0a';
        const container3 = document.querySelector('#marvel-row3');
        let contentHTML3 = '';

        fetch(urlAPI)
            .then(res => res.json())
            .then((json) => {
                for (const hero3 of json.data.results) {
                    let urlHero3 = hero3.urls[0].url;
                    contentHTML3 += `
                        <div class="col-md-4">
                        <a href="${urlHero3}" target="_blank">
                            <img src="${hero3.thumbnail.path}.${hero3.thumbnail.extension}" alt="${hero3.name}" class="img-thumbnail">
                        </a>
                        <h3 class="title">${hero3.title}</h3>
                        </div> `;
                }
                container3.innerHTML = contentHTML3;
            })
    }
};
marvel3.render();

function crearCuenta() {
    window.location="crear-datos.html";
}

function crearDatos(){
    window.location="login.html";
}

function iniciarSesion(){
    window.location="index.html";
}