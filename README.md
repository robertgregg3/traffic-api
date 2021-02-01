# IBI Group Glasgow Front End Developer Technical Test

Create a React App that reads traffic information and displays it in an easy-to-read format.

## Objectives

Demonstrate your technical abilities by completing the following objectives:

- Create a React based app that handles the pulling of data from the following API endpoints
  - [Glasgow traffic counter locations](https://gcc.azure-api.net/traffic/locations?format=json)
  - [Glasgow traffic movement data](https://gcc.azure-api.net/traffic/movement?format=json)
- Use the above data to display (at the very least) vehicle flow and location description about each traffic counter site.
- Copy and update this readme with details of the final solution into your repository.
- Email us a link to your repository so that we can download, view and run your solution.

### Additional Considerations

- What is the best way of presenting the information so that it is easy to consume? E.g. list, map.
- What data validation and error handling is required to ensure the app can handle invalid or failed data requests?
- How can the UX be improved to make it easy for the user to find the information that they are looking for?

# Solution

## Data setup

- I first wanted to access the API data and display it in some basic form. I ran into some CORS errors (exmplained below) so decided to pursue with Static data, but also provide teh API files to show how I would implement the live data.
- I saw the 2 different Endpoints were linked with an ID and a measurementSiteReference. After much tinkering I learned that not every json object was complete. So I created some logic to iterate through each json file and returning a new object with the desired data ONLY if the ID matched with the reference.
- A good reference I found for the CORS error is here: https://stackoverflow.com/questions/45975135/access-control-origin-header-error-using-axios-in-react-web-throwing-error-in-ch

## presenting the information

- The data I chose was what was made sense to me, which included the id, trafficFlow, trafficConcentration, fromDescription, toDescription, fromLat, fromLong, toLat, toLong. With the idea of seeing the flow/concentration of traffic data from the location of each traffic counter
- I plotted the points on a Google map and added a hover element which shows the above details under the map.
- I added some conditional logic to show coloured icons according to the traffic flow number. The low congestion = green, mid = orange, high = red. Please note that by adding custom icons that are just a few hundred Bytes caused a delay of the data showing of about 1-2 seconds. Using the standard Google markers was almost instant.
- I added some buttons to show the raw data shoiuld that be your "thing".
- I ran out of time to refactor some of the code so from a DX I would spend more time organising the files and refactoring the code

## Data validation and error handling

- Added some basic error handling for if there is no data present it will display a message sating "cannot fetch data"
- Using the live data I would try and impliment some kind of snap shot taken every few seconds that gets saved to local storage perhaps, so that if there is an issue with the connection it can display the error message along with th data from the last taken snapshot

## How can the UX be improved

- put the raw data into a sortable table
- Explore the issue with the custom marker
- add some more conditional logic depending on the flow of traffic

# Getting Started

- The repo should be fine to just clone it and run on your machine and even upload to a React ready server.
- It doesn't require a server as it is using static data.
- To get around the CORS issue I believe heades need to be added and for the application to be hosted on the same server as where the ENDPOINTs are located.

- Thanks IBI for the challenge. I thoroughly enjoyed it. I may have one extra grey hair but it was worth it!
