console.log("working");

const API = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-10&api_key=ticABPFxovr6S00wWgZ4d5bIGibe5WHeAZOsr9aC';

$.getJSON(API, function(result){
    console.log("Nasa Near Earth Objects");
    console.log(result.near_earth_objects["2015-09-07"]);
});