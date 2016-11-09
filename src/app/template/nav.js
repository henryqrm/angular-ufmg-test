class NavController {
  constructor($rootScope) {
    this.hidden = false;
    $rootScope.$on('main', () => {
      this.hidden = !this.hidden;
    });
  }

}
export const nav = {
  templateUrl: 'app/template/nav.html',
  controller: NavController
};
