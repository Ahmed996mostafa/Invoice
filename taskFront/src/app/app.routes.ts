import { Routes } from '@angular/router';
import { HmeComponent } from './compoents/hme/home.component';
import { InvoicedetailsComponent } from './compoents/invoicedetails/invoicedetails.component';
import { AddInoviceComponent } from './component/add-inovice/add-inovice.component';

export const routes: Routes = [{
  path: 'home',component:HmeComponent}
  ,{path:'invoiceDetails/:id',component:InvoicedetailsComponent},
  {path:'invoice/AddInvoice',component:AddInoviceComponent}
];
