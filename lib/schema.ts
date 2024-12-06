import { z } from 'zod';

export const signupSchema = z.object({
  businessName: z
    .string()
    .min(2, 'Business name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phoneNumber: z
    .string()
    .regex(/^\+\d{13}$/, 'Please enter a valid phone number eg:+123456789'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
  referralSource: z.string().optional(),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms and policies',
  }),
});

export type SignupFormData = z.infer<typeof signupSchema>;
