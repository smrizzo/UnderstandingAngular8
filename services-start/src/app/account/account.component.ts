import { Component, Input } from '@angular/core';
import { LoggingService } from '../_services/logging.service';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService,
    private accountService: AccountService) {}

  onSetTo(status: string) {
    this.accountService.updateAccount(this.id, status);
    // this.loggingService.logStatusChange(status);
    this.accountService.statusUpdate.emit(status);
  }
}
