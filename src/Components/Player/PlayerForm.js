import React from 'react';

const PlayerForm = props => {
  const { submitPlayer } = props;
  const firstName = React.createRef();
  const lastName = React.createRef();
  const email = React.createRef();
  const phone = React.createRef();

  const manageSubmit = (event) => {
    event.preventDefault();
    const player = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
      phone: phone.current.value,
    }
    submitPlayer(player)
  }

  return (
    <div className="row">
      <form className="col s12" onSubmit={ manageSubmit }>
        <div className="row">
          <div className="input-field col s6">
            <input id="firstName" ref={firstName} type="text" />
            <label htmlFor="first_name">First Name</label>
          </div>
          <div className="input-field col s6">
            <input id="lastName" ref={lastName} type="text" />
            <label htmlFor="lastName">Last Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input id="email" type="email" ref={email} className="validate" />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field col s6">
            <input id="phone" type="text" ref={phone} className="validate" />
            <label htmlFor="phone">Phone</label>
          </div>
          <button className="btn waves-effect waves-light" type="submit" name="action">Submit
          </button>
        </div>
      </form>

    </div>
  );
};

export default PlayerForm;
