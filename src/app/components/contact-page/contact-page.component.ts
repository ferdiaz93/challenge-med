import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  name:string = "";
  email:string = "";
  consult:string = "";

  constructor(private apiService:ApiService) { }
  ngOnInit(): void {
  }

  onClickSubmit(){
    console.log(this.name)
    console.log(this.email)
    console.log(this.consult)
    let data = {
      name: this.name,
      email: this.email,
      consult: this.consult
    }
    this.apiService.post(data).subscribe(data => {
      console.log(data, "test")
    }, err => {
      document.location.href = `mailto:${data.email}?body=${data.consult}`
      console.log(err, "test")
    })
  }

  invalidForm(){
    return (!this.name || !this.email || !this.consult);
  }

}
