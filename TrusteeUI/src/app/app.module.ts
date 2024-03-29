import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiModule } from './api/api.module';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { BasicAuthInterceptor } from './helpers/basic-auth.interceptor';
import { SimpleConfirmationDialogComponent } from './tools/dialogs/simple-confirmation-dialog/simple-confirmation-dialog.component';
import { ToolsModule } from './tools/tools.module';

@NgModule({
  declarations: [
    AppComponent,
    SimpleConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApiModule.forRoot({ rootUrl: environment.apiUrl}),
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    MatIconModule,
    ToolsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
