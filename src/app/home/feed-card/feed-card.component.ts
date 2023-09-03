import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { NewsItem } from '@homework/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-feed-card',
  template: `
    <app-card class="app-card">
      <div class="app-card__column-left">
        <a class="app-card__link" [href]="news.url" [textContent]="news.title"> </a>
        <div class="app-card__domain">{{ news.domain }}</div>
        <div class="app-card__points">{{ news.points }} points</div>
        by <span class="app-card__user">{{ news.user }}</span> {{ news.time_ago }}<br />
      </div>
      <div class="app-card__column-right">
        <div class="app-card__comments_count">
          <span class="app-card__comments_number">{{ news.comments_count }}</span>
        </div>
      </div>
    </app-card>
  `,
  styleUrls: ['./feed-card.component.scss']
})
export class FeedCardComponent {
  @Input() news: NewsItem;
}
