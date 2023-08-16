//  function validateEmail(values) {
//   const errors = {}

//   if (!values.email) {
//     errors.email = 'Required'
//   } else if (!i.test(values.email)) {
//     errors.email = 'Invalid email address'
//   }

//   return errors
// }
const validateEmail=email=> {
  let emailregx= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return emailregx.test(String(email).toLowerCase());
            
}
const validatePassword=password=>{
  let regx=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/  ;
  return regx.test(password);
}

 

export{ validateEmail,validatePassword};
  // validateEmail,validatePassword;