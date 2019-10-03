import { Component, OnInit } from '@angular/core';
import { FilesService } from '../services/files.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {
  files = [];
  constructor(private fileS: FilesService) { }

  ngOnInit() {
    this.fileS.getFiles().subscribe(d => {
      console.log(d)
      this.files = d['files'];

    })
  }

}
