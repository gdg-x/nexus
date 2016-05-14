# [GDG](https://developers.google.com/groups/) Nexus [AngularAttack](https://www.angularattack.com) 2016 Repo

### Step 1) Get Your Local Environment setup

* `git clone git@github.com:rumblex/angularattack2016-gdgnexus.git`

* `cd angularattack2016-gdgnexus`

* Install the latest [Node / NPM](https://nodejs.org).

* `npm install`

* `npm install -g surge`

* `ng serve` will start a server locally to test that everything is running correctly


### Step 2) Deploy Your App

Deploy the app to [Surge](https://surge.sh)

* `ng build -prod`

* `cp CNAME dist/`

* `surge ./dist`

Note: You have to copy the `CNAME` file every deploy now. Ideally we'd find a way to tell angular-cli to do this in the prod build.

### Step 42) Deploy your final version before the competition ends

It ends at exactly [May 16 at 00:00 UTC](https://www.wolframalpha.com/input/?i=May+16,+2016+0:00+UTC).

## Contributors
* Kyle Paul - [kpaul86+github@gmail.com](mailto:kpaul86+github@gmail.com)
* Valerie Scarlata - [valscarlatadev@gmail.com](mailto:valscarlatadev@gmail.com)
* Emily Bamsey - [em.14@hotmail.com](mailto:em.14@hotmail.com)
* Michael Prentice - [splaktar@gmail.com](mailto:splaktar@gmail.com)
