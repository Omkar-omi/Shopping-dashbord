import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";

const UserLogin = () => {
  const { signin, user } = UserAuth();

  // hard coded login details for easy access
  const [email, setEmail] = useState('prasad@test.com');
  const [password, setPassword] = useState('123456');
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/userlogin")
    }
  }, [])

  const handelLogin = async (e) => {
    e.preventDefault()
    setError('')
    setIsPending(true)
    try {
      await signin(email, password)
      navigate("/Shoppinghome")
      setIsPending(false)
    } catch (e) {
      setError("Email or Password dosen't match")
      console.log(e.message);
      setIsPending(false)
    }
  }
  return (
    <div className="container">
      <form className="d-flex justify-content-center mt-5 p-5" onSubmit={handelLogin} >
        <div className="col-lg-4 border p-5 rounded">
          <div className="d-flex flex-column align-items-center">
            <div className="fs-1 text-primary">Login</div>
            <div className="text-danger fs-5">{error}</div>
          </div>
          <div className="d-flex flex-column justify-content-center mt-4">
            <label className="text-primary">Email :</label>
            <input className="rounded border border-2" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="d-flex flex-column justify-content-center mt-4">
            <label className="text-primary">Password:</label>
            <input className="rounded border border-2" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="d-flex flex-column justify-content-center mt-4 mb-4">
            {!isPending && <button className="btn btn-primary">Login</button>}
            {isPending && <button disabled>Logging in...</button>}
          </div>
        </div>
      </form >
    </div>
  );
}

export default UserLogin;