import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription, interval} from 'rxjs';
import {RACE_DATE} from "../utils/constants";
import {ConfigurationService} from "../../service/configuration.service";

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  public dDay = null;
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute = 60;

  public timeDifference: any;
  public secondsToDday: any;
  public minutesToDday: any;
  public hoursToDday: any;
  public daysToDday: any;

  showTimer = false;

  constructor(private configurationService: ConfigurationService) {

  }


  private getTimeDifference() {
    this.timeDifference = this.dDay.getTime() - new Date().getTime();
    if (this.timeDifference < 0) {
      this.showTimer = false;
    } else {
      this.showTimer = true;
      this.allocateTimeUnits(this.timeDifference);
    }
  }

  private allocateTimeUnits(timeDifference: any) {
    this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
    this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
    this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
    this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
  }

  ngOnInit() {
    this.configurationService.getConfig().subscribe(value => {
      this.dDay = new Date(value.schieramentoEnd);
    });
    this.subscription = interval(1000)
      .subscribe(x => {
        this.getTimeDifference();
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
