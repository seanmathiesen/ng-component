# ng-component

## How the app was built
This section lists the commands that were used to scaffold the app:

Scaffold an app.
```sh
ng new my-app
cd my-app
```

Add a component.
```sh
ng generate component my-component
```

Add the Angular Elements package.
```sh
ng add @angular/elements
```

Generate a Module in order to allow us to hook into ngBootstrap to bootstrap the Custom Element.
```sh
ng generate module app --flat
```

Build the app.
```sh
ng build --configuration production
```

## Run the app
Serve the files from the output folder over http using http-server. Using the files directly from disk results in CORS errors.
```sh
npm install -g http-server
cd dist\my-app\browser
http-server -p 4201
```

Browse to http://localhost:4201/index.html