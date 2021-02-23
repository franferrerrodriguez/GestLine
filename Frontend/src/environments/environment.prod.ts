// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  packagejson: require('../../package.json'),
  //zuul: 'http://localhost:9061',
  zuul: 'http://ec2-35-180-55-248.eu-west-3.compute.amazonaws.com:9061',
  sessionTime: 5
};

export const environmentAPI = {
  //zuul: 'http://localhost:9061',
  zuul: 'http://ec2-35-180-55-248.eu-west-3.compute.amazonaws.com:9061',
};

export const API = {
  msauthenticationv1: environment.zuul + '/ms-authentication/v1/',
  msclientmanagementv1: environment.zuul + '/ms-client-management/v1/',
  mscontractv1: environment.zuul + '/ms-contract/v1/',
  msinvoicev1: environment.zuul + '/ms-invoice/v1/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.