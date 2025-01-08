import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './users/user-list/user-list.component';
import { AssetListComponent } from './assets/asset-list/asset-list.component';

@Component({
  selector: 'app-root',
  imports: [UserListComponent, AssetListComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'client';
}
