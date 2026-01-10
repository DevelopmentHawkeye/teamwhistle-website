import { Component, AfterViewInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import * as feather from 'feather-icons';
import { siDiscord } from 'simple-icons/icons';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'teamwhistle-website';
  
  discordIcon: SafeHtml;
  constructor(private sanitizer: DomSanitizer, private translate: TranslateService) {
    this.discordIcon = this.sanitizer.bypassSecurityTrustHtml(
      siDiscord.svg
    );
    translate.setFallbackLang('en');
    const browserLang = this.translate.getBrowserLang();
    if (localStorage.getItem('language')) {
      this.translate.use(localStorage.getItem('language')!);
    } else {
      this.translate.use(browserLang!.match(/en|nl/) ? browserLang! : 'en');
    }
  }
  ngAfterViewInit(): void {
    feather.replace();
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('language', lang);
  }
}
