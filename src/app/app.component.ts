import {Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef} from '@angular/core';
import {AlertComponent} from './alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  @ViewChild("alertContainer", { read: ViewContainerRef }) container;

  componentRef: ComponentRef<AlertComponent>;

  constructor(private resolver: ComponentFactoryResolver) {}

  createComponent(type) {
    this.container.clear();
    const factory: ComponentFactory<AlertComponent> = this.resolver.resolveComponentFactory(AlertComponent);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.type = type;
  }
}
