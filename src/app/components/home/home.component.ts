import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1, imgCont: ''},
          { title: 'Card 2', cols: 1, rows: 1, imgCont: '' },
          { title: 'Card 3', cols: 1, rows: 1, imgCont: '' },
          { title: 'Card 4', cols: 1, rows: 1, imgCont: '' }
        ];
      }

      return [
        { title: 'Spy x family', cols: 2, rows: 1.5, imgCont: 'https://c.tenor.com/Q0D8AapU3kIAAAAd/spyfamily-anya.gif'},
        { title: 'Twilight(Loid Forger) - Espião', cols: 1, rows: 1, imgCont: 'https://c.tenor.com/W0qjpRSl1moAAAAC/spy-x-family-twilight.gif'},
        { title: 'Anya Forger - Telepata', cols: 1, rows: 2, imgCont: 'https://c.tenor.com/hPTu2bPtVIYAAAAC/anya-forger-anya.gif'},
        { title: 'Yor Forger - Assassina', cols: 1, rows: 1, imgCont: 'https://c.tenor.com/FFbdvBsejlgAAAAC/yor-forger-spy-x-family.gif'}
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
