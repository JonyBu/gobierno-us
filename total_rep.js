//Muestra y genera la tabla cantidad de representantes 

var cantidadRep = new Vue({
    el: '#cantRepresentants',
    data: {
        cantSenatorRepublican: '',
        cantSenatorDemocrat: '',
        cantSenatorIndependient: '',
        cantSenatorTotal: '',
        pctRepSenator: '',
        pctDemSenator: '',
        pctIndSenator: '',

        cantHouseRepublican: '',
        cantHouseDemocrat: '',
        cantHouseIndependient: '',
        cantHouseTotal: '',
        pctRepHouse: '',
        pctDemHouse: '',
        pctIndHouse: '',
    }
});
//fetch para tabla Cantidad de representantes house
fetch('https://api.propublica.org/congress/v1/113/house/members.json', {
    headers: { 'X-API-Key': 'QRiXeBvuaIyd30o9LAOt4lb7Ud6fopeasCg1DtBa' }
})
    .then(response => response.json())
    .then(data => {
        var cantRepublican = 0;
        var cantDemocrate = 0;
        var cantIndependient = 0;
        var total = 0;

        for (let item = 0; item < data.results[0].members.length; item++) {
            var party = data.results[0].members[item].party;
            total++;
            if (party === "R") {
                cantRepublican++;
            } else if (party === "D") {
                cantDemocrate++;
            }
            else if (party === "I") {
                cantIndependient++;
            }
        }
        cantidadRep.cantHouseRepublican = cantRepublican;
        cantidadRep.cantHouseDemocrat = cantDemocrate;
        cantidadRep.cantHouseIndependient = cantIndependient;
        cantidadRep.cantHouseTotal = total;

        //Saco porcentaje y lo mando al vue
        var pctRep = (cantRepublican / total) * 100;
        var pctDem = (cantDemocrate / total) * 100;
        var pctInd = (cantIndependient / total) * 100;

        cantidadRep.pctRepHouse = pctRep.toFixed(2) + " %";
        cantidadRep.pctDemHouse = pctDem.toFixed(2) + " %";
        cantidadRep.pctIndHouse = pctInd.toFixed(2) + " %";

    });

//fetch para tabla Cantidad de representantes senate

fetch('https://api.propublica.org/congress/v1/113/senate/members.json', {
    headers: { 'X-API-Key': 'QRiXeBvuaIyd30o9LAOt4lb7Ud6fopeasCg1DtBa' }
})
    .then(response => response.json())
    .then(data => {
        var cantRepublican = 0;
        var cantDemocrate = 0;
        var cantIndependient = 0;
        var total = 0;

        for (let item = 0; item < data.results[0].members.length; item++) {
            var party = data.results[0].members[item].party;
            total++;
            if (party === "R") {
                cantRepublican++;
            } else if (party === "D") {
                cantDemocrate++;
            }
            else if (party === "I") {
                cantIndependient++;
            }
        }
        cantidadRep.cantSenatorRepublican = cantRepublican;
        cantidadRep.cantSenatorDemocrat = cantDemocrate;
        cantidadRep.cantSenatorIndependient = cantIndependient;
        cantidadRep.cantSenatorTotal = total;

        //Saco porcentaje y lo mando al vue
        var pctRep = (cantRepublican / total) * 100;
        var pctDem = (cantDemocrate / total) * 100;
        var pctInd = (cantIndependient / total) * 100;

        cantidadRep.pctRepSenator = pctRep.toFixed(2) + " %";
        cantidadRep.pctDemSenator = pctDem.toFixed(2) + " %";
        cantidadRep.pctIndSenator = pctInd.toFixed(2) + " %";

    });