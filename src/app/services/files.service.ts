import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  //pdfSrc = "http://localhost:5000/api/file/"/* 1310.4546.pdf" */
  private pdfSrc = new BehaviorSubject<string>("http://localhost:5000/api/file/1310.4546.pdf");
  currentPdfSrc = this.pdfSrc.asObservable();

  constructor(private http: HttpClient) { }

  getFiles() {
    return this.http.get("http://localhost:5000/api/files");
  }
  getFileContent() {
    return this.http.get("http://localhost:5000/api/file/1");
  }

  getTextContent() {
    return this.http.get("http://localhost:5000/api/text");
  }
  getRefsContent() {
    return this.http.get("http://localhost:5000/api/refs");
  }
  getFileByName(fileName: string) {
    this.pdfSrc.next("http://localhost:5000/api/file/" + fileName)
  }

}
