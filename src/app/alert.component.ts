import {Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, Input, ViewChild, ViewContainerRef} from '@angular/core';

/**
 * https://netbasal.com/dynamically-creating-components-with-angular-a7346f4a982d
 */
@Component({
  selector: 'alert',
  template: `
    <h1>Alert {{type}}</h1>
  `,
})
export class AlertComponent {
  @Input() type = 'success';
}
