import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    /** Hamburger menu displayer */
    sidebar: boolean = false;

    /** Method to activating / deactivating hamburger menu */
    changeSidebar() {
        this.sidebar = !this.sidebar;
    }
}
