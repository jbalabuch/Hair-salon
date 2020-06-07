import { Component } from '@angular/core';

@Component({
  selector: 'contact',
  template: `
    <section class="contact">
      <h1>Skontaktuj się z nami</h1>
      <div class="wrap clearfix">
        <form action="https://formspree.io/xeqrgpyz" method="POST">
          <input type="text" placeholder="Email" name="_replyto" />
          <textarea placeholder="Twoja wiadomość" name="name"></textarea>
          <button type="submit">Wyślij wiadomość</button>
        </form>
        <div class="socials">
          <div class="social clearfix">
            <img src="assets/images/contact1.png" alt="kontakt" /><span
              >su@uczesana.pl</span
            >
          </div>
          <div class="social clearfix">
            <img src="assets/images/contact2.png" alt="kontakt" /><span
              >500123456</span
            >
          </div>
          <div class="social clearfix">
            <img src="assets/images/contact3.png" alt="kontakt" /><span
              >salonuczesana</span
            >
          </div>
          <div class="social clearfix">
            <img src="assets/images/contact4.png" alt="kontakt" /><span
              >salonuczesana</span
            >
          </div>
        </div>
      </div>
    </section>
    <footer>&copy; Salon Uczesana - Fryzjerstwo damskie</footer>
  `,
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {}
