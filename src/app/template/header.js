class HeaderController {
  constructor(Auth) {
    this.Auth = Auth;
  }
  $onInit() {
    this.Auth.getUser().then(user => {
      this.user = user.data;
    })
  }
  logout() {
    this.Auth.logout();
  }
}

export const header = {
  templateUrl: 'app/template/header.html',
  controller: HeaderController
};