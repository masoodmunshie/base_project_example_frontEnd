import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { request } from 'src/app/models/request.model';
import { role_list } from 'src/app/models/role.model';
import { userManagementService } from 'src/app/services/userManagement.service';
import { ToastrService } from 'ngx-toastr';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})

export class RolesComponent implements OnInit {
  @ViewChild('agGrid', { static: false }) agGrid: AgGridAngular;

  title = 'app';


  columnDefs = [
    { headerName: 'id', field: 'role.id', sortable: true, filter: true, checkboxSelection: true },
    { headerName: 'name', field: 'role.name', sortable: true, filter: true }
    // {headerName: 'Price', field: 'price', sortable: true, filter : true }
  ];

  rowData: any
  gridRequest: request = {
    page_no: 1,
    page_size: 10,
    search_text: "",
    order: ""
  };

  rolesData: role_list;


  constructor(private http: HttpClient, public userService: userManagementService, private toastre: ToastrService) { }

  ngOnInit() {


    this.getRoles();
  }

  getRoles(){

    this.userService.getRoles(this.gridRequest).subscribe
    (res => {

      this.rolesData = res as role_list;
      this.rowData = this.rolesData.roles;
      console.log(res);

    },
    err =>{

      console.log(err);

    })
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    const selectedDataStringPresentation = selectedData.map(node => node.role.id + ' ' + node.role.name).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }



}
