import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  model : any = {}

  constructor(private toastr : ToastrService){ }
  
  ngOnInit(): void {
   
  }

  register(){
    console.log(this.model);
  }

  cancel(){
    console.log("cancelled")
  }
    
}
