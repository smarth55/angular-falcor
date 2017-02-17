import { Component } from '@angular/core';

import { FalcorService } from './services/falcor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private falcorService: FalcorService) {}

  ngOnInit() {
  	this.falcorService.getUsers();
  }
}
