import { bootstrapApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { App } from './app/app';
import { appConfig } from './app/app.config';
import { MyComponent } from './app/my-component/my-component';

bootstrapApplication(App, appConfig)
  .then(appRef => {
    const injector = appRef.injector;
    const el = createCustomElement(MyComponent, { injector });
    customElements.define('my-widget', el);
  })
  .catch((err) => console.error(err));
