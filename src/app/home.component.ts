import { Component } from '@angular/core';

@Component({
  selector: 'home',
  template: `
    <menu></menu>

    <section class="services clearfix">
      <div class="item">
        <p>Strzyżenie damskie</p>
      </div>
      <div class="item">
        <p>Trwała ondulacja</p>
      </div>
      <div class="item">
        <p>Keratynowe prostowanie włosów</p>
      </div>
      <div class="item">
        <p>Koloryzacja włosów</p>
      </div>
    </section>

    <section class="skills clearfix">
      <h1>Dlaczego warto nam zaufać?</h1>
      <div class="skill">
        <img src="./assets/images/icon1.png" alt="experience" />
        <h2>Nasze stylistki mają wiele lat doświadczenia</h2>
        <p class="description">
          Skład naszego zespołu stanowią tylko osoby od lat pracujące w
          zawodzie. Nie musisz się martwić, że trafisz w ręce osoby, która
          dopiero zaczyna swoją przygodę z fryzjerstwem.
        </p>
      </div>
      <div class="skill">
        <img src="./assets/images/icon2.png" alt="equipment" />
        <h2>Używamy nowoczesnego i sprawdzonego sprzętu</h2>
        <p class="description">
          Systematycznie wymieniamy sprzęt, którego używamy, a przy zakupie
          nowych urządzeń zawsze wybieramy te z najwyższej półki. Wiemy, jak
          ważny jest odpowiedni sprzęt.
        </p>
      </div>
      <div class="skill">
        <img src="./assets/images/icon3.png" alt="products" />
        <h2>Korzystamy z produktów tylko profesjonalnych</h2>
        <p class="description">
          Produkty, których używamy pochodzą tylko od sprawdzonych i
          renomowanych dostawców. Nie eksperymentujemy, używamy tylko
          kosmetyków, które poprawią Twoją kondycję włosów.
        </p>
      </div>
    </section>
    <contact></contact>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
