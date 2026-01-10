import { Routes } from '@angular/router';

import { PrivacyComponent } from './privacy/privacy.component';
import { HomeComponent } from './home/home.component';
import { DocsComponent } from './docs/docs.component';
import { ContactComponent } from './contact/contact.component';
import { QnaComponent } from './qna/qna.component';
export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'docs', component: DocsComponent},
    {path: 'qna', component: QnaComponent},
    {path: 'privacy', component: PrivacyComponent},
    {path: 'contact', component: ContactComponent},
];
