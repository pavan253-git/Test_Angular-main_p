import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-view-audit',
  templateUrl: './view-audit.component.html',
  styleUrls: ['./view-audit.component.css'],
})
export class ViewAuditComponent implements OnInit {
  auditDetails: any = [];
  auditSaved: any;

  constructor(private apiService: ApiService, private route:ActivatedRoute) {}

  ngOnInit() {
    this.viewAudit();
    this.route.params.subscribe(params =>{
      this.auditSaved = params['auditSaved']
    })
  }

  viewAudit() {
    this.apiService.viewAudit().subscribe((data) => {
      this.auditDetails = data;
    });
  }
}
