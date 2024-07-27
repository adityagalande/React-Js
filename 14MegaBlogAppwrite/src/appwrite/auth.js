import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

//Here we created classes just because we do not need dependancy on appwrite, 
//may be we use firebase in future then we only need to do changes here insted 
//of doing changes in whole project.
export class AuthService {
    client = new Client();
    account;

    //If you want to use firebase services insted of appwrite then only need to make changes in below constructor only
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrlEndpoint)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    //Here we destructured object because we will get object as input for this method
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);

            if (userAccount) {
                // return userAccount;
                //Call Login method to directly login user after successful signup
                return this.loginAccount({email, password})
            } else {
                return userAccount;
            }

        } catch (error) {
            throw error
        }
    }

    async loginAccount({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

};

//Here we created object of class 
const authService = new AuthService();

//Here we exported object of class, thats why we no need to create object every time where ever we use this class.
// we can directly do this (authService.methodName())
export default authService;