import Form from "./Form";
import TextInput from "./TextInput";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContex";

export default function SignupForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState();
    const [error, setError] = useState();

    const { login } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError("");
            setLoading(false);
            await login(email, password);
            navigate("/");
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError("Failed to login");
        }
    }

    return (
        <Form style={{ height: "330px" }} onSubmit={handleSubmit}>
            <TextInput
                type="email"
                placeholder="Enter email"
                icon="alternate_email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextInput
                type="password"
                placeholder="Enter password"
                icon=" lock "
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="button" disabled={loading} >
                <span>Submit now</span>
            </Button>

            {error && <p className="error">{error}</p>}
            <div className="info">
                Don't have an account?
                <Link to="/signup"> Signup</Link> instead
            </div>
        </Form>
    );
}
