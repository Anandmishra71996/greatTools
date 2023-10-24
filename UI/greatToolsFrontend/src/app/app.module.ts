import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CoreModule } from './modules/core/core/core.module';
import { CongratulatoryComponent } from './modules/core/components/congratulatory/congratulatory.component';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { OpenMultipleComponent } from './modules/core/components/open-multiple/open-multiple.component';
import { TagExtractorComponent } from './modules/core/components/tag-extractor/tag-extractor.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DiwaliComponent } from './modules/core/components/congratulatory/diwali/diwali.component';

@NgModule({
  declarations: [
    AppComponent,
    CongratulatoryComponent,
    OpenMultipleComponent,
    TagExtractorComponent,
    DiwaliComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
