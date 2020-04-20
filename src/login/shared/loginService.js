import Configuration from '../../config';

class LoginService {
    constructor(){
        this.config = new Configuration();
    }

    async login(userData) {
        // console.log("ItemService.createItem():");
        console.log(userData);
        return fetch(this.config.LOGIN_URL, {
          method: "POST",
          headers: {
                "Content-Type": "application/json"
            },
          body: JSON.stringify(userData)
        })
          .then(response => {
           if (!response.ok) {
                this.handleResponseError(response);
            }
            return response.json();
          })
          .catch(error => {
            this.handleError(error);
          });
    }

    handleResponseError(response) {
      throw new Error("HTTP error, status = " + response.status);
    }
    handleError(error) {
        console.log(error.message);
    }

}
export default LoginService;