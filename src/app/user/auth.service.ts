import {Injectable } from '@angular/core'
import { IUserModel } from './user.model';

@Injectable()
export class AuthService{
    currentUser: IUserModel
    loginUser(userName: string, password: string){

        this.currentUser ={
            id:1, 
            firstName: 'Santosh', 
            lastName: 'Behera', 
            userName: userName
        }
    }

    isAuthenticated(){
        return !!this.currentUser;
    }
}