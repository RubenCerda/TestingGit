import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { subscribeOn } from 'rxjs/operators';
import { User } from '../_modules/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {}
  

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
    
  }

  login(){
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

  logout(){
    this.accountService.logout();
  }

}
