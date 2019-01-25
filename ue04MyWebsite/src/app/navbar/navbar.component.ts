import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

    constructor (private router: Router) {

    }

    public isCollapsed = true;

    public ngOnInit () {
        this.router.events.subscribe( (evt) => {
            if (evt instanceof NavigationStart) {
                this.isCollapsed = true;
            }
        });
    }
}
