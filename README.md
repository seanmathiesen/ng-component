# Standalone Widget using Angular 20

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
ng build --configuration production --output-hashing=none
```

## Run the app
Serve the files from the output folder over http using http-server. Using the files directly from disk results in CORS errors.
```sh
npm install -g http-server
cd dist\my-app\browser
http-server -p 4201
```

Browse to http://localhost:4201/index.html

## Package the app
Bundle the app using Rollup. This produces a unified script called my-app.bundle.js, which can be added to any standalone page to import the Angular web component.
```sh
npx rollup -c
```

## Example usage
<img width="625" height="88" alt="image" src="https://github.com/user-attachments/assets/aab6c1de-22ed-4780-a2a5-bf17baa99205" />

```html
<!--index.html-->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Angular Custom Element Test</title>
</head>
<body>
  <h1>Outside Angular</h1>
  <my-widget></my-widget>
  <script type="module" src="my-app.bundle.js"></script>
</body>
</html>
```




