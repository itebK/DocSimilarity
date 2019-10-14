import { Component, OnInit, Input } from '@angular/core';
import { FilesService } from '../services/files.service';


@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  @Input() fileName = "1310.4546.pdf";


  constructor(private fs: FilesService) { }


  ngOnInit() {

  }
  viewSinglePdf() {
    this.fs.getFileByName(this.fileName);
  }

}
