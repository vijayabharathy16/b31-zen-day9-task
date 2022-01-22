function xmlreq(){
    // console.log("greetings");
    var xhr=new XMLHttpRequest()
    xhr.open("GET","https://restcountries.com/v3.1/all")
    xhr.send()
    xhr.responseType="json"
    xhr.onload=()=>{
        var countries=xhr.response

    //------------------(a) Get all the countries from Asia continent /region using Filter function--------------------//
    var getasia=(value)=>value.continents[0]=="Asia"
    var foo=countries.filter(getasia)
    var getcontinent=(value)=>value.name.common
    var res=foo.map(getcontinent)
    console.log(res);

    }
    }
    xmlreq() 


    function xmlreq(){
        // console.log("greetings");
        var xhr=new XMLHttpRequest()
        xhr.open("GET","https://restcountries.com/v3.1/all")
        xhr.send()
        xhr.responseType="json"
        xhr.onload=()=>{
            var countries=xhr.response
    
    //-----------------(b) Get all the countries with a population of less than 2 lakhs using Filter function---------//
    
    var getpopulation=(value)=>value.population<200000
     var res=countries.filter(getpopulation)
     var getname=(value)=>value.name.common
     var res1=res.map(getname)
     console.log(res1);
    
    //-------------(d)Print the total population of countries using reduce function------------------------------------//
     var getpopulation=(value)=>value.population
     var res=countries.map(getpopulation)
     console.log(res);
     var totalpopulation=(value,value1)=>value+value1
     var res1=res.reduce(totalpopulation)
     console.log(res1);
    
     //--------------(e) Print the country which uses US Dollars as currency----------------------------------------//
    
      var getcurrencies=(value)=>value.currencies && value.currencies.USD
      var res=countries.filter(getcurrencies)
      var getname=(value)=>value.name.common
      var foo=res.map(getname)
      console.log(foo);
    
    
    
        }
    }
    xmlreq() 
    //---------------------------------------------------------------------------------------------------------------------//