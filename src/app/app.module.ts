import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilesComponent } from './files/files.component';
import { FileComponent } from './file/file.component';

import { HttpClientModule } from '@angular/common/http';
import { FileContentComponent } from './file-content/file-content.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    FilesComponent,
    FileComponent,
    FileContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PdfViewerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
