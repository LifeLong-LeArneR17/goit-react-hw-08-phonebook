import React from 'react'
import "./RegisterPage.css"
export default function RegisterPage() {
  return (
    <div className='Container'>
        <div className="signup">
          <form>
            <input type="text" name="txt" placeholder="User name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="pswd" placeholder="Password" required minLength={7} />
            <button>Sign up</button>
          </form>
        </div>
    </div>
  )
}
