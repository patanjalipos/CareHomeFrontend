import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        // this.model = [
        //     {
        //         label: 'Home',
        //         items: [
        //             { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
        //         ]
        //     },
        //     {
        //         label: 'UI Components',
        //         items: [
        //             { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
        //             { label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
        //             { label: 'Float Label', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel'] },
        //             { label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/uikit/invalidstate'] },
        //             { label: 'Button', icon: 'pi pi-fw pi-box', routerLink: ['/uikit/button'] },
        //             { label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table'] },
        //             { label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list'] },
        //             { label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree'] },
        //             { label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel'] },
        //             { label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay'] },
        //             { label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media'] },
        //             { label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu'], routerLinkActiveOptions: { paths: 'subset', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' } },
        //             { label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message'] },
        //             { label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file'] },
        //             { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts'] },
        //             { label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/misc'] }
        //         ]
        //     },
        //     {
        //         label: 'Prime Blocks',
        //         items: [
        //             { label: 'Free Blocks', icon: 'pi pi-fw pi-eye', routerLink: ['/blocks'], badge: 'NEW' },
        //             { label: 'All Blocks', icon: 'pi pi-fw pi-globe', url: ['https://www.primefaces.org/primeblocks-ng'], target: '_blank' },
        //         ]
        //     },
        //     {
        //         label: 'Utilities',
        //         items: [
        //             { label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', routerLink: ['/utilities/icons'] },
        //             { label: 'PrimeFlex', icon: 'pi pi-fw pi-desktop', url: ['https://www.primefaces.org/primeflex/'], target: '_blank' },
        //         ]
        //     },
        //     {
        //         label: 'Pages',
        //         icon: 'pi pi-fw pi-briefcase',
        //         items: [
        //             {
        //                 label: 'Landing',
        //                 icon: 'pi pi-fw pi-globe',
        //                 routerLink: ['/landing']
        //             },
        //             {
        //                 label: 'Auth',
        //                 icon: 'pi pi-fw pi-user',
        //                 items: [
        //                     {
        //                         label: 'Login',
        //                         icon: 'pi pi-fw pi-sign-in',
        //                         routerLink: ['/auth/login']
        //                     },
        //                     {
        //                         label: 'Error',
        //                         icon: 'pi pi-fw pi-times-circle',
        //                         routerLink: ['/auth/error']
        //                     },
        //                     {
        //                         label: 'Access Denied',
        //                         icon: 'pi pi-fw pi-lock',
        //                         routerLink: ['/auth/access']
        //                     }
        //                 ]
        //             },
        //             {
        //                 label: 'Crud',
        //                 icon: 'pi pi-fw pi-pencil',
        //                 routerLink: ['/pages/crud']
        //             },
        //             {
        //                 label: 'Timeline',
        //                 icon: 'pi pi-fw pi-calendar',
        //                 routerLink: ['/pages/timeline']
        //             },
        //             {
        //                 label: 'Not Found',
        //                 icon: 'pi pi-fw pi-exclamation-circle',
        //                 routerLink: ['/notfound']
        //             },
        //             {
        //                 label: 'Empty',
        //                 icon: 'pi pi-fw pi-circle-off',
        //                 routerLink: ['/pages/empty']
        //             },
        //         ]
        //     },
        //     {
        //         label: 'Hierarchy',
        //         items: [
        //             {
        //                 label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
        //                 items: [
        //                     {
        //                         label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
        //                         items: [
        //                             { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
        //                             { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
        //                             { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
        //                         ]
        //                     },
        //                     {
        //                         label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
        //                         items: [
        //                             { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }
        //                         ]
        //                     },
        //                 ]
        //             },
        //             {
        //                 label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
        //                 items: [
        //                     {
        //                         label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
        //                         items: [
        //                             { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
        //                             { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
        //                         ]
        //                     },
        //                     {
        //                         label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
        //                         items: [
        //                             { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
        //                         ]
        //                     },
        //                 ]
        //             }
        //         ]
        //     },
        //     {
        //         label: 'Get Started',
        //         items: [
        //             {
        //                 label: 'Documentation', icon: 'pi pi-fw pi-question', routerLink: ['/documentation']
        //             },
        //             {
        //                 label: 'View Source', icon: 'pi pi-fw pi-search', url: ['https://github.com/primefaces/sakai-ng'], target: '_blank'
        //             }
        //         ]
        //     }
        // ];
        this.model = [
            {
                label: 'Care Home',
                items: [
                    { label: 'Dashboard', icon: 'fa-solid fa-house', routerLink: ['/uicare'] },
                    {
                        label: 'Master', icon: 'fa-solid fa-key',
                        items: [
                            {
                                label: 'Menu Master', icon: 'fa-solid fa-bars',routerLink: ['/master/menu-master'],queryParams:[]
                            },
                            {
                                label: 'User Master', icon: 'fa-solid fa-user',routerLink: ['/master/user-master'],queryParams:[]
                            },
                            {
                                label: 'Resident Master', icon: 'fa-solid fa-user',routerLink: ['/master/resident-master'],queryParams:[]
                            }
                        ]
                    },
                    { label: 'Resident List', icon: 'fa-solid fa-list', routerLink: ['/uicare/residentlist'] },
                    {
                        label: 'Personal Details', icon: 'fa-solid fa-user',
                        items: [
                            {
                                label: 'Care Passport', icon: 'fa-solid fa-address-card',routerLink: ['/uicare/residentprofile'],queryParams:[encodeURIComponent('&title=Personal Details&seq=1&rId=OMR45345&tabid=1')]
                            },
                            {
                                label: 'Final Wishes', icon: 'fa-solid fa-cross',routerLink: ['/uicare/residentprofile'],queryParams:[encodeURIComponent('&title=Personal Details&seq=1&rId=OMR45345&tabid=2')]
                            },
                            {
                                label: 'DNACPR', icon: 'fa-solid fa-heart-pulse',routerLink: ['/uicare/residentprofile'],queryParams:[encodeURIComponent('&title=Personal Details&seq=1&rId=OMR45345&tabid=3')]
                            },
                            {
                                label: 'Daily Assessment', icon: 'fa-regular fa-pen-to-square',routerLink: ['/uicare/residentprofile'],queryParams:[encodeURIComponent('&title=Personal Details&seq=1&rId=OMR45345&tabid=4')]
                            },
                            {
                                label: 'Daily Report', icon: 'fa-solid fa-chart-simple',routerLink: ['/uicare/residentprofile'],queryParams:[encodeURIComponent('&title=Personal Details&seq=1&rId=OMR45345&tabid=5')]
                            }
                        ]
                    },
                    { label: 'Clinical', icon: 'fa-solid fa-stethoscope', routerLink: ['/clinical'] },
                    { label: 'Contacts', icon: 'fa-solid fa-address-card', routerLink: ['/contacts'] },
                    { label: 'Body Map', icon: 'fa-sharp fa-solid fa-file-waveform', routerLink: ['/uicare/residentprofile'],queryParams:[encodeURIComponent('&title=Body Map&seq=2&rId=OMR45345')] },
                    { label: 'Fluid Assessment', icon: 'fa-solid fa-glass-water', routerLink: ['/uicare/residentprofile'],queryParams:[encodeURIComponent('&title=Fluid Assessment&seq=3&rId=OMR45345')] },
                    { label: 'Task Planner', icon: 'fa-solid fa-list-check', routerLink: ['/uicare/residentprofile'],queryParams:[encodeURIComponent('&title=Task Planner&seq=4&rId=OMR45345')] },
                    { label: 'Pain Assessment', icon: 'fa-solid fa-notes-medical', routerLink: ['/uicare/residentprofile'],queryParams:[encodeURIComponent('&title=Pain Assessment&seq=5&rId=OMR45345')] },
                    { label: 'Diet Planner', icon: 'fa-solid fa-bowl-rice', routerLink: ['/uicare/residentprofile'],queryParams:[encodeURIComponent('&title=Diet Planner&seq=6&rId=OMR45345')] },
                    { label: 'Fall Risk Assessment', icon: 'fa-solid fa-person-falling-burst', routerLink: ['/uicare/residentprofile'],queryParams:[encodeURIComponent('&title=Fall Risk Assessment&seq=7&rId=OMR45345')] },
                    { label: 'Fall Risk Report', icon: 'fa-solid fa-list', routerLink: ['/uicare/fallriskassessmentreport'] },
                    
                ]
            },
        ]
    }
}
