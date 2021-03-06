import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalAnimation } from './animations/modal.animations';
import { CreateCustomerAnimation } from './animations/create-customer.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ ModalAnimation, CreateCustomerAnimation ]
})
export class AppComponent {
  title = 'Spectrum AngularJS Test';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
