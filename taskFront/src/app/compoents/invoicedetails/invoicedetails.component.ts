import { Component, OnChanges, OnInit } from '@angular/core';
import { DetailsService } from '../../services/details.service';
import { InvenDetails } from '../../models/innoveDetails';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Unit } from '../../models/Unit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoicedetails',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './invoicedetails.component.html',
  styleUrls: ['./invoicedetails.component.css']
})
export class InvoicedetailsComponent implements OnInit ,OnChanges {

  ele: InvenDetails = {
    linenumber: 0,
    price: 0,
    productName: '',
    quantity: 0,
    unitName: '',
    unitno: 0,
    expireDate: new Date()
  };
  currentIndex:number=0

  units:Unit[]=[]
  UnitNo:Number[]=[]
  constructor(private detailsServ: DetailsService,private router:Router) {}
  Inovs:InvenDetails[]=[]
  currentID:number=0

   ngOnInit(): void {

   this.updateform(this.currentID)
    this.detailsServ.getallUnitNO().subscribe((data) => {
      console.log(data);
      this.units=data as Unit[];
      this.UnitNo=this.units.map((ele)=>{
        return ele.unitNO
      })
      console.log(this.UnitNo)
    });
  }

  ngOnChanges(): void {
  this.updateform(this.currentIndex)

  }

  updateform(NO:number){
    this.detailsServ.getAllinov().subscribe((data) => {
      console.log(data)
      this.Inovs=data as InvenDetails[]
    this.currentID  = this.Inovs[this.currentIndex].linenumber
    console.log(this.currentID)
    this.detailsServ.getElmentDetails(this.currentID).subscribe((data) => {
      console.log(data);
      this.ele = data as InvenDetails;
      console.log(this.ele);
    });
    })
  }

  next(){
    ++this.currentIndex
    console.log(this.currentIndex)
    this.updateform(this.currentIndex)
    if(this.currentIndex==this.Inovs.length-1){
      this.currentIndex=0
    }
  }


  save(){
    this.detailsServ.edit(this.ele.linenumber,this.ele).subscribe((data)=>{
      console.log(data)
    })
  }

  GotoAdd(){
 this.router.navigateByUrl('invoice/AddInvoice')
  }
}






//  registerForm: FormGroup = new FormGroup({
//   expireDate: new FormControl(null, [Validators.required, Validators.maxLength(40)]),
//   linenumber: new FormControl(null, [Validators.required]),
//   price: new FormControl(null, [Validators.required, Validators.maxLength(20)]),
//   productName: new FormControl(null, [Validators.required, Validators.maxLength(20)]),
//   quantity: new FormControl(null, [Validators.required, Validators.email]),
//   unitName: new FormControl(null, [Validators.required, Validators.maxLength(10)]),
//   unitno: new FormControl(null, [Validators.required, Validators.maxLength(30)]),
// });
