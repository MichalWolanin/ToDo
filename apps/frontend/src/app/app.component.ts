import { Component } from '@angular/core';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";

@Component({
  standalone: true,
  imports: [ DashboardComponent],
  selector: 'to-do-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend';
}
