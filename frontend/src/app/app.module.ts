import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { DdashboardComponent } from './ddashboard/ddashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthGuard } from 'src/services/auth.guard';
import { AuthorizationService } from 'src/services/authorization.service';
import { AuthInterceptor } from 'src/services/auth.interceptor';
import { ProcessPensionComponent } from './process-pension/process-pension.component';
import { PensionerDetailComponent } from './pensioner-detail/pensioner-detail.component';
import { PensionDisbursementService } from 'src/services/pension-disbursement.service';
import { ProcessPensionService } from 'src/services/process-pension.service';
import { PensionerDetailService } from 'src/services/pensioner-detail.service';


@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    DdashboardComponent,
    ProcessPensionComponent,
    PensionerDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    HttpClientModule,
  ],
  providers: [AuthGuard,AuthorizationService,PensionDisbursementService,ProcessPensionService,PensionerDetailService, [{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}] ],
  bootstrap: [AppComponent]
})
export class AppModule { }
