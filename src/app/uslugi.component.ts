import { Component } from '@angular/core';

@Component({
  selector: 'uslugi',
  template: `
    <menu></menu>
    <section class="services clearfix">
      <h1>Nasze Usługi</h1>
      <br />
      <img src="./assets/images/hairdresser.jpg" alt="hairdresser" />
      <p>
        Zajmujemy się profesjonalnym <strong>strzyżeniem</strong>,
        <strong>modelowaniem</strong> oraz <strong>koloryzacją</strong> Twoich
        włosów. Zaufało nam już tysiące klientek, a ilość kobiet, które
        systematycznie odwiedzają nasz salon stale wzrasta. Dbamy o
        <strong>relację</strong> z naszymi klientkami, aby każda z osobna czuła
        się wyjątkowa, kiedy odwiedza nasz salon.
      </p>
      <p>
        Najczęściej wykonujemy standardowe <strong>strzyżenie</strong> i
        <strong>modelowanie</strong> włosów damskich. Wiele klientek decyduje
        się także na <strong>ścięcie samej grzywki</strong>. Coraz
        popularniejszym zabiegiem staje się
        <strong>keratynowe prostowanie włosów</strong>, a wciąż w modzie są
        także <strong>loki</strong> i <strong>trwałe ondulacje</strong>.
        Wykonujemy także <strong>fryzury okolicznościowe</strong> oraz
        <strong>ślubne</strong>.
      </p>
      <p>
        W naszym salonie nie brakuje także klientek, które decydują się na
        <strong>zmianę koloru</strong> swoich włosów. Najczęściej jest to jeden
        kolor, ale dużym zainteresowaniem stale cieszą się także
        <strong>ombre/sombre</strong> oraz <strong>balleyage</strong>.
        Wykonujemy także <strong>dekoloryzację włosów</strong>. Ceny zabiegów
        różnią się w zależności od długości włosów.
      </p>
      <br /><br />
    </section>
    <contact></contact>
  `,
  styleUrls: ['./uslugi.component.css'],
})
export class UslugiComponent {}
