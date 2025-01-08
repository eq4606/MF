import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User, UserRole } from '../../models/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent {
  @Input() user: User = new User('', '', '', 'guest');
  @Output() save = new EventEmitter<User>();

  roles: UserRole[] = ['manager', 'guest'];

  onSubmit(): void {
    this.save.emit(this.user);
  }
}