import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DetailsService } from '../../services/details.service';
import { Unit } from '../../models/Unit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-inovice',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './add-inovice.component.html',
  styleUrl: './add-inovice.component.css'
})
export class AddInoviceComponent {
  UnitNo:Number[]=[]

  UnitName:string[]=[]

  registerForm: FormGroup = new FormGroup({
  expireDate: new FormControl(null, [Validators.required, Validators.maxLength(40)]),
  linenumber: new FormControl(null, [Validators.required]),
  price: new FormControl(null, [Validators.required, Validators.maxLength(20)]),
  productName: new FormControl(null, [Validators.required, Validators.maxLength(20)]),
  quantity: new FormControl(null, [Validators.required, Validators.email]),
  unitName: new FormControl(null, [Validators.required, Validators.maxLength(10)]),
  unitno: new FormControl(null, [Validators.required, Validators.maxLength(30)]),
});

constructor(private detailsServ: DetailsService) {}
units:Unit[]=[]
selecteditem = '';
ngOnInit(): void {


   this.detailsServ.getallUnitNO().subscribe((data) => {
     console.log(data);
     this.units=data as Unit[];
     this.UnitNo = this.units.map((ele) => ele.unitNO);
      this.UnitName = this.units.map((ele) => ele.unitName ?? '');
      console.log(this.UnitNo);
      console.log(this.UnitName);
   });



 }

save(){
 this.detailsServ.Addinvoice(this.registerForm.value).subscribe((data) => {
   console.log(data);
   //this.router.navigate(['/invoicedetails'])
 })
}


onSelected(value:string): void {
  this.selecteditem = value;
  console.log(this.selecteditem)
  const unit = this.units.find(u => u.unitNO === +this.selecteditem)?.unitName;
  this.registerForm.get('unitName')?.setValue(unit);
}
}
