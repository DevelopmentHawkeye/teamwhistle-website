import { Routes } from '@angular/router';

import { PrivacyComponent } from './privacy/privacy.component';
import { HomeComponent } from './home/home.component';
import { GuideComponent } from './guide/guide.component';
export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'guide', component: GuideComponent},
    {path: 'privacy', component: PrivacyComponent},
];
