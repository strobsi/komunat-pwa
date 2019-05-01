import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';
import { Injectable } from '@angular/core';

@Injectable()
export class DelayedGoogleAnalytics extends GoogleAnalytics {

  private resolveReadyFn: () => void;
  private rejectReadyFn: (reason?: any) => void;

  private readonly trackerReady = new Promise<void>((resolve, reject) => {
    this.resolveReadyFn = resolve;
    this.rejectReadyFn = reject;
  });

  startTrackerWithId(id: string, interval?: number): Promise<any> {
    return super.startTrackerWithId(id, interval).then(() => {
      super.debugMode().then(() => {
        this.resolveReadyFn();
      });
    }).catch(reason => {
      this.rejectReadyFn(reason);
    });
  }

  trackView(title: string, campaignUrl?: string, newSession?: boolean): Promise<any> {
    return this.trackerReady.then(() => {
      return super.trackView(title, campaignUrl, newSession);
    });
  }

  trackEvent(category: string, action?: string, label?: string, value?: number, newSession?: boolean): Promise<any> {
    return this.trackerReady.then(() => {
      return super.trackEvent(category, action, label, value, newSession);
    });
  }
  // wrappers for all other functions implemented by following the trackview example
}