import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './ui/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    //{ path: '', loadChildren: () => import('./ui/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    // { path: 'uikit', loadChildren: () => import('./ui/components/uikit/uikit.module').then(m => m.UIkitModule) },
                    // { path: 'utilities', loadChildren: () => import('./ui/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    // { path: 'documentation', loadChildren: () => import('./ui/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    // { path: 'blocks', loadChildren: () => import('./ui/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                    // { path: 'pages', loadChildren: () => import('./ui/components/pages/pages.module').then(m => m.PagesModule) },
                    { path: 'uicare', loadChildren: () => import('./ui/components/uicare/uicare.module').then(m => m.UicareModule) },
                    { path: 'clinical', loadChildren: () => import('./ui/components/clinical/clinical.module').then(m => m.ClinicalModule) },
                    { path: 'contacts', loadChildren: () => import('./ui/components/contacts/contacts.module').then(m => m.ContactsModule) },
                    { path: 'master', loadChildren: () => import('./ui/components/master/master.module').then(m => m.MasterModule) },
                ]
            },
            { path: 'auth', loadChildren: () => import('./ui/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'landing', loadChildren: () => import('./ui/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
