import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon
} from 'mdb-react-ui-kit';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    let errors = {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
    // Check name
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    // Check email
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = 'Invalid email format';
    }

    // Check password
    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    } else if (!passwordRegex.test(formData.password.trim())) {
      errors.password =
        'Password must be at least 8 characters long, contain at least one letter and one number';
    }

    // Check confirmPassword
    if (!formData.confirmPassword.trim()) {
      errors.confirmPassword = 'Confirm password is required';
    } else if (formData.confirmPassword.trim() !== formData.password.trim()) {
      errors.confirmPassword = 'Passwords do not match';
    }

    setFormErrors(errors);

    // If there are no errors, submit the form
    if (!Object.values(errors).some((error) => error !== '')) {
      console.log('Form submitted!');

      
      // TODO: Submit the form
    }
  };

  return (
    <MDBContainer fluid>
      <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
              <p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>Sign up</p>
              <form onSubmit={handleFormSubmit}>
                <div className='d-flex flex-row align-items-center mb-4'>
                  <MDBIcon fas icon='user' className='me-3' size='lg' />
                  <MDBInput
                    label='Your Name'
                    id='form1'
                    name='name'
                    type='text'
                    className='w-100'
                    onChange={handleInputChange}
                    value={formData.name}
                    error={formErrors.name}
                  />
                </div>

                <div className='d-flex flex-row align-items-center mb-4'>
                  <MDBIcon fas icon='envelope' className='me-3' size='lg' />
                  <MDBInput
                    label='Your Email'
                    id='form2'
                    name='email'
                    type='email'
                    className='w-100'
                    onChange={handleInputChange}
                    value={formData.email}
                    error={formErrors.email}
                  />
                </div>


                    <div className='d-flex flex-row align-items-center mb-4'>
                      <MDBIcon fas icon='lock' className='me-3' size='lg' />
                      <MDBInput
                        label='Password'
                        id='form3'
                        name='password'
                        type='password'
                        className='w-100'
                        onChange={handleInputChange}
                        value={formData.password}
                        error={formErrors.password}
                      />
                    </div>
        
                    <div className='d-flex flex-row align-items-center mb-4'>
                      <MDBIcon fas icon='lock' className='me-3' size='lg' />
                      <MDBInput
                        label='Confirm Password'
                        id='form4'
                        name='confirmPassword'
                        type='password'
                        className='w-100'
                        onChange={handleInputChange}
                        value={formData.confirmPassword}
                        error={formErrors.confirmPassword}
                      />
                    </div>
        
                    <MDBBtn
                      className='mx-0 mb-4'
                      type='submit'
                      color='primary'
                      style={{ borderRadius: '10px' }}
                    >
                      Sign up
                    </MDBBtn>
                  </form>
                </MDBCol>
        
                <MDBCol md='10' lg='6' className='order-1 order-lg-2'>
                  <MDBCardImage
                    src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp'
                    alt='MDBCard image cap'
                    top
                    hover
                    overlay='white-slight'
                    style={{ borderRadius: '25px' }}
                  />
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
        );
      }
      
      export default Register;