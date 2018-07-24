import { Component } from '@angular/core'
import { Subscription } from 'rxjs'
import { string as template } from "./simple-demo.template"
import { HttpClient, HttpRequest, HttpResponse, HttpEvent } from '@angular/common/http'

@Component({
  selector: 'simple-demo',
  template:template
})
export class SimpleDemoComponent {
  accept = '*'
  files:File[] = []
  progress:number
  url = 'https://evening-anchorage-3159.herokuapp.com/api/'
  hasBaseDropZoneOver:boolean = false
  httpEmitter:Subscription;
  httpEvent:HttpEvent<any>;
  lastFileAt:Date;

  sendableFormData:FormData//populated via ngfFormData directive

  constructor(public HttpClient:HttpClient){}

  cancel(){
    this.progress = 0
    if( this.httpEmitter ){
      console.log('cancelled')
      this.httpEmitter.unsubscribe()
    }
  }

  save(data: any, filesA: File[], filesB: File[]) {
    const formData = new FormData();

    // add the files
    if (filesA && filesA.length) {
      filesA.forEach(file => formData.append('filesA', file));
    }

    if (filesB && filesB.length) {
      filesB.forEach(file => formData.append('filesB', file));
    }

    // add the data object
    formData.append('data', new Blob([JSON.stringify(data)], {type: 'application/json'}));

    //return this.http.post<any>(this.apiUrl, formData);
  }

  /*

    save(data: Data, filesForUpload: File[]): Observable<Data> {
    const formData = new FormData();

    // add the files
    if (filesForUpload && filesForUpload.length) {
      filesForUpload.forEach(file => formData.append('files', file));
    }

    // add the data object
    formData.append('data', new Blob([JSON.stringify(data)], {type: 'application/json'}));

    return this.http.post<Data>(this.apiUrl, formData);
  }
  */

   uploadFiles(files:File[]):Subscription{
    console.log(files);
    let formData = new FormData();
   formData.append('file',files[0]);
    console.log(formData);

    const req = new HttpRequest<FormData>('POST', this.url, formData, {
      reportProgress: true//, responseType: 'text'
    })

    console.log(this.sendableFormData);
    console.log(req);

    console.log(req);


    return this.httpEmitter = this.HttpClient.request(req)
    .subscribe(
      event=>{
        this.httpEvent = event
        console.log(this.httpEvent);

        console.log(formData);
        if (event instanceof HttpResponse) {
          delete this.httpEmitter
          console.log('request done', event)
        }
      },
      error=>console.log('Error Uploading',error)
    )
  }

  getDate(){
    return new Date()
  }
}
