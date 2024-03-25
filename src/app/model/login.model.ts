export class loginmodel{
    login_Id: number;
    login_email: String;
    login_pwd: String;
    role:String;
    filepath:String;

    constructor() {
      this.login_Id = 0; // Initialize the property in the constructor
      this.login_email ='';
      this.login_pwd='';
      this.role = '';
      this.filepath = '';
    }
}