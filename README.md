# ng-component

## Scaffold the Angular app and create a component
```sh
ng new my-app
cd my-app
ng generate component my-component
```

## Verify it builds
```sh
ng build --configuration production
```

## Add the Angular element package.
```sh
ng add @angular/elements
```

## Serve up the files locally. Use http-server to avoid CORS errors.
```sh
npm install -g http-server
cd dist\my-app\browser
http-server -p 4201
```

Browse to http://localhost:4201/index.html.