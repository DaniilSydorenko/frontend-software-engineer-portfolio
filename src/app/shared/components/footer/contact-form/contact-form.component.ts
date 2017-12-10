import { Component, Output, EventEmitter } from '@angular/core';
import { Message } from '../../../models/message';

@Component({
    selector: 'app-contact-form',
    templateUrl: 'contact-form.component.html'
})

export class ContactFormComponent {
    @Output() messageCreated = new EventEmitter();

    newMessage: Message = new Message();
    active = true;

    onFocus(event) {
      event.target.classList.add('active');
    }

    onSubmit() {
        this.messageCreated.emit({ message: this.newMessage });
        this.newMessage = new Message();
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
}
