import { Component } from '@angular/core';
import {CreditService} from "./service/credit.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fantaFormula1';

  creditiHeader = 0;

  constructor(private creditService: CreditService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.creditService.data.subscribe(response => {
     this.creditiHeader = response; // you will receive the data from sender component here.
    });
  }
}
