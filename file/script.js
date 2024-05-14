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