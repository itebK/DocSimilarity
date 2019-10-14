import { Component, OnInit } from '@angular/core';
import { FilesService } from '../services/files.service';

@Component({
  selector: 'app-file-content',
  templateUrl: './file-content.component.html',
  styleUrls: ['./file-content.component.css']
})
export class FileContentComponent implements OnInit {
  pdfSrc: string;
  refs: any;
  res: any;
  resRefs: any;
  constructor(private fs: FilesService) { }

  ngOnInit() {
    console.log("ngoninit");
    
    this.fs.currentPdfSrc.subscribe(pdfsrc => {
      this.pdfSrc = pdfsrc
      console.log("new pdf source", this.pdfSrc);
     

    }, err => { }, () => {

    });


    this.fs.getRefsContent().subscribe(d => {
      this.refs = d['refs'];
    }, error => {
      console.log(error);
    }, () => {
      console.log("cleaned_refs.json loaded sucessfully");
      console.log(this.refs);
    })

  }


  textLayerRendered(e: CustomEvent) {

    console.log('(text-layer-rendered)', (<any>e).path["0"].innerText);
    this.fs.getTextContent().subscribe(d => {
      this.res = null;
      this.res = this.searchText(d['text'], (<any>e).path["0"].innerText);
      this.resRefs = this.searchRefs(this.res, this.refs);
      console.log(this.resRefs);


    }, error => {
      console.log(error);
    }

      , () => {
        console.log("cleaned_text.json loaded sucessfully");
      })

  }


  searchText(theObject, keyword) {
    var result = {
      docNumber: -1,
      paragraph: '',
      paragraphNumber: -1,
      refs: []
    };



    for (var i = 0; i < Object.keys(theObject).length; i++) {

      for (var j = 0; j < Object.keys(theObject[i]).length; j++) {

        if (theObject[i][j]['text'].search(keyword) != -1) {

          /*     console.log('word', keyword);
              console.log('result', theObject[i][j]); */
          result.docNumber = i;
          result.paragraphNumber = j;
          result.paragraph = theObject[i][j];
          result.refs = theObject[i][j]['refs']
          /*   console.log(result); */

        }
      }
    }

    return result;

  }


  searchRefs(theObject, refsArray) {
    var refs = []
    if (theObject.refs.length != 0) {
      for (var i = 0; i < theObject.refs.length; i++) {
        var obj = null;
        obj = refsArray[theObject.docNumber][theObject.refs[i] - 1]
        refs.push(obj)

      }
      return refs
    }


  }





}