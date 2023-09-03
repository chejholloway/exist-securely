import { Component, Input } from '@angular/core';
import { NewsItem } from '@homework/core';
import { SearchPipe } from '@homework/shared/pipe/search.pipe';

@Component({
  selector: 'app-feed',
  template: `
    <div class="app-feed__input-container">
      <input
        class="app-feed__input"
        [(ngModel)]="query"
        type="text"
        placeholder="Search News"
        #search
      />
    </div>
    <app-feed-card
      *ngFor="let item of news | search: 'user,title,url':query; trackBy: trackingFn"
      [news]="item"
    ></app-feed-card>
  `,
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {
  @Input() news: NewsItem[] = [];
  public query: any;

  trackingFn(_: number, item: NewsItem) {
    return item.id;
  }
}
