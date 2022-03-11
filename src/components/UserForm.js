import React, {useState} from 'react';

const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");

    const [lastname, setLastname] = useState("");

    const [email, setEmail] = useState("");
    

    const [password, setPassword] = useState("");
    

    const [confirmPassword, setConfirmPassword] = useState("");
    
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname,lastname, email, password };
        console.log("Welcome", newUser);
    };

    const lengthValidator = (input,num) => {
        return input.length >= num;
    }

    const passwordValidator = () => {
        if ( confirmPassword == password  ){
            return true
        }
        return false
    }

    return(
        <div className="w-55 p-3 border border-dark mx-auto my-3">

        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstname(e.target.value) } value = {firstname} />
                {lengthValidator(firstname, 5) ? "" : <span className="alert-danger">You need at least 5 characters.</span>}
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) } value = {lastname}/>
                {lengthValidator(lastname, 5) ? "" : <span className="alert-danger">You need at least 5 characters.</span>}

            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } value = {email}/>
                {lengthValidator(email, 5) ? "" : <span className="alert-danger">You need at least 5 characters.</span>}
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } value = {password}/>
                {lengthValidator(password, 5) ? "" : <span className="alert-danger">You need at least 5 characters.</span>}

            </div>
            <div>
                <label> Confirm Password: </label>
                <input type="text" onChange={ (e) => setConfirmPassword(e.target.value) } value = {confirmPassword} />
                {passwordValidator() ? "" : <span className="alert-danger"> Passwords don't match</span>}
            </div>
            <input type="submit" value="Create User" />
        </form>
        
        <h2>First Name: {firstname}</h2>
        <h2>Last Name: {lastname}</h2>
        <h2>Email: {email}</h2>
        <h2>Password: {password}</h2>
        <h2>Confirm Password: {confirmPassword}</h2>
        </div>
    );
};
    
export default UserForm;
