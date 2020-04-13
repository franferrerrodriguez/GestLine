import { Component, OnInit, ɵConsole } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from '../../models/Client.class';
import { AuthService } from '../../services/auth/auth.service';
import { ClientmanagementService } from '../../services/clientmanagement.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  public loading:boolean;
  public documentTypes:string[];
  public addressTypes:string[];
  public countries:string[];

  public client: Client = {
    document: '',
    documentType: '',
    clientType: '',
    name: '',
    firstSurname: '',
    secondSurname: '',
    birthDate: '',
    email: '',
    onlineInvoice: false,
    address: { 
      type: '',
      direction: '',
      number: '',
      stairs: '',
      floor: '',
      door: '',
      location: '',
      province: '',
      postalCode: '',
      country: ''
    },
    billing: { 
      entity: '',
      office: '',
      dc: '',
      account: '',
      address: {
        type: '',
        direction: '',
        number: '',
        stairs: '',
        floor: '',
        door: '',
        location: '',
        province: '',
        postalCode: '',
        country: ''
      }
    }
  }

  constructor(public authService: AuthService, private clientmanagementService: ClientmanagementService) {
    this.loading = true;
  }

  ngOnInit(): void {
    this.loading = false;

    this.documentTypes = ['NIF', 'NIE', 'CIF', 'PASAPORTE'];

    this.addressTypes = [
      'Calle',
      'Avenida',
      'Callejón',
      'Camino',
      'Carretera',
      'Carril',
      'Parque',
      'Pasaje',
      'Paseo',
      'Plaza',
      'Puente',
      'Ronda',
      'Sendero',
      'Travesía',
      'Túnel',
      'Urbanización'
    ]

    this.countries = [
      'Afganistán',
      'Albania',
      'Alemania',
      'Andorra',
      'Angola',
      'Antigua y Barbuda',
      'Arabia Saudita',
      'Argelia',
      'Argentina',
      'Armenia',
      'Australia',
      'Austria',
      'Azerbaiyán',
      'Bahamas',
      'Bangladés',
      'Barbados',
      'Baréin',
      'Bélgica',
      'Belice',
      'Benín',
      'Bielorrusia',
      'Birmania',
      'Bolivia',
      'Bosnia y Herzegovina',
      'Botsuana',
      'Brasil',
      'Brunéi',
      'Bulgaria',
      'Burkina Faso',
      'Burundi',
      'Bután',
      'Cabo Verde',
      'Camboya',
      'Camerún',
      'Canadá',
      'Catar',
      'Chad',
      'Chile',
      'China',
      'Chipre',
      'Ciudad del Vaticano',
      'Colombia',
      'Comoras',
      'Corea del Norte',
      'Corea del Sur',
      'Costa de Marfil',
      'Costa Rica',
      'Croacia',
      'Cuba',
      'Dinamarca',
      'Dominica',
      'Ecuador',
      'Egipto',
      'El Salvador',
      'Emiratos Árabes Unidos',
      'Eritrea',
      'Eslovaquia',
      'Eslovenia',
      'España',
      'Estados Unidos',
      'Estonia',
      'Etiopía',
      'Filipinas',
      'Finlandia',
      'Fiyi',
      'Francia',
      'Gabón',
      'Gambia',
      'Georgia',
      'Ghana',
      'Granada',
      'Grecia',
      'Guatemala',
      'Guyana',
      'Guinea',
      'Guinea-Bisáu',
      'Guinea Ecuatorial',
      'Haití',
      'Honduras',
      'Hungría',
      'India',
      'Indonesia',
      'Irak',
      'Irán',
      'Irlanda',
      'Islandia',
      'Islas Marshall',
      'Islas Salomón',
      'Israel',
      'Italia',
      'Jamaica',
      'Japón',
      'Jordania',
      'Kazajistán',
      'Kenia',
      'Kirguistán',
      'Kiribati',
      'Kuwait',
      'Laos',
      'Lesoto',
      'Letonia',
      'Líbano',
      'Liberia',
      'Libia',
      'Liechtenstein',
      'Lituania',
      'Luxemburgo',
      'Macedonia del Norte',
      'Madagascar',
      'Malasia',
      'Malaui',
      'Maldivas',
      'Malí',
      'Malta',
      'Marruecos',
      'Mauricio',
      'Mauritania',
      'México',
      'Micronesia',
      'Moldavia',
      'Mónaco',
      'Mongolia',
      'Montenegro',
      'Mozambique',
      'Namibia',
      'Nauru',
      'Nepal',
      'Nicaragua',
      'Níger',
      'Nigeria',
      'Noruega',
      'Nueva Zelanda',
      'Omán',
      'Países Bajos',
      'Pakistán',
      'Palaos',
      'Panamá',
      'Papúa Nueva Guinea',
      'Paraguay',
      'Perú',
      'Polonia',
      'Portugal',
      'Reino Unido de Gran Bretaña e Irlanda del Norte',
      'República Centroafricana',
      'República Checa',
      'República del Congo',
      'República Democrática del Congo',
      'República Dominicana',
      'República Sudafricana',
      'Ruanda',
      'Rumanía',
      'Rusia',
      'Samoa',
      'San Cristóbal y Nieves',
      'San Marino',
      'San Vicente y las Granadinas',
      'Santa Lucía',
      'Santo Tomé y Príncipe',
      'Senegal',
      'Serbia',
      'Seychelles',
      'Sierra Leona',
      'Singapur',
      'Siria',
      'Somalia',
      'Sri Lanka',
      'Suazilandia',
      'Sudán',
      'Sudán del Sur',
      'Suecia',
      'Suiza',
      'Surinam',
      'Tailandia',
      'Tanzania',
      'Tayikistán',
      'Timor Oriental',
      'Togo',
      'Tonga',
      'Trinidad y Tobago',
      'Túnez',
      'Turkmenistán',
      'Turquía',
      'Tuvalu',
      'Ucrania',
      'Uganda',
      'Uruguay',
      'Uzbekistán',
      'Vanuatu',
      'Venezuela',
      'Vietnam',
      'Yemen',
      'Yibuti',
      'Zambia',
      'Zimbabue'
    ];

    this.getClientManagementData();
  }

  save(form: NgForm) {
    this.loading = true;

    if (form.valid) {
      console.log(this.client);
      this.loading = false;
      return this.clientmanagementService
        .updateClient(this.client)
        .subscribe(
          data => {
            console.log(data);
          },
          error => {
            console.log(error);
            this.loading = false;
          }
        );
    } else{
      console.log('Form not valid.');
      this.loading = false;
    }
  }

  getClientManagementData() {
    if(this.authService.getCurrentUser()){
      return this.clientmanagementService
      .getClientByDocument(this.authService.getCurrentUser().document)
      .subscribe(
        data => {
          this.client = data.result;
        },
        error => {
          console.log(error);
        }
      );
    }
  }

}