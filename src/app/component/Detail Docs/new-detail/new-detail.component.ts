import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-detail',
  templateUrl: './new-detail.component.html',
  styleUrls: ['./new-detail.component.css'],
  providers:[DatePipe]
})
export class NewDetailComponent {
  docNmbr: any;
  vendorName: any;
  docSubject: any;
  docType: any;
  revNmbr: any;
  subDesc: any;
  revDate: any;
  caseClass: any;
  mediaType: any;
  bin: any;
  remark: any;
  detailDocType: any;
  formattedDate: any;

  constructor(private apiService: ApiService, private http: HttpClient, private datePipe:DatePipe, private router:Router) {}

  ngOnInit(){
    this.docNmbr = this.apiService.viewDocId
    this.vendorName = this.apiService.vendorName
    this.docSubject = this.apiService.subject 
  }

  saveDetails() {
    if(this.formattedDate!==null && this.formattedDate!==undefined){
    this.formattedDate = this.datePipe.transform(this.revDate, 'MM/dd/yyyy HH:mm:ss')
    }
    else{
      this.formattedDate =''
    }
    const payload = {
      documentNbr: this.docNmbr,
      vendor: this.vendorName,
      subject: this.docSubject,
      detail: {
        doctype: this.docType,
        bin: this.bin,
        manualdate: this.formattedDate ?? '',
        remark: this.remark,
        detailSubjectDesc: this.subDesc,
        popClass: this.caseClass,
        revisionNbr: this.revNmbr,
        detailDocType: this.detailDocType,
        mediaTypes: this.mediaType,
        childRecords: false,
      },
    };
    this.apiService.saveNewDetail(payload).subscribe((res)=>{
      this.apiService.popno = res.detailResponse.detail.popno
      this.router.navigate(["/viewDetail", {detailSaved:true}])
    });
  }
}
