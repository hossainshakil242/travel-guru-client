import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/ContextProvider';

const Login = () => {
    const [user, setUser] = useState(null);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const { logIn,signInWithGoogle } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(errro.message);
            })
    }
    const handleSignInWithGoogle=()=>{
        signInWithGoogle()
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error=>{
            console.log(error.message);
        })
    }


    return (
        <Container className='pt-5'>

            <Form onSubmit={handleLogin} className='w-50 mx-auto p-4 border border-secondary primary-font fw-medium'>
                <Form.Label className='fs-3 fw-bold'>Login</Form.Label>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <div className='d-md-flex justify-content-between'>
                    <Form.Check type="checkbox" className='mb-sm-2' label="Remember Me" />
                    <Link to='/'><small>Forget Password</small></Link>
                </div>


                <div className="d-grid text-center mt-sm-2">
                    <button className="btn btn-warning text-dark fw-medium" type="submit">Button</button>
                </div>
                <div className='fw-medium text-center pt-3'>
                    <span>Don't have an account?</span> <Link className='text-warning' to='/register'>Create an account</Link>
                </div>
            </Form>
            <p className='text-center my-3 fw-bold'>Or</p>
            <div className="d-grid  w-25 mx-auto  gap-3" >
                <Button variant="outline-warning text-black fw-medium" onClick={handleSignInWithGoogle}>
                    Countinue with Google
                </Button>
                <Button variant="outline-warning text-black fw-medium " onClick={() => console.log("Warning")}>
                    Countinue with Github
                </Button>
            </div>

        </Container>
    );
};

export default Login;