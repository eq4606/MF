import { Injectable } from '@angular/core';
import { User, UserRole } from '../models/user.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    new User('1', 'פלוני אלמוני', '123@example.com', 'manager'),
    new User('2', 'שלום כהן', 'sh@example.com', 'guest'),
  ];

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  getUserById(id: string): Observable<User | undefined> {
    return of(this.users.find((user) => user.id === id));
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  updateUser(updatedUser: User): void {
    const index = this.users.findIndex((user) => user.id === updatedUser.id);
    if (index !== -1) {
      this.users[index] = updatedUser;
    }
  }

  deleteUser(id: string): void {
    this.users = this.users.filter((user) => user.id !== id);
  }
}