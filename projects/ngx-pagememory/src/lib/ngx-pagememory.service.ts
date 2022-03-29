import { Injectable } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';  

@Injectable({
  providedIn: 'root'
})
export class NgxPagememoryService {

  lastRouteKey = "lastRoute";
  _lastRoute = localStorage.getItem(this.lastRouteKey);

  constructor(private router: Router) { }

  register(): void {
    let lastRoute = this.getLastRoute();
    if (lastRoute != null) {
      this.router.navigateByUrl(lastRoute);
    }

    this.router.events.subscribe((event: RouterEvent) => {
      if (event.url)
        this.setLastRoute(event.url);
    });
  }

  public setLastRoute(value: string) {
    localStorage.setItem(this.lastRouteKey, value);
  }

  public getLastRoute(): string | null {
    return localStorage.getItem(this.lastRouteKey);
  }

}
