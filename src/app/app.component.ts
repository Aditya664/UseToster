import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UseToster';
  constructor(private service:NotificationService){}

  showSuccess(){
    this.service.showSuccess();
  }

  showError(){
    this.service.showError();
  }

 
}
