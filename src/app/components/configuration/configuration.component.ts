import {Component, OnInit} from '@angular/core';
import {SchieramentoService} from "../../service/schieramento.service";
import {ConfigurationService} from "../../service/configuration.service";
import {ToastrService} from "ngx-toastr";
import {ContainermongodbService} from "../../service/containermongodb.service";
import {Lega} from "../../model/lega";

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {


  actualDate = null;
  newDate = null;
  schieramentiValue = 0;
  leghe: Lega[] = [];

  constructor(private schieramentoService: SchieramentoService, private toast: ToastrService, private configService: ConfigurationService, private containerService: ContainermongodbService) {

  }

  ngOnInit(): void {
    this.reloadAll();
  }

  saveDate() {
    this.configService.saveConfig({schieramentoEnd: this.newDate}).subscribe(value => {
      this.toast.success("Data salvata con successo");
      this.reloadAll();
    }, error => {
      this.toast.error("Errore nel salvataggio della data");
    });
  }

  resetSchieramenti() {
    const dialog = confirm("Sei sicuro di voler resettare tutti gli schieramenti?");
    if (dialog) {
      this.schieramentoService.deleteAll().subscribe(value => {
          this.toast.success("Schieramenti resettati con successo");
          this.reloadAll();
        },
        error => {
          this.toast.error("Errore nel reset degli schieramenti");
        })
    }
  }

  reloadAll() {
    this.containerService.getAllLegheConfig().subscribe(leghe => {
      this.leghe = leghe;
    })
    this.schieramentoService.count().subscribe(value => {
      this.schieramentiValue = value;
    });
    this.configService.getConfig().subscribe(value => {
      this.actualDate = value.schieramentoEnd;
    })
  }

  saveLega(l) {
    this.containerService.updateLega(l).subscribe(value => {
      this.toast.success("Lega aggiornata con successo");
    });
  }
}
