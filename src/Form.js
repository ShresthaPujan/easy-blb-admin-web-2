import React from 'react'

export default function Form() {
  return (
    <div>
      <div class="container login-container">
            <div class="row">
                <div class="col-md-6 login-form-1">
                    <img src="img/logo.png"/>
                    <h5>Log in</h5>
                    <p>Enter your valid credentials below</p>
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Username</label>
                            <input type="text" class="form-control" placeholder="Enter your username" value="" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" placeholder="Enter your password" value="" />
                        </div>
                        <div class="form-group">
                            <span class="fa-flip-vertical" style="display: inline-block;">
                        <i class="fa fa-download fa-rotate-270"></i>
                    </span>
                <input type="submit" class="btnSubmit" value="Login" />
                        </div>
                        </form>
                </div>
            </div>
        </div>
    </div>
  )
}
