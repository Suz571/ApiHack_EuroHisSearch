$(document).ready(function(){

    function searchArchives(){
        //general search API
       // https://api.europeana.eu/api/v2/opensearch.rss?count=12&searchTerms=WWII&startIndex=1
        const apiKey = 'HutTAJv7w';
        let searchTopic = $('#searchTopic').val();
        let maxResults = $('#maxResults').val(); //count= parameter
        const apiURL = 'https://api.europeana.eu/api/v2/opensearch.rss?';
        //'https://www.europeana.eu/api/v2/search.json?' record search API
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
         for (let i = 0; i < responseJson.items.length; i++){
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
            searchArchives();
    
        });
    }
    
    $(runForm);




})