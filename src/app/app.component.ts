import { Component, AfterViewInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import * as feather from 'feather-icons';
import { siDiscord } from 'simple-icons/icons';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'teamwhistle-website';
  
  discordIcon: SafeHtml;
  constructor(private sanitizer: DomSanitizer) {
    this.discordIcon = this.sanitizer.bypassSecurityTrustHtml(
      siDiscord.svg
    );
  }
  ngAfterViewInit(): void {
    feather.replace();
  }
}
