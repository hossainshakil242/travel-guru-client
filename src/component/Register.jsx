import React, { useContext } from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/ContextProvider';

const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleCreateUser = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confrim_password = form.confrim_password.value;

        console.log(name, email, password, confrim_password);

        createUser(email, password)
            .then(result => {
                const newUser = result.user;
                console.log(newUser);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <Container>
            <Form onSubmit={handleCreateUser} className='w-50 mx-auto p-4 border border-secondary primary-font fw-medium'>
                <Form.Label className='fs-3 fw-bold'>Create an account</Form.Label>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Full Name" />
                </Form.Group>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confrim Password</Form.Label>
                    <Form.Control type="password" name='confrim_password' placeholder="Confrim Password" required />
                </Form.Group>
                <div className='d-md-flex justify-content-between'>
                    <Form.Check type="checkbox" name='checkbox' className='mb-sm-2' label="Remember Me" />
                    <Link to='/'><small>Forget Password</small></Link>
                </div>
                <div className="d-grid  text-center mt-sm-2">
                    <button className="btn btn-warning text-dark fw-medium" type="submit">Button</button>
                </div>

                <div className='text-center my-3'>
                    <span>Already have an account?</span> <Link className='text-warning' to='/login'>Login</Link>
                </div>

            </Form>

        </Container>
    );
};

export default Register;