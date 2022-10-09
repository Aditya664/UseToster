import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr:ToastrService){}

  showSuccess() {
    this.toastr.success('Success', 'Happy now?', {
      timeOut: 1000,
      positionClass: 'toast-bottom-right',
      progressBar : true
    });
  }
  showError() {
    this.toastr.error('Error', 'Sad now?', {
      timeOut: 1000,
      positionClass: 'toast-bottom-right',
      progressBar : true
    });
  }
}
