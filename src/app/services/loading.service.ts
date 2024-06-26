import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public isLoading$ =new Subject<boolean>

  constructor() { }
  showLoadingSpiner():void
  {
    this.isLoading$.next(true);
  }
  hideLoadingSpiner():void
  {
    this.isLoading$.next(false);
  }
}
