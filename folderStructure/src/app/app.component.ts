import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<div class="container">
              <div class="row">
                <div class="col-md-6">
                  <form>
                    <div class="form-group">
                      <label for="text">User Name</label>
                      <input type="text" class="form-control" id="text" placeholder="User Name">
                    </div>
                    <button type="submit" class="btn btn-lg btn-primary" id="login">Login</button>
                  </form>
             </div> 
           </div>
          </div>`,
 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
