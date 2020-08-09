'use strict';

function validateEmail(email){
  return email.match(/@/) ?
  email:
  new Error(`Invalid email address: ${email}`);
}

const email = "";

const validatedEmail = validateEmail(email);
if(validatedEmail instanceof Error){
  console.error(validatedEmail.message);
} else {
  console.log(`This is the email of right format: ${validatedEmail}`);
}
