'use server';

import { z } from 'zod';
import { State } from './actions.types';

const CreateAccountSchema = z.object({
    email: z.string().min(1, { message: "This field has to be filled." }).email("This is not a valid email."),
  });

export async function createAccount(prevState: State, formData: FormData){
  // Validate form fields using Zod
  const validatedFields = CreateAccountSchema.safeParse({
    email: formData.get('email'),
  });
 
  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Incorrect Fields. Failed to Create Account.',
    };
  }

  const { email } = validatedFields.data;
  console.log("Account created for email: " + email);

  return {
    errors: undefined,
    message: 'success',
  };
}