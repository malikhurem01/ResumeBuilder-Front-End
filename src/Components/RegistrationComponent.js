import { useState } from "react";
import services from "../Services/authService";

const RegistrationComponent = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegistrationSubmit = async () => {
        await services.register({firstName, lastName, email, password}).then(res => console.log(res)).catch(err => console.log(err));
    }

    return <div>
    <input type="text" value={firstName} onChange={ev => {
        setFirstName(ev.target.value);
      }} placeholder="First Name:"/>
    <input type="text" value={lastName} onChange={ev => {
        setLastName(ev.target.value);
      }} placeholder="Last Name:"/>
      <input type="email" value={email} onChange={ev => {
        setEmail(ev.target.value);
      }} placeholder="Email:"/>
      <input type="password" value={password} onChange={ev => {
        setPassword(ev.target.value);
      }} placeholder="Password:"/>
      <button onClick={handleRegistrationSubmit}>Login</button>
    </div>
}

export default RegistrationComponent;