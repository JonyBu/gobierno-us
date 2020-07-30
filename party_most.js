//tabla most party

var pctOrdenMost = new Vue({
    el: '#tbody-most',
    data: {
        house: [],
        senate: [],
        largoHouse: '',
        largoSenate: ''
    },
    methods: {
        mostHouse: function (arr) {
            return arr.slice().sort(function () {
                return arr.splice(pctOrdenMost.largoHouse);
            });

        },
        mostSenate: function (arr) {
            return arr.slice().sort(function () {
                return arr.splice(pctOrdenMost.largoSenate);
            });
        }
    }
});

//fetch house
fetch('https://api.propublica.org/congress/v1/113/house/members.json', {
    headers: { 'X-API-Key': 'QRiXeBvuaIyd30o9LAOt4lb7Ud6fopeasCg1DtBa' }
})
    .then(response => response.json())
    .then(data => {
        function ordenar2(x, y) {
            return x.votes_with_party_pct - y.votes_with_party_pct;
        }
        data.results[0].members.sort(ordenar2);
        data.results[0].members.reverse(ordenar2);
        pctOrdenMost.house = data.results[0].members;
        pctOrdenMost.largoHouse = data.results[0].members.length * 0.10;
    });

//fetch senate
fetch('https://api.propublica.org/congress/v1/113/senate/members.json', {
    headers: { 'X-API-Key': 'QRiXeBvuaIyd30o9LAOt4lb7Ud6fopeasCg1DtBa' }
})
    .then(response => response.json())
    .then(data => {
        function ordenar(x, y) {
            return x.votes_with_party_pct - y.votes_with_party_pct;
        }
        data.results[0].members.sort(ordenar);
        data.results[0].members.reverse(ordenar);
        pctOrdenMost.senate = data.results[0].members;
        pctOrdenMost.largoSenate = data.results[0].members.length * 0.10;
    })