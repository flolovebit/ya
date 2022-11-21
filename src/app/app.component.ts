import { trigger, transition, useAnimation } from '@angular/animations';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { moveFromLeftFade } from './app-animation'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('moveFromLeftFade', [
      transition('list => detail', useAnimation(moveFromLeftFade)),
      transition('detail => list', useAnimation(moveFromLeftFade))
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'app-animals';
  public getState(outlet:any) {
    return outlet.activatedRouteData.state;
  }

  public getDone(outlet:any) {
    console.log(outlet)
  }
}
