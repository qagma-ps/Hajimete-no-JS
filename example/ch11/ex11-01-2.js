'use strict';

function validateEmail(email){
  return email.match(/@/) ?
  email:
  new Error(`Invalid email address: ${email}`);
}

const email = "aaaaaa.com";

try{
  const validatedEmail = validateEmail(email);
  console.log(validatedEmail);
  if(validatedEmail instanceof Error){
    console.error(validatedEmail.message);
  } else {
    console.log(`Email address of the right format: ${validatedEmail}`);
  }
} catch(err){
  console.error(`Error: ${err.message}`);
}
