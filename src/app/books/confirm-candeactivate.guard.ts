import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import{BookDetailComponent } from '../books/book-detail/book-detail.component'

@Injectable({
  providedIn: 'root'
})
export class ConfirmCandeactivateGuard implements CanDeactivate<BookDetailComponent> {

  constructor(){}

  canDeactivate(){
    return confirm('Are you sure?');
  }
}
