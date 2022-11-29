import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-us-publicdata',
  templateUrl: './us-publicdata.component.html',
  styleUrls: ['./us-publicdata.component.css']
})
export class UsPublicdataComponent {
  constructor(private api:ApiService){
    api.fetchUspublic().subscribe(
      (response)=>{
        this.data=response
      }
    )
  }
 data:any=[]
}
