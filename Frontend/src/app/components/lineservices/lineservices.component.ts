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
  public active:string[];

  constructor(private activatedRoute:ActivatedRoute, private authService: AuthService, private contractService: ContractService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loading = false;

    this.form = this.fb.group({
      name: this.fb.array([])
    });
    this.document = this.authService.getCurrentUser().document;
    this.getContractByDocument(this.document);
  }

  onChange(name: string, isChecked: any) {
    let services = (this.form.controls.name as FormArray);
    let index = services.controls.findIndex(x => x.value === name + "_A" || x.value === name + "_D");
    if(index > -1)
      services.removeAt(index);
    services.push(new FormControl(name + (isChecked ? "_A" : "_D")));
    console.log(services);
  }

  submit() {
    this.active = this.form.value.name;
    console.log(this.active);
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

}