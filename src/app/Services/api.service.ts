// import { Injectable } from '@angular/core';
// import { Http , Headers ,RequestOptions} from '@angular/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
// import { Observable } from 'rxjs/Rx';


// @Injectable()
// export class ApiService {

// private eventsUrl: string;

// constructor(
//   private http: Http,

// ) {
// this.eventsUrl = environment.dpApiUrl + 'events/';
// }

//     getEvents(): Observable<Eventdetails[]> {
//       debugger;
//       return this.http.get(this.eventsUrl)
//         .map((response) => response.json())
//         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
//     }
//     getfilterEvents(eventype:string): Observable<Eventdetails[]> {
//       //return this.http.get(this.eventsUrl + 'category/' + eventype +'/')
//       return this.http.get('https://avenieuwapis.azurewebsites.net/api/events/category/arts')
//         .map((response) => response.json())
//         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
//     }

//     getfilterEventsbydate(fromdate:string ,todate:string ): Observable<Eventdetails[]> {
//       //return this.http.get(this.eventsUrl + 'category/' + eventype +'/')
//       var url = this.eventsUrl + fromdate +'/'+ todate
//       console.log (url);
//       return this.http.get(url)
//         .map((response) => response.json())
//         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
//     }


//     getfilterEventsbykeywords(keyword:string): Observable<Eventdetails[]> {
//       //return this.http.get(this.eventsUrl + 'category/' + eventype +'/')
//       var url = this.eventsUrl +'search'+ '/' + keyword
//       console.log (url);
//       return this.http.get(url)
//         .map((response) => response.json())
//         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
//     }

//     sendsms(text:string,no:string): Observable<smsdetails[]> {
//       var url = 'https://avenieuwapis.azurewebsites.net/api/events/sms/$' +no+ '/' + text
//       console.log (url);
//       return this.http.get(url)
//         .map((response) => response.json())
//         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

//     }

//     getfilterEventsbyfree(): Observable<Eventdetails[]> {
//           //return this.http.get(this.eventsUrl + 'category/' + eventype +'/')
//           var url = this.eventsUrl +'category/not/arts'
//           console.log (url);
//           return this.http.get(url)
//             .map((response) => response.json())
//             .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
//         }

//     getParkings(): Observable<Parkdetails[]> {
//       var url = environment.dpApiUrl + 'parkings/'

//       return this.http.get(url)
//         .map((response) => response.json())
//         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
//     }

//     getRoadworks(): Observable< Roadwork[]> {
//       var url = 'https://rws01.sharewire.net/obstructions'
//       const HEADERS = new Headers({'RWS-API-KEY': 'v5jaGACh!2S4JQ4Uehcq-hU6v3J2qpvc'});
//       return this.http.get(url,{headers: HEADERS})
//         .map((response) => response.json())
//         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
//     }

//     getaccidents():Observable<Accident[]> {
//       var url = 'http://164.138.30.171/geoserver/ows?service=WFS&request=GetFeature&typename=meldingen:uur&version=1.1.0&srsname=EPSG:3857&outputFormat=application/json'

//       return this.http.get(url)
//         .map((response) => response.json())
//         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
//     }


//     async getaccidents_async(): Promise<Accident> {
//         var url = 'http://164.138.30.171/geoserver/ows?service=WFS&request=GetFeature&typename=meldingen:uur&version=1.1.0&srsname=EPSG:3857&outputFormat=application/json'
//     const response = await this.http.get(url).toPromise();

//     return response.json();
//   }

//   async getroadworks_async(): Promise<Roadwork> {
//       var url = 'https://rws01.sharewire.net/obstructions'
//       const HEADERS = new Headers({'RWS-API-KEY': 'v5jaGACh!2S4JQ4Uehcq-hU6v3J2qpvc'});
//   const response = await this.http.get(url,{headers: HEADERS}).toPromise();

//   return response.json();
// }

//   async gettraffics_async(): Promise<Traffic[]> {
//       var url = 'http://api.routeradar.nl/api/v1/reports?query_type=overview'
//   const response = await this.http.get(url).toPromise();
//   debugger;
//   return response.json();
// }

// }
