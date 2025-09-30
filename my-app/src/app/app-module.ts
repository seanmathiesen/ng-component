import { NgModule, DoBootstrap, ApplicationRef, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { MyComponent } from './my-component/my-component'; // standalone component

@NgModule({
  imports: [BrowserModule, MyComponent], // import standalone
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(appRef: ApplicationRef): void {
    const el = createCustomElement(MyComponent, { injector: this.injector });
    customElements.define('my-widget', el);
  }
}
