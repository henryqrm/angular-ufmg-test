class HeaderController {
  constructor() {
    this.name = 'Henrique';
    this.email = 'email.henrique.rm@gmail.com';
  }
  showMain() {
    console.log('oculta menu');
  }
}
export const header = {
  templateUrl: 'app/template/header.html',
  controller: HeaderController
};