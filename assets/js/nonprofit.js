var APIkey = "aff405eca8c6c3b65de5c821a36553f7"
   

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
                var imageOrgResult = resultFacility.nonprofits[i].coverImageUrl;
                var logoOrgResult = resultFacility.nonprofits[i].logoUrl;
                var profileUrl = resultFacility.nonprofits[i].profileUrl
                //var foodBankEl = document.getElementById("foodBank" + i);
 
                $("#nameOrg"+i).text(nameOrgResult);
                $("#descriptionOrg"+i).text(descriptionOrgResult);
                $("#imageOrg"+i).attr("src", imageOrgResult);
                $("#logoOrg"+i).attr("src", logoOrgResult);
                $("#visitBtn"+i).attr("href",profileUrl);
                //console.log(resultFacility);
              
            }
            
        })}})};
 
foodBank();



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
                    var imageOrgResult = resultFacility.nonprofits[i].coverImageUrl;
                    var logoOrgResult = resultFacility.nonprofits[i].logoUrl;
                    var profileUrl = resultFacility.nonprofits[i].profileUrl
                //var foodBankEl = document.getElementById("foodBank" + i);
 
                $("#nameShelter"+i).text(nameOrgResult);
                $("#descriptionShelter"+i).text(descriptionOrgResult);
                $("#imageShelter"+i).attr("src", imageOrgResult);
                $("#logoShelter"+i).attr("src", logoOrgResult);
                $("#visitBtnShelter"+i).attr("href",profileUrl);
                //console.log(resultFacility);
              
            }
            
        })}})};
 
shelter();



function womenShelter(){
    var queryUrl = "https://partners.every.org/v0.2/search/Womenshelter?apiKey=aff405eca8c6c3b65de5c821a36553f7";
    fetch(queryUrl).then(function(facility){
        if(facility.ok){
            facility.json().then(function(result){
                var resultFacility = result;
                var resultFacility = result;
                console.log(resultFacility);

                for (i=0; i<11; i++){
                
                var nameShelterResult = resultFacility.nonprofits[i].name;
                var descriptionShelterResult = resultFacility.nonprofits[i].description;
                var imageShelterResult = resultFacility.nonprofits[i].coverImageUrl;
                var logoShelterResult = resultFacility.nonprofits[i].logoUrl;
                var profileUrlShelter = resultFacility.nonprofits[i].profileUrl
                //var foodBankEl = document.getElementById("foodBank" + i);
 
                $("#nameWomen"+i).text(nameShelterResult);
                $("#descriptionWomen"+i).text(descriptionShelterResult);
                $("#logoWomen"+i).attr("src", logoShelterResult);
                $("#visitBtnWomen"+i).attr("href",profileUrlShelter);
                console.log(resultFacility);
              
            }
            
        })}})};
 
womenShelter();



