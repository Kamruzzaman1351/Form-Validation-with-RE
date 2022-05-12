class UI {
    constructor() {        
        this.userTableDiv = document.getElementById("user-table");
        this.registrationFDivUI = document.getElementById("registration");
        this.formUI = document.querySelector("form");
    }

    showUser() {
        const users = Storage.getUsers();
        if(users.length !== 0) {
            this.userTable();
            let output = '';
            users.forEach(user => {
                output += `
                <tr>
                    <td>${user.name}</td>
                    <td>${user.zip}</td>
                    <td>${user.email}</td>
                    <td>${user.phone}</td>
                </tr>
                
                `
            });
            document.getElementById("show-user").innerHTML = output;
        } else {
            this.userTableDiv.innerHTML = `
                <h3 class="text-center">No User Yet!</h3>
            `
        }
        
    }

    userTable() {
        this.userTableDiv.innerHTML = `
            <div class="row">
                <div class="col-md-8 mx-auto">
                    <h2 class="text-center bg-primary text-white py-2">User List</h2>
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">User Name</th>
                            <th scope="col">Zip Code</th>
                            <th scope="col">User Email Address</th>
                            <th scope="col">User Phone</th>
                            </tr>
                        </thead>
                        <tbody id="show-user">
                            
                        </tbody>
                        </table>
                </div>
            </div>
        `
    }
    showSuccessMsg(msg) {
        const successDiv = document.createElement("div");
        successDiv.className = "alert alert-success";
        successDiv.appendChild(document.createTextNode(msg));
        this.registrationFDivUI.insertBefore(successDiv, this.formUI);
        setTimeout(() => {
            successDiv.remove();
        },2500);
    }
}