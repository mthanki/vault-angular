import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { DataService } from 'src/app/http/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isOnline: boolean = true;

  constructor(
    public authService: AuthService,
    private router: Router,
    private dataService: DataService) {
      this.dataService.createOnline$().subscribe(isOnline => this.isOnline = isOnline);
     }

  ngOnInit(): void {
    
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
