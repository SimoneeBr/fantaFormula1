import {Component, OnInit} from '@angular/core';
import {SchieramentoService} from "../../service/schieramento.service";
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-table-schieramento',
  templateUrl: './table-schieramento.component.html',
  styleUrls: ['./table-schieramento.component.scss']
})
export class TableSchieramentoComponent implements OnInit {

  table_header: string[] = [
    'Data',
    'email',
    'driver',
    'squadra',
    'category',
    'motor',
    'PIL1',
    'PIL2',
    'PIL3',
    'costruttori',
    'pitstop',
    'q1',
    'q2',
    'q3',
    'q4',
    'q5',
    'p1',
    'p2',
    'p3',
    'p4',
    'p5',
    'p6',
    'p7',
    'p8',
    'p9',
    'p10',
    'primo Ritirato',
    'numero Ritirati',
    'tempo pole',
    'giro veloce',
    'autore giro veloce',
    'safetyCar'
  ]

  dataSource: any[] = [];

  constructor(private schieramentoService: SchieramentoService) {
  }

  ngOnInit(): void {
    this.schieramentoService.getAll().subscribe((data) => {
      console.log(data);
      this.dataSource = data;
    });
  }

  /*name of the excel-file which will be downloaded. */
  fileName= 'ExcelSheet.xlsx';

  downloadXlsx(): void
  {
    /* table id is passed over here */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }

}
