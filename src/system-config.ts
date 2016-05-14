/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  'firebase': 'vendor/firebase/lib/firebase-web.js',
  'angularfire2': 'vendor/angularfire2',
  '@angular2-material': 'vendor/@angular2-material'
};

/** User packages configuration. */
const packages: any = {
  angularfire2: {
    defaultExtension: 'js',
    main: 'angularfire2.js'
  },
  '@angular2-material/core': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'core.js'
  },
  '@angular2-material/card': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'card.js'
  },
  '@angular2-material/button': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'button.js'
  },
  '@angular2-material/icon': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'icon.js'
  },
  '@angular2-material/sidenav': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'sidenav.js'
  },
  '@angular2-material/toolbar': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'toolbar.js'
  },
  '@angular2-material/list': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'list.js'
  },
  '@angular2-material/progress-circle': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'progress-circle.js'
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/+about',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
