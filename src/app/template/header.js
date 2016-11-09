class HeaderController {
  /** @ngInject */
  constructor(Auth, $rootScope) {
    this.Auth = Auth;
    this.$rootScope = $rootScope;
  }
  $onInit() {
    this.Auth.getUser().then(user => {
      this.user = user.data;
    });
  }
  show() {
    this.$rootScope.$broadcast('main');
  }
  logout() {
    this.Auth.logout();
  }
}

export const header = {
  templateUrl: 'app/template/header.html',
  controller: HeaderController
};
