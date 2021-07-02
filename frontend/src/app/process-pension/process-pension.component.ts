import { Component, OnInit } from '@angular/core';
import { PensionDisbursementService } from 'src/services/pension-disbursement.service';
import { ProcessPensionService } from 'src/services/process-pension.service';


@Component({
  selector: 'app-process-pension',
  templateUrl: './process-pension.component.html',
  styleUrls: ['./process-pension.component.css']
})
export class ProcessPensionComponent implements OnInit {
  pensionerDetails: any;
 sucess_code:any;
  constructor(private ProcessPension:ProcessPensionService,private pension_disbursement:PensionDisbursementService) { }

  ngOnInit(): void {
    this.pensionerDetails=this.pension_disbursement.getPensionerDetails();
    this.ProcessPension.PensionDetails(this.pensionerDetails).subscribe(
      response=>{
        this.sucess_code=response;
        console.log(response);
      },
      error=>{
        console.log(error);
      }
    )
  }
  onSubmit(){
    this.ProcessPension.PensionDetails(this.pensionerDetails).subscribe(
      response=>{
        this.sucess_code=response;
        console.log(response);
      },
      error=>{
        console.log(error);
      }
    )
  }
}
