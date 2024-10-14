import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';


@Component({
    selector: 'app-home',
    standalone: true,
    imports: [MatSidenavModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})


export class HomeComponent {

}
