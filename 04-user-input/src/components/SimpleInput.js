// import { useState } from "react";
// import useInput from "../hooks/use-input";

// const SimpleInput = (props) => {
//   const {
//     value: enteredName,
//     hasError: nameInputHasError,
//     valueChangeHandler: nameChangeHandler,
//     inputBlurHandler: nameInputBlurHandler,
//   } = useInput((value) => {
//     return value.trim() !== "";
//   });

//   const enteredNameIsValid = enteredName.trim() !== "";
//   const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

//   // const nameInputChangeHandler = (event) => {
//   //   if (!enteredNameTouched) {
//   //     setEnteredNameTouched(true);
//   //   }

//   //   setEnteredName(event.target.value);

//   //   // else if (!enteredNameIsValid) {
//   //   //   setEnteredNameIsValid(true);
//   //   // }
//   // };

//   // const nameInputBlurHandler = (event) => {
//   //   setEnteredNameTouched(true);
//   // };

//   const formSubmissionHandler = (event) => {
//     if (!enteredNameTouched) {
//       setEnteredNameTouched(true);
//     }

//     event.preventDefault();
//     if (!enteredNameIsValid) {
//       return;
//     }

//     console.log(enteredName);

//     setEnteredName("");

//     setEnteredNameTouched(false);
//   };

//   const nameInputClasses = !nameInputIsInvalid
//     ? "form-control"
//     : "form-control invalid";

//   return (
//     <form onSubmit={formSubmissionHandler}>
//       <div className={nameInputClasses}>
//         <label htmlFor="name">Your Name</label>
//         <input
//           type="text"
//           id="name"
//           onChange={nameInputChangeHandler}
//           onBlur={nameInputBlurHandler}
//           value={enteredName}
//         />
//       </div>
//       {nameInputIsInvalid && (
//         <p className="error-text">Name must not be empty.</p>
//       )}
//       <div className="form-actions">
//         <button>Submit</button>
//       </div>
//     </form>
//   );
// };

// export default SimpleInput;
