import { Routes } from '@angular/router';

import { PrivacyComponent } from './privacy/privacy.component';
import { HomeComponent } from './home/home.component';
import { DocsComponent } from './docs/docs.component';
import { ContactComponent } from './contact/contact.component';
export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'docs', component: DocsComponent},
    {path: 'privacy', component: PrivacyComponent},
    {path: 'contact', component: ContactComponent},
];
