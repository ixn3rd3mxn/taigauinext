import { TuiRoot } from '@taiga-ui/core';
import { Component } from '@angular/core';
import { NavigationFullComponent } from './layout/navigation-full/navigation-full.component';

@Component({
  selector: 'app-root',
  imports: [TuiRoot, NavigationFullComponent],
  templateUrl: './app.html',
  styleUrl: './app.less',
})
export class App {}
