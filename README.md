# ApiHack_EuroHisSearch
API Hack Capstone Project: European History Search

Use Fetch to asynchronously load data from one or more APIs
Use jQuery's DOM traversal and manipulation functionality to display the data from the API to the user in an interesting way
Use jQuery's event listening capabilities to respond to user actions

User Stories:

##Purpose: 
search archives by topic and see results 
complete capstone

#Must
search for information by subject topic
searchable using keyboard
see title of results
see results with URL
a11y friendly

#Should
see thumbnails of results
see results with descriptions in english

#Could
set language parameter
sort results by media type
see where resources are located (which museuem collection)

MOSCOW:
Must (Minimum viable product)
Should (Preferrable)
Could (if everything else is done)

### User flow ###

#What User Sees
#What User Does
#What Happens Next after doing the thing

1. User sees search text bar with submit button (sees)
2. User enters search topic and submits (does)
3. User is shown results from their search topic (next)
4. if search successful user sees results from search in list format (sees)
5. search parameter is inserted into API path and fetched from website (does)
    6. if search unsuccessful error message is displayed (sees)
    7. error alert created for !response.ok and response.ok but no results. (does)
8. User sees or hears results listed with title, description, and URL 
9. Filter through API response to only show those objects of array
10. User can click on URL for more information of the result item
11. new window will open displaying more information
12. User can enter another search term
13. Results display will empty when a new search.
14. User can change paramters to filter results.
15. insert new parameters into API fetch URL.  
16. (see above flow #3-8)