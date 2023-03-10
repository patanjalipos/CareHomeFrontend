import { CareService } from './ui/service/CareServices';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './ui/components/notfound/notfound.component';
import { ProductService } from './ui/service/product.service';
import { CountryService } from './ui/service/country.service';
import { CustomerService } from './ui/service/customer.service';
import { EventService } from './ui/service/event.service';
import { IconService } from './ui/service/icon.service';
import { NodeService } from './ui/service/node.service';
import { PhotoService } from './ui/service/photo.service';
import { BlockUIModule } from 'ng-block-ui';
import { MessageService } from 'primeng/api';

@NgModule({
    declarations: [
        AppComponent, NotfoundComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        BlockUIModule.forRoot(),
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService,CareService,
        MessageService, 
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
