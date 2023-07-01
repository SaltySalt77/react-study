import useInput from "../hooks/use-input";

const isNotEmpty = (value) => {
  return value.trim() !== "";
};

const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const firstName = useInput(isNotEmpty);

  const lastName = useInput(isNotEmpty);

  const email = useInput(isEmail);

  const isAllValid =
    !firstName.hasError && !lastName.hasError && !email.hasError;

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!isAllValid) {
      return;
    }

    firstName.reset();
    lastName.reset();
    email.reset();
  };

  const firstNameClasses = firstName.hasError
    ? "form-control invalid"
    : "form-control";

  const lastNameClasses = lastName.hasError
    ? "form-control invalid"
    : "form-control";

  const emailClasses = email.hasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName.value}
            onChange={firstName.valueChangeHandler}
            onBlur={firstName.inputBlurHandler}
          />
          {firstName.hasError && (
            <p className="error-text">PLZ enter valid firstName.</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName.value}
            onChange={lastName.valueChangeHandler}
            onBlur={lastName.inputBlurHandler}
          />
          {lastName.hasError && (
            <p className="error-text">PLZ enter valid lastName.</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="email"
          value={email.value}
          onChange={email.valueChangeHandler}
          onBlur={email.inputBlurHandler}
        />
        {email.hasError && <p className="error-text">PLZ enter valid email.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
