import { Component, HostBinding, Input } from '@angular/core';
import { slideInDownAnimation } from './animations';
import { WizardAction } from './states';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInDownAnimation ]
})
export class AppComponent {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.padding') padding = '50px 0';
  @HostBinding('style.display')   display = 'block';
  // @HostBinding('style.position')  position = 'absolute';
  @HostBinding('style.backgroundColor') backgroundColor = '#1976D2';
  @HostBinding('style.color') color = 'white';

  @Input() param;

  actions: WizardAction[] = [];
  haveFooter: boolean = true;
}
