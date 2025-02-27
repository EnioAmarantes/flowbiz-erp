import { Component, Input } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Input() title: string = '';
  environment = environment;

}
