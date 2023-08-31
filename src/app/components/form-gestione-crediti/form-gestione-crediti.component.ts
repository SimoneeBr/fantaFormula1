import {Component, OnInit} from '@angular/core';
import {Container} from "../../model/container";
import {ActivatedRoute, Router} from "@angular/router";
import {ContainermongodbService} from "../../service/containermongodb.service";

@Component({
  selector: 'app-form-gestione-crediti',
  templateUrl: './form-gestione-crediti.component.html',
  styleUrls: ['./form-gestione-crediti.component.scss']
})
export class FormGestioneCreditiComponent implements OnInit {

  PIL_ARRAY: Container[];
  COSTRUTT_ARRAY: Container[];
  MOT_ARRAY: Container[];


  constructor(private route: ActivatedRoute, private router: Router, private containerService: ContainermongodbService) {
  }

  ngOnInit() {
    this.initializeAll();
  }

  initializeAll() {
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
    console.log(container);
    this.containerService.updateContainer(container).subscribe(() =>
      this.initializeAll()
    )
  };

}

