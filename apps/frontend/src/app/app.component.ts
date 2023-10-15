import { Component } from '@angular/core';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [DashboardComponent, HttpClientModule],
  selector: 'to-do-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend';
}
