export class User{
    constructor(API, $http){
        this.apiUser = `${API}/account`
        this.$http = $http;
    }
    get(){
        return this.$http.get(this.apiUser);
    }
}