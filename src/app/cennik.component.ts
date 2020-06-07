import { Component } from '@angular/core';

@Component({
  selector: 'cennik',
  template: `
    <menu></menu>
    <section class="prices clearfix">
      <h1>Cennik</h1>
      <br /><br />
      <table class="table">
        <tbody>
          <tr>
            <td><strong>Strzyżenie i modelowanie damskie:</strong></td>
            <td><strong>krótkie</strong></td>
            <td><strong>średnie</strong></td>
            <td><strong>długie</strong></td>
          </tr>
          <tr>
            <td>Strzyżenie + modelowanie</td>
            <td>85,00 zł</td>
            <td>95,00 zł</td>
            <td>105,00 zł</td>
          </tr>
          <tr>
            <td>Strzyżenie maszynką na sucho</td>
            <td>65,00 zł</td>
            <td>65,00 zł</td>
            <td>65,00 zł</td>
          </tr>
          <tr>
            <td>Strzyżenie grzywki</td>
            <td>20,00 zł</td>
            <td>20,00 zł</td>
            <td>20,00 zł</td>
          </tr>
          <tr>
            <td>Strzyżenie dziecka - dziewczynka</td>
            <td>65,00 zł</td>
            <td>65,00 zł</td>
            <td>65,00 zł</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Modelowanie</td>
            <td>55,00 zł</td>
            <td>60,00 zł</td>
            <td>65,00 zł</td>
          </tr>
          <tr>
            <td>Loki</td>
            <td>-</td>
            <td>100,00 zł</td>
            <td>130,00 zł</td>
          </tr>
          <tr>
            <td>Prostowanie włosów</td>
            <td>10,00 zł</td>
            <td>20,00 zł</td>
            <td>30,00 zł</td>
          </tr>
          <tr>
            <td>Prostowanie keratynowe</td>
            <td>250,00 zł</td>
            <td>300,00 zł</td>
            <td>350,00 zł</td>
          </tr>
          <tr>
            <td>Trwała ondulacja</td>
            <td>140,00 zł</td>
            <td>160,00 zł</td>
            <td>190,00 zł</td>
          </tr>
          <tr>
            <td>Fryzura okolicznościowa</td>
            <td>100,00 zł</td>
            <td>150,00 zł</td>
            <td>180,00 zł</td>
          </tr>
          <tr>
            <td>Fryzura ślubna</td>
            <td>250,00 zł</td>
            <td>250,00 zł</td>
            <td>280,00 zł</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td><strong>Koloryzacja:</strong></td>
            <td><strong>krótkie</strong></td>
            <td><strong>średnie</strong></td>
            <td><strong>długie</strong></td>
          </tr>
          <tr>
            <td>Koloryzacja - jeden kolor</td>
            <td>230,00 zł</td>
            <td>260,00 zł</td>
            <td>280,00 zł</td>
          </tr>
          <tr>
            <td>Ombre/Sombre</td>
            <td>160,00 zł</td>
            <td>200,00 zł</td>
            <td>230,00 zł</td>
          </tr>
          <tr>
            <td>Kontrast / balleyage</td>
            <td>240,00 zł</td>
            <td>260,00 zł</td>
            <td>280,00 zł</td>
          </tr>
          <tr>
            <td>Tonowanie Dia Color</td>
            <td>200,00 zł</td>
            <td>220,00 zł</td>
            <td>230,00 zł</td>
          </tr>
          <tr>
            <td>Dekoloryzacja</td>
            <td>170,00 zł</td>
            <td>200,00 zł</td>
            <td>260,00 zł</td>
          </tr>
          <br /><br />
        </tbody>
      </table>
    </section>
    <contact></contact>
  `,
  styleUrls: ['./cennik.component.css'],
})
export class CennikComponent {}
