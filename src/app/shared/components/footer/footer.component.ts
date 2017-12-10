import { Component } from '@angular/core'

@Component({
    selector: 'app-footer',
    templateUrl: 'footer.component.html'
})

export class FooterComponent {
  copyYear() {
    const date = new Date();
    return date.getFullYear();
  }

  onMessageCreated(event: any) {
      console.log(event.message);
  }
}

