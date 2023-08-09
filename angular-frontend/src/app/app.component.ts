import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Test, TestService } from './services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-frontend';

  valueFromBackend$: Observable<Test> = this.testService.getUserById(1);
  constructor(private testService: TestService) {}
}
