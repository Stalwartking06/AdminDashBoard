import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [passw1, setPassw1] = useState("");
  const [passw2, setPassw2] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegx.test(email)) {
      setError("Invalid Email Address");
      return;
    }
    const phoneRegx = /^\d{10}$/;
    if (!phoneRegx.test(phone)) {
      setError("Invalid Email Address");
      return;
    }

    if (passw1.length < 8) {
      setError("Pass Must be 8");
      return;
    }

    if (passw1 !== passw2) {
      setError("Pass do not match");
      return;
    }

    const response = await fetch("http://localhost:3001/Signup", {});
  };
}
