import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Container} from "../../model/container";
import {CreditService} from "../../service/credit.service";

@Component({
  selector: 'app-form-schieramento',
  templateUrl: './form-schieramento.component.html',
  styleUrls: ['./form-schieramento.component.scss']
})
export class FormSchieramentoComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  CAT_ARRAY = ['F1', 'WEC', 'FE', 'INDY', 'GT', 'DTM', 'NASCAR']
  MOT_ARRAY: Container[] = [{name: 'Red Bull PowerTrains', token: 20}, {name: 'Ferrari', token: 15}, {name: 'Mercedes', token: 10}, {
    name: 'Renault',
    token: 5
  }];
  PIL_ARRAY: Container[] = [
    {name: 'Verstappen', token: 100},
    {name: 'Leclerc', token: 95},
    {name: 'Perez', token: 90},
    {name: 'Sainz', token: 90},
    {name: 'Hamilton', token: 85},
    {name: 'Russel', token: 80},
    {name: 'Norris', token: 75},
    {name: 'Ocon', token: 70},
    {name: 'Gasly', token: 65},
    {name: 'Alonso', token: 65},
    {name: 'Bottas', token: 60},
    {name: 'Piastri', token: 55},
    {name: 'Drugovich', token: 55},
    {name: 'Zhou', token: 50},
    {name: 'Tsunoda', token: 45},
    {name: 'Magnussen', token: 40},
    {name: 'Hulkenberg', token: 35},
    {name: 'De Vries', token: 30},
    {name: 'Albon', token: 25},
    {name: 'Sargeant', token: 20}
  ]
  COSTRUTT_ARRAY: Container[] = [
    {name: 'Red Bull', token: 100},
    {name: 'Ferrari', token: 90},
    {name: 'Mercedes', token: 80},
    {name: 'McLaren', token: 70},
    {name: 'Alpine', token: 60},
    {name: 'Aston Martin', token: 50},
    {name: 'Alfa Romeo', token: 50},
    {name: 'Alpha Tauri', token: 40},
    {name: 'Haas', token: 30},
    {name: 'Williams', token: 20}
  ];
  PISTOP_ARRAY: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '10+'];
  SHORT_PILOTI: string[] = ['ALB', 'ALO', 'BOT', 'GAS', 'HAM', 'LAT', 'LEC', 'MAG', 'NOR', 'OCO', 'PER', 'RIC', 'RUS', 'SAI', 'SCH', 'STR', 'TSU', 'VER', 'VET', 'ZHO'];
  RITIRATI_ARRAY: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
  crediti = 300;
  creditiTotali = 300;

  category: string = '';
  motor: string = '';
  pilotFist: string = '';
  pilotSecond: string = '';
  pilotThird: string = '';
  costruttori: string = '';
  pitstop: number = -1;
  q1: string = '';
  q2: string = '';
  q3: string = '';
  q4: string = '';
  q5: string = '';
  p1: string = '';
  p2: string = '';
  p3: string = '';
  p4: string = '';
  p5: string = '';
  p6: string = '';
  p7: string = '';
  p8: string = '';
  p9: string = '';
  p10: string = '';
  primoRitirato: string = '';
  numeroRitirati: number = -1;
  safetyCar: boolean = false;

  constructor(private creditService: CreditService) {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      driver: new FormControl('', [Validators.required]),
      squadra: new FormControl('', [Validators.required]),
      category: new FormControl('',[Validators.required]),
      motor: new FormControl('', [Validators.required]),
      pilotFist: new FormControl('', [Validators.required]),
      pilotSecond: new FormControl('', [Validators.required]),
      pilotThird: new FormControl('', [Validators.required]),
      costruttori: new FormControl('', [Validators.required]),
      pitstop: new FormControl('', [Validators.required]),
      q1: new FormControl('', [Validators.required]),
      q2: new FormControl('', [Validators.required]),
      q3: new FormControl('', [Validators.required]),
      q4: new FormControl('', [Validators.required]),
      q5: new FormControl('', [Validators.required]),
      p1: new FormControl('', [Validators.required]),
      p2: new FormControl('', [Validators.required]),
      p3: new FormControl('', [Validators.required]),
      p4: new FormControl('', [Validators.required]),
      p5: new FormControl('', [Validators.required]),
      p6: new FormControl('', [Validators.required]),
      p7: new FormControl('', [Validators.required]),
      p8: new FormControl('', [Validators.required]),
      p9: new FormControl('', [Validators.required]),
      p10: new FormControl('', [Validators.required]),
      primoRitirato: new FormControl('', [Validators.required]),
      safetyCar: new FormControl(false, [Validators.required]),
      numeroRitirati: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(20)]),
      tempoPole: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{1}.[0-9]{2}.[0-9]{3}$')]),
      giroVeloce: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{1}.[0-9]{2}.[0-9]{3}$')]),
    });
  }

  ngOnInit(): void {
    this.creditService.sendData(this.crediti);
  }

  onSubmit() {
    if(!this.isFormValid()) {
      return;
    }else{
      console.log('submitted')
    }
  }

  isFormValid() {
    return this.form.valid &&
      this.category !== null && this.category !== '' &&
      this.motor !== null && this.motor !== '' &&
      this.pilotFist !== null && this.pilotFist !== '' &&
      this.pilotSecond !== null && this.pilotSecond !== '' &&
      this.pilotThird !== null && this.pilotThird !== '' &&
      this.costruttori !== null && this.costruttori !== '' &&
      this.pitstop !== null && this.pitstop !== -1 &&
      this.q1 !== null && this.q1 !== '' &&
      this.q2 !== null && this.q2 !== '' &&
      this.q3 !== null && this.q3 !== '' &&
      this.q4 !== null && this.q4 !== '' &&
      this.q5 !== null && this.q5 !== '' &&
      this.p1 !== null && this.p1 !== '' &&
      this.p2 !== null && this.p2 !== '' &&
      this.p3 !== null && this.p3 !== '' &&
      this.p4 !== null && this.p4 !== '' &&
      this.p5 !== null && this.p5 !== '' &&
      this.p6 !== null && this.p6 !== '' &&
      this.p7 !== null && this.p7 !== '' &&
      this.p8 !== null && this.p8 !== '' &&
      this.p9 !== null && this.p9 !== '' &&
      this.p10 !== null && this.p10 !== '' &&
      this.primoRitirato !== null && this.primoRitirato !== '' &&
      this.numeroRitirati !== null && this.numeroRitirati !== -1;
  }

  onSelect() {
    console.log(this.PIL_ARRAY.filter(p => p.name === this.pilotFist)[0].token);
  }

  recalculatePrices() {
    this.crediti = this.creditiTotali;
    if(this.PIL_ARRAY.filter(p => p.name === this.pilotFist).length > 0){
    this.crediti -= this.PIL_ARRAY.filter(p => p.name === this.pilotFist)[0].token;
    }
    if(this.PIL_ARRAY.filter(p => p.name === this.pilotSecond).length > 0){
      this.crediti -= this.PIL_ARRAY.filter(p => p.name === this.pilotSecond)[0].token;
    }
    if(this.PIL_ARRAY.filter(p => p.name === this.pilotThird).length > 0){
      this.crediti -= this.PIL_ARRAY.filter(p => p.name === this.pilotThird)[0].token;
    }
    if(this.COSTRUTT_ARRAY.filter(p => p.name === this.costruttori).length > 0){
      this.crediti -= this.COSTRUTT_ARRAY.filter(p => p.name === this.costruttori)[0].token;
    }
    if(this.MOT_ARRAY.filter(p => p.name === this.motor).length > 0){
      this.crediti -= this.MOT_ARRAY.filter(p => p.name === this.motor)[0].token;
    }
    this.creditService.sendData(this.crediti);
  }

  sameChoice() {
    return this.form.touched && (this.pilotFist === this.pilotSecond || this.pilotFist === this.pilotThird || this.pilotSecond === this.pilotThird ||
      this.q1 === this.q2 || this.q1 === this.q3 || this.q1 === this.q4 || this.q1 === this.q5 || this.q2 === this.q3 || this.q2 === this.q4 || this.q2 === this.q5 || this.q3 === this.q4 || this.q3 === this.q5 || this.q4 === this.q5 ||
      this.p1 === this.p2 || this.p1 === this.p2 || this.p1 === this.p3 || this.p1 === this.p4 || this.p1 === this.p5 || this.p1 === this.p6 || this.p1 === this.p7 || this.p1 === this.p8 || this.p1 === this.p9 || this.p1 === this.p10 ||
      this.p2 === this.p3 || this.p2 === this.p4 || this.p2 === this.p5 || this.p2 === this.p6 || this.p2 === this.p7 || this.p2 === this.p8 || this.p2 === this.p9 || this.p2 === this.p10 ||
      this.p3 === this.p4 || this.p3 === this.p5 || this.p3 === this.p6 || this.p3 === this.p7 || this.p3 === this.p8 || this.p3 === this.p9 || this.p3 === this.p10 ||
      this.p4 === this.p5 || this.p4 === this.p6 || this.p4 === this.p7 || this.p4 === this.p8 || this.p4 === this.p9 || this.p4 === this.p10 ||
      this.p5 === this.p6 || this.p5 === this.p7 || this.p5 === this.p8 || this.p5 === this.p9 || this.p5 === this.p10 ||
      this.p6 === this.p7 || this.p6 === this.p8 || this.p6 === this.p9 || this.p6 === this.p10 ||
      this.p7 === this.p8 || this.p7 === this.p9 || this.p7 === this.p10 ||
      this.p8 === this.p9 || this.p8 === this.p10 ||
      this.p9 === this.p10);
  }
}
