import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { ContractService } from '../../services/contract.service';

@Component({
  selector: 'app-lineservices',
  templateUrl: './lineservices.component.html',
  styleUrls: ['./lineservices.component.css']
})
export class LineservicesComponent implements OnInit {

  public title:string;
  public loading:boolean;
  public contractData:any;
  public document:string;
  public lines:string[];
  public form: FormGroup;
  public contractsModify:string[];
  public enabledBtnSave = false;

  constructor(private activatedRoute:ActivatedRoute, private authService: AuthService, private contractService: ContractService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loading = false;

    this.contractsModify = new Array();

    this.form = this.fb.group({
      name: this.fb.array([])
    });
    this.document = this.authService.getCurrentUser().document;
    this.getContractByDocument(this.document);
  }

  onChange(name: string, isChecked: any) {
    let services = (this.form.controls.name as FormArray);
    let index = services.controls.findIndex(
      x => x.value === name + ";A" || 
      x.value === name + ";D");
    if(index > -1)
      services.removeAt(index);
    services.push(new FormControl(name + (isChecked ? ";A" : ";D")));
    
    if(services.controls.length > 0)
      this.enabledBtnSave = true;
  }

  submit() {
    this.contractsModify = this.form.value.name;
    if(this.contractsModify.length > 0)
      this.modifyContracts();
    else
      console.log("ko");
  }

  getContractByDocument(document:string) {
    this.loading = true;
    return this.contractService
    .getContractByDocumentSrv(document)
    .subscribe(
      data => {
        this.loading = false;
        this.contractData = data.result;
        let line:string;
        this.activatedRoute.params.subscribe(params => {
          line = params['line'];
        });
        let lines = new Array();
        this.contractData.contractLines.forEach(function (param) {
          if(line && param.phone == line) {
            lines.push(param);
          } else if(!line) {
            lines.push(param);
          }
        });
        this.lines = lines;
      },
      error => {
        console.log(error);
        this.loading = false;
      }
    );
  }

  modifyContracts() {
    this.loading = true;

    return this.contractService
    .modifyContracts(this.contractsModify)
    .subscribe(
      data => {
        this.enabledBtnSave = true;
        location.reload();
      },
      error => {
        console.log(error);
        this.loading = false;
      }
    );

  }

}