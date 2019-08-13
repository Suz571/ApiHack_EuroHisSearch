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
    .catch(function(e){
        alert('Something went wrong.');
        console.log(e);
    })
}

function status(response){
    if(!response.ok){
        throw new Error('Oops. something went wrong');
    }
    return response; 
}
    
/*
function status(response){
    try{
       throw !response.ok;
    } catch(e){
       new alert("Oops. Something went wrong!");
       console.log(e.name);
       console.log(e.message);        
    }

*/
function displayResults(responseJson){
    $('#results-list').empty();    
        //for (let i = 0; i < responseJson.items.length; i++){
    for (const item of responseJson.items){  
        if(!item.dcDescription){
            item.dcDescription = [""];
        }  
        $('#results-list').append(
            `<li><h4><a href="${item.edmIsShownBy}">${item.title}</a></h4>
            <p>${item.dcDescription[0]}</p>
            <img src="${item.edmPreview}"> 
            </li>`
        )
    }
        
    $('.results-page').removeClass('hidden');
}


function whenReady(){
    $('form').submit(e=>{
        event.preventDefault();
        searchArchives();

    });
}

$(whenReady);





