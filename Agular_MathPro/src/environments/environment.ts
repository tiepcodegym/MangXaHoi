// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: "http://127.0.0.1:8000/api",
  firebaseConfig : {
    apiKey: "AIzaSyAsQOtEBgalTCf5V4Jok3dr9Gv78Wczi5M",
    authDomain: "tiepmath.firebaseapp.com",
    databaseURL: "https://tiepmath-default-rtdb.firebaseio.com/",
    projectId: "tiepmath",
    storageBucket: "tiepmath.appspot.com",
    messagingSenderId: "572197319327",
    appId: "1:572197319327:web:964b866f05ba2e95fc68aa",
    measurementId: "G-8C45HQ2LNX"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
