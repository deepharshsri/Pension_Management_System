import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PensionDisbursementService {

  pension_disbursement_URL="http://localhost:9091"
  constructor(private http:HttpClient) { }
  processPension(ProcessPensionInput : any){
    return this.http.post(`${this.pension_disbursement_URL}/DisbursePension`,ProcessPensionInput);
  }
  getBankServiceCharge(bankName : string){
    return this.http.post(`${this.pension_disbursement_URL}/getServiceCharge`,bankName);
  }
  pensionerDetails:any
  setPensionerDetails(pensionDetail:any){
    this.pensionerDetails=pensionDetail;
    console.log("value set=>",this.pensionerDetails);
  }
  getPensionerDetails(){
    console.log("setted value=>",this.pensionerDetails);
    return this.pensionerDetails;
  }
}
