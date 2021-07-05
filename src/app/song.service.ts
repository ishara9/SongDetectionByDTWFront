import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Authorization': 'authkey',
    'userid': '1'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SongService {


  private REST_API_SERVER = "http://localhost:5000/";



  constructor(private httpClient: HttpClient) { }

  public sendGetRequest() {
    return this.httpClient.get(this.REST_API_SERVER + "echo", httpOptions);
  }

  public uploadRecording(blob: any): Observable<Object> {
    const formData: FormData = new FormData();
    formData.append("data", blob, "blob.wav");
    return this.httpClient.post(this.REST_API_SERVER + "upload", formData);
  }
}
