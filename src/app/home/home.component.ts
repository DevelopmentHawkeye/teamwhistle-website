import { Component } from '@angular/core';
import {TranslatePipe} from "@ngx-translate/core";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [TranslatePipe, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
