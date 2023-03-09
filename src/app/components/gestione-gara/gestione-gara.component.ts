import {Component, OnInit} from '@angular/core';
import {Gare} from "../../model/gare";
import {GareService} from "../../service/gare.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-gestione-gara',
  templateUrl: './gestione-gara.component.html',
  styleUrls: ['./gestione-gara.component.scss']
})
export class GestioneGaraComponent implements OnInit {
  gara: Gare = new Gare();
  submitted = false;

  gare: Observable<Gare[]>;



  constructor(private es: GareService, private router: Router) {
  }
  ngOnInit(): void {
    this.reload()
  }

  reload() {
   this.gare = this.es.getGareList();
   this.submitted = false;
  }

  deleteGara(id: string) {
    this.es.deleteGara(id).subscribe((a: any) => {
      this.reload();
    });
  }

  save() {
    console.log(this.gara);
    this.es.creaGara(this.gara).subscribe(() => {
      this.gara = new Gare();

    });
  }

    onSubmit() {
      this.reload();
      this.submitted = true;
      this.save();
      this.submitted = false;
      this.reload();
    }



}
