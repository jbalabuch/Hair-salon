import { Component } from '@angular/core';

@Component({
  selector: 'o-nas',
  template: `
    <menu></menu>
    <section class="about clearfix">
      <h1>O nas</h1>
      <p>
        Nasz zespół składa się z dwóch <strong>fryzjerek, stylistek</strong>, a
        przede wszystkim <strong>przyjaciółek</strong>, które współpracują ze
        sobą od początków <strong>Salonu Uczesana</strong>. Razem dbamy o
        fryzury naszych klientek już od <strong>15 lat</strong> i co najmniej
        drugie tyle zamierzamy jeszcze funkcjonować!
      </p>
    </section>
    <section class="teams clearfix">
      <div class="team">
        <img src="./assets/images/about_us1.jpg" alt="kasia" />
        <h2>Katarzyna Nowak</h2>
        <p>
          Już od dziecka marzyłam o tym, żeby zostać
          <strong>profesjonalną stylistką</strong>, a kiedy dorosłam,
          postanowiłam spełnić to marzenie. Prywatnie
          <strong>miłośniczka dobrego kina</strong> i podróży, moim celem jest
          zwiedzić <strong>każdy kontynent</strong>.
        </p>
      </div>
      <div class="team">
        <img src="./assets/images/about_us2.jpg" alt="ania" />

        <h2>Anna Kowalska</h2>
        <p>
          <strong>Frzyjerstwa</strong> nauczyła mnie mama, która otworzyła
          pierwszy salon fryzjerskim w małej miejscowości, z której pochodzę.
          <strong>Żona i matka</strong> dwójki dzieci, uwielbiająca
          <strong>spędzać czas w domu</strong> z rodziną i przyjaciółmi.
        </p>
      </div>
      <br /><br />
    </section>

    <contact></contact>
  `,
  styleUrls: ['./onas.component.css'],
})
export class OnasComponent {}
