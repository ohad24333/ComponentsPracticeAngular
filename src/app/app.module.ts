import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainTitleComponent } from './main-title/main-title.component';
import { PostBodyComponent } from './post-body/post-body.component';
import { ImgComponent } from './img/img.component';

@NgModule({
  declarations: [
    AppComponent,
    MainTitleComponent,
    PostBodyComponent,
    ImgComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
