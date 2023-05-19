
import React, { useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';

const Form = () => {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));

  const componentStyle = {
    position: 'absolute',
    top: matchesSm ? '450px' : '100px',
    left: matchesSm ? '55px' : '830px',
    width: matchesSm ? '385px' : '590px',
    height: matchesSm ? '1150px' : '845px',
    background: '#FFFFFF',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'padding-box',
    boxShadow: '0px 14px 27px #00000017',
    borderRadius: '13px',
    opacity: '1',
    padding: '20px',
  };

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [company, setCompany] = useState('');
  const [state, setState] = useState('California');
  const [description, setDescription] = useState('Installer');
  const [distributor, setDistributor] = useState('Aerotact');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [promotionsChecked, setPromotionsChecked] = useState(false);

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    company: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = {};
    if (firstName.trim() === '') {
      formErrors.firstName = 'First Name is required';
    }
    if (lastName.trim() === '') {
      formErrors.lastName = 'Last Name is required';
    }
    if (email.trim() === '') {
      formErrors.email = 'Email is required';
    }
    if (contact.trim() === '') {
      formErrors.contact = 'Contact Number is required';
    }
    if (company.trim() === '') {
      formErrors.company = 'Company is required';
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setFirstName('');
      setLastName('');
      setEmail('');
      setContact('');
      setCompany('');
      setState('California');
      setDescription('Installer');
      setDistributor('Aerotact');
      setAdditionalInfo('');
      setPromotionsChecked(false);
    }
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleContactChange = (e) => {
    setContact(e.target.value);
  };

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDistributorChange = (e) => {
    setDistributor(e.target.value);
  };

  const handleAdditionalInfoChange = (e) => {
    setAdditionalInfo(e.target.value);
  };

  const handlePromotionsChange = (e) => {
    setPromotionsChecked(e.target.checked);
  };

  const labelStyle = {
    marginBottom: '5px',
  };
  const inputStyle = {
    width: matchesSm ? '100%' : '70%',
    borderRadius: '5px',
    padding: '5px',
    border: '1px solid #ccc',
  };
  const inputStyle2 = {
    width: matchesSm ? '100%' : '174%',
    borderRadius: '5px',
    padding: '5px',
    border: '1px solid #ccc',
  };
  const inputStyle3 = {
    width: matchesSm ? '100%' : '132%',
    borderRadius: '5px',
    padding: '5px',
    border: '1px solid #ccc',
  };


  const submit = {
    width: '200px',
    height: '45px',
    border: '#F26621',
    background: '#F26621 0% 0% no-repeat padding-box',
    borderRadius: '9px',
    opacity: '1',
    margin: '0 auto',
    marginTop: matchesSm ? '35px' : '20px', 
  };

  const formRowStyle = {
    display: 'flex',
    marginBottom: '10px',
  };

  const formColStyle = {
    marginRight: matchesSm ? '0' : '10px',
  };

  const connectTextStyle = {
    fontSize: matchesSm ? '20px' : '30px', 
  };

  const ForTextStyle = {
    fontSize: matchesSm ? '13px' : '20px', 
  };

  return (
    
    <div style={componentStyle}>
      <form onSubmit={handleSubmit}>
        <p className='connect' style={connectTextStyle}>
          Connect with us
        </p>
        <p className='labels2' style={ForTextStyle}>
          for outstanding protective overlaminates
        </p>

        {matchesSm ? (
          <>
            <div style={formRowStyle}>
              <div>
                <label className='labels' htmlFor='firstName'>
                  First Name
                </label>
                <br />
                <input style={inputStyle} type='text' id='firstName' value={firstName}
              onChange={handleFirstNameChange} />
              <br/>
            {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName}</span>}
        </div>
            </div>
            <div style={formRowStyle}>
              <div>
                <label className='labels' htmlFor='lastName'>
                  Last Name
                </label>
                <br />
                <input style={inputStyle} type='text' id='lastName' value={lastName}
              onChange={handleLastNameChange}
            />
            <br/>
            {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName}</span>}
          </div>
            </div>
            <div style={formRowStyle}>
              <div>
                <label className='labels' htmlFor='email'>
                  Email
                </label>
                <br />
                <input style={inputStyle} type='text' id='email' value={email} onChange={handleEmailChange} />
            <br/>
            {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
          </div>
            </div>
            <div style={formRowStyle}>
              <div>
                <label className='labels' htmlFor='contact'>
                  Contact Number
                </label>
                <br />
                <input style={inputStyle} type='number' id='contact' value={contact}
              onChange={handleContactChange}
            />
            <br/>
            {errors.contact && <span style={{ color: 'red' }}>{errors.contact}</span>}
          </div>
            </div>
            <div style={formRowStyle}>
              <div>
                <label className='labels' htmlFor='company'>
                  Company
                </label>
                <br />
                <input style={inputStyle} type='text' id='company' value={company}
              onChange={handleCompanyChange}
            />
            <br/>
            {errors.company && <span style={{ color: 'red' }}>{errors.company}</span>}
          </div>
            </div>
            <div style={formRowStyle}>
              <div>
                <label className='labels' htmlFor='state'>
                  State
                </label>
                <br />
                <select style={inputStyle} id='state'>
                  <option value='California'>California</option>
                  <option value='state2'>State 2</option>
                </select>
              </div>
            </div>
          </>
        ) : (
          <>


            
            <div style={formRowStyle}>
              <div style={formColStyle}>
                <label className='labels' htmlFor='firstName'>
                  First Name
                </label>
                <br />
                <input style={inputStyle} type='text' id='firstName' value={firstName}
              onChange={handleFirstNameChange} />
              <br/>
            {errors.firstName && <span style={{ color: 'red' }}>{errors.firstName}</span>}
        </div>
              <div>
                <label className='labels' htmlFor='lastName'>
                  Last Name
                </label>
                <br />
                <input style={inputStyle} type='text' id='lastName' value={lastName}
              onChange={handleLastNameChange}
            />
            <br/>
            {errors.lastName && <span style={{ color: 'red' }}>{errors.lastName}</span>}
          </div>
            </div>
            <div style={formRowStyle}>
              <div style={formColStyle}>
                <label className='labels' htmlFor='email'>
                  Email
                </label>
                <br />
                <input style={inputStyle} type='text' id='email' value={email} onChange={handleEmailChange} />
            <br/>
            {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
          </div>
              <div>
                <label className='labels' htmlFor='contact'>
                  Contact Number
                </label>
                <br />
                <input style={inputStyle} type='number' id='contact' value={contact}
              onChange={handleContactChange}
            />
            <br/>
            {errors.contact && <span style={{ color: 'red' }}>{errors.contact}</span>}
          </div>
            </div>
            <div style={formRowStyle}>
              <div style={formColStyle}>
                <label className='labels' htmlFor='company'>
                  Company
                </label>
                <br />
                <input style={inputStyle} type='text' id='company' value={company}
              onChange={handleCompanyChange}
            />
            <br/>
            {errors.company && <span style={{ color: 'red' }}>{errors.company}</span>}
          </div>
              <div>
                <label className='labels' htmlFor='state'>
                  State
                </label>
                <br />
                <select style={inputStyle} id='state'>
                  <option value='California'>California</option>
                  <option value='state2'>State 2</option>
                </select>
              </div>
            </div>
          </>
        )}


        <div style={formRowStyle}>
          <div style={formColStyle}>
            <label className='labels' htmlFor='description' style={labelStyle}>
              How would you describe yourself?
            </label>
            <br />
            <select style={inputStyle2} id='description' value={description} onChange={handleDescriptionChange}>
              <option value='Installer'>Installer</option>
              <option value='Other Option'>Other Option</option>
            </select>
          </div>
        </div>

        <div style={formRowStyle}>
          <div style={formColStyle}>
            <label className='labels' htmlFor='distributor' style={labelStyle}>
              Preferred Distributor:
            </label>
            <br />
            <select style={inputStyle2} id='distributor' value={distributor} onChange={handleDistributorChange}>
              <option value='Aerotact'>Aerotact</option>
              <option value='Other Option'>Other Option</option>
            </select>
          </div>
        </div>

        <div style={formRowStyle}>
          <div style={formColStyle}>
            <label className='labels' htmlFor='additionalInfo' style={labelStyle}>
              Additional Information
            </label>
            <br />
            <textarea
              style={inputStyle3}
              id='additionalInfo'
              rows='4'
              cols='50'
              value={additionalInfo}
              onChange={handleAdditionalInfoChange}
            />
          </div>
        </div>

        <div style={formRowStyle}>
          <input
            type='checkbox'
            id='promotions'
            style={{ width: '20px', height: '20px' }}
            checked={promotionsChecked}
            onChange={handlePromotionsChange}
          />
          <label htmlFor='promotions' className='labels' style={{ marginLeft: '7px', width: '90%' }}>
            I'd like to receive promotions, product information, and service offers from Avery Dennison.
          </label>
        </div>

        <div style={formRowStyle}>
          <button style={submit} type='submit'>
            <p className='inquireText' style={{ marginLeft: '50px', fontSize: matchesSm ? '14px' : 'inherit' }}>
              Submit
            </p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
