import { Component, OnInit } from '@angular/core';
import { PensionDisbursementService } from 'src/services/pension-disbursement.service';



@Component({
  selector: 'app-ddashboard',
  templateUrl: './ddashboard.component.html',
  styleUrls: ['./ddashboard.component.css']
})
export class DdashboardComponent implements OnInit {
  pensionerDetails: any;
  bankName = '';
  //bankServiceCharge :any
  ProcessPensionInput={
    aadhaarNumber :'', 
    pensionAmount:'',
    bankServiceCharge:''
  }
  //ProcessCode : any
  constructor(private pension_disbursement:PensionDisbursementService) {
   }

  ngOnInit(): void {
    this.pensionerDetails=this.pension_disbursement.getPensionerDetails();
    this.ProcessPensionInput.aadhaarNumber=this.pensionerDetails.aadhaarNumber;
    this.ProcessPensionInput.pensionAmount=this.pensionerDetails.pensionAmount;
    this.ProcessPensionInput.bankServiceCharge=this.pensionerDetails.bankServiceCharge;
    this.bankName=this.pensionerDetails.bankName;
  }
  /*
  onProcessPension(){
    console.log("ProcessPension",this.ProcessPensionInput);
    this.pension_disbursement.processPension(this.ProcessPensionInput).subscribe(
      processCode=>{console.log(processCode);
        this.ProcessCode=processCode;
      },
      error=>{console.log(error);
      }
    );
  }
  ongetBankServiceCharge(){
    console.log("BankServiceCharge",this.bankName);
    this.pension_disbursement.getBankServiceCharge(this.bankName).subscribe(
      bankServiceCharge=>{console.log(bankServiceCharge);
        this.bankServiceCharge=bankServiceCharge;
      },
      error=>{console.log(error);
      }
    );
  }
  */

}
