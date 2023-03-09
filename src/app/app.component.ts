import { Component } from '@angular/core';
import {CreditService} from "./service/credit.service";
import {Router} from "@angular/router";
import {Client} from "appwrite";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fantaFormula1';
  showCredits = true;

  creditiHeader = 0;

  constructor(private creditService: CreditService, private router: Router) {


    router.events.subscribe((val) => {
      if (this.router.url.includes('x5zykmnwp3') || this.router.url.includes('yvFbLGxmNAk0'))
      {
        this.showCredits = false;
      }
    });


  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.creditService.data.subscribe(response => {
      this.creditiHeader = response; // you will receive the data from sender component here.
    });
  }
}
