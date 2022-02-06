import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import {
  Event as RouterEvent,
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router,
  RouterOutlet,
} from '@angular/router';
import { Subscription } from 'rxjs';
import { UtilService } from './core/services/util/util.service';
import { slider } from './_animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slider],
})
export class AppComponent implements AfterViewInit, OnInit, OnDestroy {
  public isShowingRouteLoadIndicator: boolean;
  public themeSub: Subscription;
  darkTheme = false;
  title = '';
  constructor(
    private router: Router,
    private renderer: Renderer2,
    private util: UtilService,
  ) {
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
  ngOnInit() {
    this.themeSub = this.util.theme.subscribe((theme) => {
      this.darkTheme = theme;
    });
  }

  ngOnDestroy(): void {
    this.themeSub?.unsubscribe();
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

  toggleTheme() {
    this.darkTheme = !this.darkTheme;
  }
}
