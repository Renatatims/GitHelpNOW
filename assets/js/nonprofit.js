var APIkey = "aff405eca8c6c3b65de5c821a36553f7"


//Food Bank - search Every.org API to auto-populate 5 non-profit organizations - org.html//

function foodBank(){
    var queryUrl = "https://partners.every.org/v0.2/search/foodbank?apiKey=aff405eca8c6c3b65de5c821a36553f7";
    fetch(queryUrl).then(function(facility){
        if(facility.ok){
            facility.json().then(function(result){
                var resultFacility = result;
                var resultFacility = result;
                console.log(resultFacility);

                for (i=0; i<11; i++){
                
                var nameOrgResult = resultFacility.nonprofits[i].name;
                var descriptionOrgResult = resultFacility.nonprofits[i].description;
                var logoOrgResult = resultFacility.nonprofits[i].logoUrl;
                var profileUrl = resultFacility.nonprofits[i].profileUrl
                //var foodBankEl = document.getElementById("foodBank" + i);
 
                $("#nameOrg"+i).text(nameOrgResult);
                $("#descriptionOrg"+i).text(descriptionOrgResult);
                $("#logoOrg"+i).attr("src", logoOrgResult);
                $("#linkOrg"+i).attr("href",profileUrl);
                $("#visitBtn"+i).attr("href",profileUrl);
              
                console.log(resultFacility);
              
            }
            
        })}})};
 
foodBank();

//Shelter - search Every.org API to auto-populate 5 non-profit organizations - shelter.html//

function shelter(){
    var queryUrl = "https://partners.every.org/v0.2/search/house?apiKey=aff405eca8c6c3b65de5c821a36553f7";
    fetch(queryUrl).then(function(facility){
        if(facility.ok){
            facility.json().then(function(result){
                var resultFacility = result;
                var resultFacility = result;
                console.log(resultFacility);

                for (i=0; i<11; i++){
                
                    var nameOrgResult = resultFacility.nonprofits[i].name;
                    var descriptionOrgResult = resultFacility.nonprofits[i].description;
                    var logoOrgResult = resultFacility.nonprofits[i].logoUrl;
                    var profileUrl = resultFacility.nonprofits[i].profileUrl
                //var foodBankEl = document.getElementById("foodBank" + i);
 
                $("#nameShelter"+i).text(nameOrgResult);
                $("#descriptionShelter"+i).text(descriptionOrgResult);
                $("#logoShelter"+i).attr("src", logoOrgResult, "href", profileUrl);
                $("#linkShelter"+i).attr("href",profileUrl);
                $("#visitBtnShelter"+i).attr("href",profileUrl);
   
                //console.log(resultFacility);
              
            }
            
        })}})};
 
shelter();


//Women Shelters - search Every.org API to auto-populate 5 non-profit organizations - womenshelter.html//

function womenShelter(){
    var queryUrl = "https://partners.every.org/v0.2/search/Womenshelter?apiKey=aff405eca8c6c3b65de5c821a36553f7";
    fetch(queryUrl).then(function(facility){
        if(facility.ok){
            facility.json().then(function(result){
                var resultFacility = result;
                var resultFacility = result;
                console.log(resultFacility);

                for (i=0; i<11; i++){

                    var nameOrgResult = resultFacility.nonprofits[i].name;
                    var descriptionOrgResult = resultFacility.nonprofits[i].description;
                    var logoOrgResult = resultFacility.nonprofits[i].logoUrl;
                    var profileUrl = resultFacility.nonprofits[i].profileUrl
                //var foodBankEl = document.getElementById("foodBank" + i);
 
                $("#nameWomen"+i).text(nameOrgResult);
                $("#descriptionWomen"+i).text(descriptionOrgResult);
                $("#logoWomen"+i).attr("src", logoOrgResult);
                $("#linkWomen"+i).attr("href",profileUrl);
                $("#visitBtnWomen"+i).attr("href", profileUrl);
            
              
            }
            
        })}})};
 
womenShelter();

//Mental Health Facilities - search Every.org API to auto-populate 5 non-profit organizations - mentalhealth.html//

function mentalHealth(){
    var queryUrl = "https://partners.every.org/v0.2/search/mental?apiKey=aff405eca8c6c3b65de5c821a36553f7";
    fetch(queryUrl).then(function(facility){
        if(facility.ok){
            facility.json().then(function(result){
                var resultFacility = result;
                var resultFacility = result;
                console.log(resultFacility);

                for (i=0; i<11; i++){

                    var nameOrgResult = resultFacility.nonprofits[i].name;
                    var descriptionOrgResult = resultFacility.nonprofits[i].description;
                    var logoOrgResult = resultFacility.nonprofits[i].logoUrl;
                    var profileUrl = resultFacility.nonprofits[i].profileUrl
                //var foodBankEl = document.getElementById("foodBank" + i);
 
                $("#nameMental"+i).text(nameOrgResult);
                $("#descriptionMental"+i).text(descriptionOrgResult);
                $("#logoMental"+i).attr("src", logoOrgResult);
                $("#linkMental"+i).attr("href",profileUrl);
                $("#visitBtnMental"+i).attr("href", profileUrl);
            
              
            }
            
        })}})};
 
mentalHealth();



