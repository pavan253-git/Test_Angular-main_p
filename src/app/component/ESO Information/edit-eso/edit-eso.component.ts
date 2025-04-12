import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-edit-eso',
  templateUrl: './edit-eso.component.html',
  styleUrls: ['./edit-eso.component.css']
})
export class EditEsoComponent {
eso: any;
  esoNumbers: any[]=[];
  showError: boolean = false;
  esoData: any[]=[];

constructor(private apiService: ApiService, private router: Router){}


viewESO() {
  if(this.esoData.includes(this.eso)){
  this.apiService.eso = this.eso
  this.router.navigate(["/view-eso"])
  }
  else {
    this.showError = true
  }
}

editESO(){
  if(this.esoData.includes(this.eso)){
  this.apiService.eso = this.eso
  this.router.navigate(["/edit-eso"])
  }
  else {
    this.showError = true
  }
}

onESOChange(esoId: any) {
  this.apiService.esoNumbersApiData(esoId).subscribe((res)=>{
    this.esoNumbers = res
    this.esoData = res
  })
}

selectEso(esoId:any){
 this.eso = esoId
 this.esoNumbers=[]
}
}
