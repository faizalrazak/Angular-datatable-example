import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subscription } from 'rxjs/Subscription';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
  selector: 'app-jquery-datatable',
  templateUrl: './jquery-datatable.component.html',
  styleUrls: ['./jquery-datatable.component.css']
})
export class JqueryDatatableComponent implements OnInit {

  clients:any
  dataTable: any;

  constructor(
    private http:HttpClient,
    private chRef: ChangeDetectorRef
  ) { }

  // ngOnInit() {

  //   this.http.get('https://5a5a9e00bc6e340012a03796.mockapi.io/clients')
  //     .subscribe((data: any[]) => this.clients = data);

  //     this.chRef.detectChanges();
  //     console.log("here")
  //     const table: any = $('table');
  //     this.dataTable = table.DataTable();
  // }

  ngOnInit(){
    this.http.get('https://5a5a9e00bc6e340012a03796.mockapi.io/clients')
      .subscribe((data: any[]) => {
        this.clients = data;

        // You'll have to wait that changeDetection occurs and projects data into
        // the HTML template, you can ask Angular to that for you ;-)
        this.chRef.detectChanges();

        // Now you can use jQuery DataTables :
        const table: any = $('table');
        this.dataTable = table.DataTable();
        console.log(this.dataTable)
      });
  }

}
