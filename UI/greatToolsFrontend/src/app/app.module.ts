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

@NgModule({
  declarations: [
    AppComponent,
    CongratulatoryComponent,
    OpenMultipleComponent,
    TagExtractorComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
