import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/product.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-admin-dashboard',
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
    pieData: any;
    pieOptions: any;

    barData: any;
    barData2: any;
    barOptions: any;

    items!: MenuItem[];

    products!: Product[];

    chartData: any;

    chartOptions: any;

    subscription!: Subscription;

    constructor(private productService: ProductService, public layoutService: LayoutService) {
        this.subscription = this.layoutService.configUpdate$.subscribe(() => {
            this.initChart();
        });
    }

    ngOnInit() {
        this.initChart();
        this.productService.getProductsSmall().then(data => this.products = data);

        this.items = [
            { label: 'Add New', icon: 'pi pi-fw pi-plus' },
            { label: 'Remove', icon: 'pi pi-fw pi-minus' }
        ];
    }

    initChart() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.chartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--bluegray-700'),
                    borderColor: documentStyle.getPropertyValue('--bluegray-700'),
                    tension: .4
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--green-600'),
                    borderColor: documentStyle.getPropertyValue('--green-600'),
                    tension: .4
                }
            ]
        };

        this.chartOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
        this.pieData = {
            labels: ['Diabetes', 'Hypothyroidism', 'Arthritis', 'Heart Disease',
                'Asthma'],
            datasets: [
                {
                    data: [540, 325, 702, 450, 312],
                    // backgroundColor: [
                    //     documentStyle.getPropertyValue('--indigo-500'),
                    //     documentStyle.getPropertyValue('--purple-500'),
                    //     documentStyle.getPropertyValue('--teal-500'),
                    //     documentStyle.getPropertyValue('--green-500'),
                    //     documentStyle.getPropertyValue('--blue-500')
                    // ],
                    // hoverBackgroundColor: [
                    //     documentStyle.getPropertyValue('--indigo-400'),
                    //     documentStyle.getPropertyValue('--purple-400'),
                    //     documentStyle.getPropertyValue('--teal-400'),
                    //     documentStyle.getPropertyValue('--green-400'),
                    //     documentStyle.getPropertyValue('--blue-400')
                    // ],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--slice-one'),
                        documentStyle.getPropertyValue('--slice-two'),
                        documentStyle.getPropertyValue('--slice-three'),
                        documentStyle.getPropertyValue('--slice-four'),
                        documentStyle.getPropertyValue('--slice-five')
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--slice-one'),
                        documentStyle.getPropertyValue('--slice-two'),
                        documentStyle.getPropertyValue('--slice-three'),
                        documentStyle.getPropertyValue('--slice-four'),
                        documentStyle.getPropertyValue('--slice-five')
                    ]
                }]
        };

        this.pieOptions = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true,
                        color: textColor
                    }
                }
            }
        };

        this.barData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
                {
                    label: 'Revenue',
                    backgroundColor: documentStyle.getPropertyValue('--bar-color'),
                    borderColor: documentStyle.getPropertyValue('--bar-color'),
                    data: [103200, 744336, 354336, 284336, 324336, 304336, 294336, 254336, 484336, 444336, 434336, 344336]
                }
            ]
        };

        this.barData2 = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
                {
                    label: 'Male',
                    backgroundColor: documentStyle.getPropertyValue('--Gender-color'),
                    borderColor: documentStyle.getPropertyValue('--Gender-color'),
                    data: [650, 712, 782, 815, 656, 712, 455, 745, 824, 689, 666, 476]
                },
                {
                    label: 'Female',
                    backgroundColor: documentStyle.getPropertyValue('--primary-200'),
                    borderColor: documentStyle.getPropertyValue('--primary-200'),
                    data: [550, 642, 692, 735, 556, 652, 635, 545, 624, 589, 566, 496]
                }
            ]
        };

        this.barOptions = {
            plugins: {
                legend: {
                    labels: {
                        fontColor: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
            }
        };
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

}
