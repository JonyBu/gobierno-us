//tabla least party

var pctOrdenLeast = new Vue({
    el: '#tbody-least',
    data: {
        house: [],
        senate: [],
        largoHouse: '',
        largoSenate: ''
    },
    methods: {

        leastHouse: function (arr) {
            return arr.slice().sort(function () {
                return arr.splice(pctOrdenLeast.largoHouse);
            });
        },
        leastSenate: function (array) {
            return array.slice().sort(function () {
                return array.splice(pctOrdenLeast.largoSenate);
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
        pctOrdenLeast.house = data.results[0].members;
        pctOrdenLeast.largoHouse = data.results[0].members.length * 0.10;
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
        pctOrdenLeast.senate = data.results[0].members;
        pctOrdenLeast.largoSenate = data.results[0].members.length * 0.10;
    });
