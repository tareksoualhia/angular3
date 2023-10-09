import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  id!: number;
  active!: boolean;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  
    this.route.queryParams.subscribe(params => {
      this.id = +params['id']; 
      this.active = params['active'] === 'true'; 
    });
  }

  goToMainInvoice() {
 
    this.router.navigate(['/main-invoice']);
  }
}
