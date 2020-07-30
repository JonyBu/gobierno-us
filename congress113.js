//tabla congress 113

var app = new Vue({
    el: '#table-congress-113',
    data: {
        senators: [],
        house: []
    }
});
//tabla congres 113 senate
fetch('https://api.propublica.org/congress/v1/113/senate/members.json', {
    headers: { 'X-API-Key': 'QRiXeBvuaIyd30o9LAOt4lb7Ud6fopeasCg1DtBa' }
})
    .then(response => response.json())
    .then(data => {
        for (let item = 0; item < data.results[0].members.length; item++) {
            app.senators = data.results[0].members;
        }
    });

//tabla congress 113 house
fetch('https://api.propublica.org/congress/v1/113/house/members.json', {
    headers: { 'X-API-Key': 'QRiXeBvuaIyd30o9LAOt4lb7Ud6fopeasCg1DtBa' }
})
    .then(response => response.json())
    .then(data => {
        for (let item = 0; item < data.results[0].members.length; item++) {
            app.house = data.results[0].members;
        }
    });