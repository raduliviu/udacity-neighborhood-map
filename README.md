# Berlin Museum Map

This is part of Udacity's Front End Web Development Nanodegree.
It is a map of Berlin, showing you museum locations. Clicking on a marker/museum in the sidebar will show you an info window with an image of the museum and their Foursquare rating.

### Project Rubric
The project rubric for this can be found [here](https://review.udacity.com/#!/rubrics/1351/view)

## Installation

To get up and running, follow these steps:

1. Clone the project to your local machine
2. ```cd``` into the project directory
3. Run ```npm install``` to install dependencies
4. Run ```yarn start``` to start the server

For production build (and also for the Service Worker to function), instead of point 4 from above, use the following:
4. Run ```yarn build``` 
5. Run ```yarn global add serve``` 
6. Run ```serve -s build```
7. Access http://localhost:5000/

## Dependencies

For this project I used:
1. [React Google Maps](https://github.com/tomchentw/react-google-maps)
2. [Google Maps API](https://developers.google.com/maps/documentation/javascript/tutorial)
3. [Foursquare API](https://developer.foursquare.com/)