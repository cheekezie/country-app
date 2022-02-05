import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import {
  Event as RouterEvent,
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router,
  RouterOutlet,
} from '@angular/router';
import { slider } from './_animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slider],
})
export class AppComponent implements AfterViewInit {
  public isShowingRouteLoadIndicator: boolean;
  constructor(private router: Router, private renderer: Renderer2) {
    this.isShowingRouteLoadIndicator = false;
    let asyncLoadCount = 0;
    router.events.subscribe((event: RouterEvent): void => {
      if (event instanceof RouteConfigLoadStart) {
        asyncLoadCount++;
      } else if (event instanceof RouteConfigLoadEnd) {
        asyncLoadCount--;
      }

      this.isShowingRouteLoadIndicator = !!asyncLoadCount;
    });
  }

  ngAfterViewInit() {
    const loader = this.renderer.selectRootElement('#appLoader');
    this.renderer.setStyle(loader, 'display', 'none');
  }
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
