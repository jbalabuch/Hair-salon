import { Component } from '@angular/core';

@Component({
  selector: 'page-not-found',
  template: `
    <menu></menu>
    <section class="services clearfix">
      <h1>
        Nie znaleziono strony o podanym adresie URL. Wróc na
        <a href="/">stronę główną</a>
      </h1>
      <br /><br /><br />
    </section>
    <contact></contact>
  `,
  styleUrls: ['./home.component.css'],
})
export class PageNotFoundComponent {}
