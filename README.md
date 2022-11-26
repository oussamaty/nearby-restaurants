# Nearby Restaurants

This is a Single Page Application based on React that uses Google Maps APIs to search and display the restaurants within a radius of the user's location.

It displays their information on the left and their positions on the rights thanks to Google Maps API Markers.

Clicking on the restaurant card pans the map to its location.

## API Keys

This project relies on Google Maps API, you have to [create your own API KEY](https://developers.google.com/maps/documentation/javascript/get-api-key), and use it within the project to run it. Please follow the instructions below to add your own API KEY:

* In the root directory, create a new environment file, called .env
* Copy/Paste the following line:

```bash
REACT_APP_GOOGLE_MAPS_API_KEY = " YOUR_API_KEY_HERE " 
```
Make sure to replace YOUR_API_KEY_HERE with your Google Maps API Key!

## Launch

You have to run from the project directory:

```bash
npm install
```

This would install all the required dependencies.

Once it's done, you can run from the project directory:

```bash
npm start
```

To launch the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Inside the App

Openning the site at the first time will result in something like the picture below:

![First Visit](/assets/FirstVisit.png)

By default, the map assumes that the user is located at Stockholm, Sweden.

After clicking on the position button, it will pan to the user's actual position. It might take some seconds but it should show correctly like the picture below:

![User Location](/assets/UserLocation.png)

Then if you feel like it you can change the radius and click on the search button to get something like this:

![Nearby Search](/assets/NearbySearch.png)

And finally, you can click on a restaurant card to pan towrds its location:

![Pan to Restaurant](/assets/PanToRestaurant.png)

## Conclusion

I enjoyed working on this project, it was fun using the Google Maps API. Nevertheless, I still struggled using it especially with React. There was no clear documentation and the one provided by Google Developers while very helpfull didn't give enough examples and some of the ones that were provided had some errors.

Overall, I would rate it 8 out of 10. Still better than Bluetooth on Android :(