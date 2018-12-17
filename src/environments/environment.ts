// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  firebase: {
    apiKey: 'AIzaSyBLvhlz5_xhEHJ95JGbIW9h3s4ij9Pw1lI',
    authDomain: 'tracker-taxi-9544c.firebaseapp.com',
    databaseURL: 'https://tracker-taxi-9544c.firebaseio.com',
    projectId: 'tracker-taxi-9544c',
    storageBucket: 'tracker-taxi-9544c.appspot.com',
    messagingSenderId: '165845536756'
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
