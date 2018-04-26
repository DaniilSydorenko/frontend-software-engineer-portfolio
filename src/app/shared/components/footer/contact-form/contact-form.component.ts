import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message } from '../../../models/message';

@Component({
    selector: 'app-contact-form',
    templateUrl: 'contact-form.component.html',
    styleUrls: ['./contact-form.component.scss'],
})

export class ContactFormComponent {
    rForm: FormGroup;
    message: any;
    name: string;
    email: string;
    messageText: string;
    alertText = 'This field is required';

    constructor (private fb: FormBuilder) {
      this.rForm = fb.group({
        'name': [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(30)])],
        'email': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30), Validators.email])],
        'messageText': [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(500)])],
      });
    }

    onFocus (event) {
      event.target.classList.add('active');
    }

    onSubmit (message: Message) {
      this.name = message.name;
      this.email = message.email;
      this.messageText = message.messageText;
      console.log(message);
    }
}
