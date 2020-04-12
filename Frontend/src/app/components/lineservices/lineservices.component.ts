import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Utils } from '../../Utils/Utils.class';
import { ContractService } from '../../services/contract.service';

@Component({
  selector: 'app-lineservices',
  templateUrl: './lineservices.component.html',
  styleUrls: ['./lineservices.component.css']
})
export class LineservicesComponent implements OnInit {

  public title:string;
  public loading:boolean;
  public utils:Utils;
  public contractData:any;
  public document:string;
  public contracts:string[];
  public form: FormGroup;
  public contractsModify:string[];
  public enabledBtnSave = false;

  constructor(private activatedRoute:ActivatedRoute, private authService: AuthService, private contractService: ContractService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loading = false;
    this.utils = new Utils();
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

        // Get the contracts by all or URL phone
        let phone:string;
        this.activatedRoute.params.subscribe(params => {
          phone = params['phone'];
        });
        this.contractData = this.utils.getContractsByPhone(data.result, phone);
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
        this.getContractByDocument(this.document);
        this.enabledBtnSave = true;
        this.loading = false;
      },
      error => {
        console.log(error);
        this.loading = false;
      }
    );

  }

}