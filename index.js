$(document).ready(function(){

    function searchArchives(){
       // https://www.europeana.eu/api/v2/search.json?wskey=HutTAJv7w&query=mona lisa&thumbnail=true&media=true
        const apiKey = 'HutTAJv7w';
        let searchTopic = $('#searchTopic').val();
        //let maxResults = $('#maxResults').val();
        const apiURL = 'https://www.europeana.eu/api/v2/search.json?';
        let apiPath = apiURL+'wskey='+apiKey+'&query='+searchTopic+'thumbanil=true&media=true';
   
        console.log(searchTopic);
        console.log(apiPath);
        //console.log(maxResults);

        fetch(apiPath)
        .then(status)
        .then(response=>response.json())
        .then(responseJson=>
                displayResults(responseJson))
    }

    function status(response){
        if(!response.ok){
            throw alert("Oops. Something went wrong!")
        }
        return response;
    }

    function displayResults(responseJson){
        $('#results-list').empty();    
         for (let i = 0; i < responseJson.data.length; i++){
            $('#results-list').append(
                `<li><h3><a href="${responseJson.item[i].edmIsShownBy}">${responseJson.item[i].title}</a></h3>
                <p>${responseJson.data[i].description}</p>
                <img src="${responseJson.item[i].edmPreview}"> 
                </li>`
            )};
            
        $('#results').removeClass('hidden');
    }
   

    function runForm(){
        $('form').submit(e=>{
            event.preventDefault();
            searchParks();
    
        });
    }
    
    $(runForm);




})