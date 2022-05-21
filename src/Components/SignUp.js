import react from "react";




function SignUp() {
  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <div>
          <input type="text" name="firstname" placeholder="FirstName" />
        </div>
        <div>
          <input type="text" name="secondname" placeholder="secondName" />
        </div>
        <div>
          <input type="email" name="emailaddress" placeholder="emailAddress" />
        </div>
        <div>
          <button>Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp;