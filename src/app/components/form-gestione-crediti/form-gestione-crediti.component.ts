import {Component, OnInit} from '@angular/core';
import {Container} from "../../model/container";
import {ActivatedRoute, Router} from "@angular/router";
import {ContainermongodbService} from "../../service/containermongodb.service";
import {
  NgbCalendar,
  NgbDatepickerConfig,
  NgbDateStruct,
  NgbTimepickerConfig,
  NgbTimeStruct
} from "@ng-bootstrap/ng-bootstrap";
import {DataTimeService} from "../../service/datatime.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-form-gestione-crediti',
  templateUrl: './form-gestione-crediti.component.html',
  styleUrls: ['./form-gestione-crediti.component.scss']
})
export class FormGestioneCreditiComponent implements OnInit {
  PIL_ARRAY: Container[];
  COSTRUTT_ARRAY: Container[];
  MOT_ARRAY: Container[];

  time: NgbTimeStruct = {hour: null, minute: null, second: null};
  date: NgbDateStruct;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private toast: ToastrService,
              private containerService: ContainermongodbService,
              config: NgbTimepickerConfig,
              private calendar: NgbCalendar,
              conf: NgbDatepickerConfig,
              private dataTimeService: DataTimeService) {
    config.seconds = true;
    config.spinners = false;
  }

  ngOnInit() {
    this.initializeAll();
  }

  initializeAll() {
    this.dataTimeService.getDataTime().subscribe((value: any) => {
      this.composeDateTime(value);
    });


    this.containerService.getAllMotori().subscribe((data: Container[]) => {
      this.MOT_ARRAY = data;
      //sort by token field
      this.MOT_ARRAY.sort((a, b) => (a.token! > b.token!) ? -1 : 1)
    });
    this.containerService.getAllPiloti().subscribe((data: Container[]) => {
      this.PIL_ARRAY = data;
//sort by token field
      this.PIL_ARRAY.sort((a, b) => (a.token! > b.token!) ? -1 : 1)
    });
    this.containerService.getAllCostruttori().subscribe((data: Container[]) => {
      this.COSTRUTT_ARRAY = data;
//sort by token field
      this.COSTRUTT_ARRAY.sort((a, b) => (a.token! > b.token!) ? -1 : 1)
    });
  }

  save(container: Container) {
    this.containerService.updateContainer(container).subscribe(() => {
      this.toast.success('Dati aggiornata con successo', 'Successo');
      this.initializeAll()
    })
  };

  confirmTimeData(): void {
    console.log(this.time, this.transformNgbDateStructToDate(this.date));
    this.dataTimeService.createDataTime(this.transformNgbDateStructToDate(this.date)).subscribe(result => {
      this.toast.success('Timer aggiornato con successo', 'Successo');
    });
  }

  transformNgbDateStructToDate(oldDate: NgbDateStruct) {
    const tmp = new Date();
    return new Date(tmp.setFullYear(oldDate.year, oldDate.month, oldDate.day));
  }


  private composeDateTime(value: any) {
    let date = new Date(value.time);
    date.setHours(date.getHours() - 2);
    this.date = {day: date.getDate(), month: date.getMonth(), year: date.getFullYear()};
  }
}
