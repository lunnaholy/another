const axios = require("axios").default;

module.exports = {
    getRandom: function (min, max) {
        return Math.random() * (max - min) + min;
    },
    getDog: function () {
        return new Promise((res, rej) => {
            axios.get('https://api.thedogapi.com/v1/images/search')
                .catch(err => {
                    rej(err);
                })
                .then(response => {
                    cat = response.data[0];
                    res(cat.url);
                })
        })
    }
}