import {Component} from '@angular/core';
import {User} from '../shared/models/user';

@Component({
    selector: 'users',
    templateUrl: 'users.component.html',
})

export class UsersComponent {
    users: User[] = [
        {id: 1, name: 'Daniil', username: 'dansyd'},
        {id: 2, name: 'Viola', username: 'vilnar'},
        {id: 3, name: 'John', username: 'stermar'}
    ];

    activeUser: User;

    selectUser(user: any) {
        this.activeUser = user;
    }

    onUserCreated(event: any) {
        this.users.push(event.user);
    }
}
