var request = new XMLHttpRequest();
// making a xmlhttprequest

request.open("GET", "https://restcountries.eu/rest/v2/all", true);
// send a request to server

request.send();

request.onload=function(){
    var data= JSON.parse(this.response);
    console.log(data);
    // Filtering region asia 
    var newdata= data.filter((item)=>{
        return (item.region === "Asia");
    });
    // Filtering population leass than 200000
    var newdata1= data.filter((item)=> {
        return (item.population < 200000)
    });
    // Name capital and flag using for each function
    data.forEach(element => {
        console.log(element.name);
        console.log(element.capital);
        console.log(element.flag);
    });
    //Print total population using reduce function
    var newdata2 = data.reduce((totalpop, elem)=>{
        return elem.population+totalpop;
        },0);

    //Print the country which use US Dollars as currency
    var newdata3 = data.filter((eleme)=>{
        return eleme.currencies[1] == "USD";
    });

    //Add error handling in xml http requeT
        
    
    console.log(newdata);
    console.log(newdata1);
    console.log(newdata2);
    console.log(newdata3);
}


