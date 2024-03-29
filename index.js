function searchArchives(){
    
    const apiKey = 'HutTAJv7w'; 
    let searchTopic = $('#searchTopic').val();
    let maxResults= $('#maxResults').val();
    let apiPath = 'https://www.europeana.eu/api/v2/search.json?profile=standard&query='+searchTopic+'&rows='+maxResults+'&wskey='+apiKey;
    

    console.log(searchTopic);
    console.log(apiPath);
    console.log(maxResults);

    fetch(apiPath)
    .then(status)
    .then(response=>response.json())
    .then(responseJson=>
            displayResults(responseJson))
}

function status(response){
    if(!response.ok){
        throw alert("Oops. Something went wrong!") //err catch
    }
    return response;
}

function displayResults(responseJson){
    $('#results-list').empty();    
        //for (let i = 0; i < responseJson.items.length; i++){
        for (const item of responseJson.items){    
        $('#results-list').append(
            `<li><h4><a href="${item.edmIsShownBy}">${item.title}</a></h4>
            <p>${item.dcDescription[0]}</p>
            <img src="${item.edmPreview}"> 
            </li>`
        )};
        
    $('.results-page').removeClass('hidden');
}


function whenReady(){
    $('form').submit(e=>{
        event.preventDefault();
        searchArchives();

    });
}

$(whenReady);





