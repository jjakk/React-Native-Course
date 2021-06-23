import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

const getLocation = increment => {
    return {
        timestamp: 100000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: 41.0641884 + increment * tenMetersWithDegrees,
            latitude: -73.5051309 + increment * tenMetersWithDegrees
        }
    };
};

let counter = 0;

setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter++;
}, 1000);