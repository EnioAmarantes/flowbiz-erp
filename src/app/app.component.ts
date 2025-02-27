import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { MenubarComponent } from './components/menubar/menubar.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MenubarComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'flowbiz-erp';
}
