import { Component, OnInit } from '@angular/core';
// import {request} from 'request';
@Component({
  selector: 'app-contact',
  template: `
    <section class="hero is-primary is-bold">
    <div class="hero-body">
    <div class="container">  
      <h1 class="title">Shipment Request</h1>  
    </div>
    </div>
    </section>

    <section class="section">
    <div class="container">

      <!-- form goes here -->
      <form (ngSubmit)="processForm()">

        <!-- name -->
        <div class="field">
          <input 
            type="text" 
            name="name" 
            class="input" 
            placeholder="Shipment" 
            [(ngModel)]="name"
            required
            minlength="3"
            #nameInput="ngModel">

          <div class="help is-error" *ngIf="nameInput.invalid && nameInput.dirty">
            Name is required and needs to be at least 3 characters long.
          </div>
        </div>



        <!-- email -->
        <div class="field">          
          <input 
            type="email" 
            name="email" 
            class="input" 
            placeholder="Your Email" 
            [(ngModel)]="email"
            required
            email
            #emailInput="ngModel">

          <div class="help is-error" *ngIf="emailInput.invalid && emailInput.dirty">
            Needs to be a valid email.
          </div>
        </div>

        <!-- message -->
        <div class="field">
          <textarea 
            class="textarea" 
            name="message" 
            placeholder="What's on your mind?" 
            [(ngModel)]="message"
            required
            #messageInput="ngModel"></textarea>

            <div class="help is-error" *ngIf="emailInput.invalid && emailInput.dirty">
              Your message is required!
            </div>
        </div>

        <button type="submit" class="button is-danger is-large">Submit</button>

      </form>

    </div>
    </section>
  `,
  styles: []
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;

  constructor() {}

  ngOnInit() {}

  /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
  processForm() {
    const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
    alert(allInfo); 

    // var options = { method: 'POST',
    //   url: 'https://prod-21.centralus.logic.azure.com/workflows/cdafd7a5c40142e7835316ead2e102ce/triggers/manual/paths/invoke/createshipment/360/pending/deepan.ignaatious@rojoconsultancy.com/2019-10-08%2000:00:00.000/hello%20test',
    //   qs: 
    //    { 'api-version': '2016-10-01',
    //      sp: '%2Ftriggers%2Fmanual%2Frun',
    //      sv: '1.0',
    //      sig: 'HZYqACq_NrI0fzzuinrvXk5rl-02Gh_5vRM1qfeB-7A' },
    //   headers: 
    //    { 'Postman-Token': 'e53c0c67-b55c-453d-80fe-78e9bb1f8226',
    //      'cache-control': 'no-cache' } };
    
    // request(options, function (error, response, body) {
    //   if (error) throw new Error(error);
    
    //   console.log(body);
    // });
    



  }

}
