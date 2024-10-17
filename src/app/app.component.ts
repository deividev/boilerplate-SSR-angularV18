import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainContainerComponent } from '../components';
import { ThemeService } from '../services/theme.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainContainerComponent, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Angular18-boilerplate';

  constructor(private themeService: ThemeService) {}

  changeTheme(event: Event): void {
    const theme = (event.target as HTMLSelectElement).value;
    this.themeService.setTheme(theme);
  }
}
