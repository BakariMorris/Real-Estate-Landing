import { z } from 'zod';

// Lead capture form validation
export const leadCaptureSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),
  
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .max(100, 'Email must be less than 100 characters'),
  
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .max(15, 'Phone number must be less than 15 digits')
    .regex(/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number'),
  
  propertyType: z.enum(['buy', 'sell', 'valuation', 'consultation'], {
    message: 'Please select what you\'re interested in',
  }),
  
  message: z
    .string()
    .optional()
    .refine((val) => !val || val.length <= 500, {
      message: 'Message must be less than 500 characters',
    }),
});

export type LeadCaptureFormData = z.infer<typeof leadCaptureSchema>;

// Contact form validation (for full contact forms)
export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(25, 'First name must be less than 25 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'First name can only contain letters, spaces, hyphens, and apostrophes'),
  
  lastName: z
    .string()
    .min(2, 'Last name must be at least 2 characters')
    .max(25, 'Last name must be less than 25 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Last name can only contain letters, spaces, hyphens, and apostrophes'),
  
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .max(100, 'Email must be less than 100 characters'),
  
  phone: z
    .string()
    .optional()
    .refine((val) => !val || (val.length >= 10 && /^[\+]?[1-9][\d]{0,15}$/.test(val)), {
      message: 'Please enter a valid phone number',
    }),
  
  propertyType: z.enum(['buying', 'selling', 'investing', 'consultation', 'other'], {
    message: 'Please select what you\'re interested in',
  }),
  
  message: z
    .string()
    .optional()
    .refine((val) => !val || val.length <= 1000, {
      message: 'Message must be less than 1000 characters',
    }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Newsletter subscription validation
export const newsletterSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .max(100, 'Email must be less than 100 characters'),
  
  interests: z
    .array(z.enum(['buying', 'selling', 'investing', 'market_updates', 'tips']))
    .optional()
    .default([]),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;

// Property valuation form validation
export const propertyValuationSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .regex(/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number'),
  
  propertyAddress: z
    .string()
    .min(10, 'Please enter a complete address')
    .max(200, 'Address must be less than 200 characters'),
  
  propertyType: z.enum(['house', 'apartment', 'condo', 'townhouse', 'land', 'commercial'], {
    message: 'Please select property type',
  }),
  
  bedrooms: z
    .number()
    .min(0, 'Bedrooms cannot be negative')
    .max(20, 'Please enter a reasonable number of bedrooms')
    .optional(),
  
  bathrooms: z
    .number()
    .min(0, 'Bathrooms cannot be negative')
    .max(20, 'Please enter a reasonable number of bathrooms')
    .optional(),
  
  squareFootage: z
    .number()
    .min(100, 'Square footage must be at least 100')
    .max(50000, 'Please enter a reasonable square footage')
    .optional(),
  
  yearBuilt: z
    .number()
    .min(1800, 'Year built seems too old')
    .max(new Date().getFullYear() + 2, 'Year built cannot be in the future')
    .optional(),
  
  timeline: z.enum(['immediate', 'within_month', 'within_3_months', 'within_6_months', 'exploring'], {
    message: 'Please select your timeline',
  }),
  
  additionalInfo: z
    .string()
    .max(500, 'Additional information must be less than 500 characters')
    .optional(),
});

export type PropertyValuationFormData = z.infer<typeof propertyValuationSchema>;

// Form submission response types
export interface FormSubmissionResponse {
  success: boolean;
  message: string;
  id?: string;
  errors?: Record<string, string[]>;
}

// Utility functions for form handling
export const formatPhoneNumber = (phone: string): string => {
  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, '');
  
  // Format as (XXX) XXX-XXXX for US numbers
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  
  // Format with country code if 11 digits and starts with 1
  if (digits.length === 11 && digits.startsWith('1')) {
    return `+1 (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
  }
  
  return phone; // Return original if doesn't match expected formats
};

export const validateField = <T extends Record<string, any>>(
  schema: z.ZodType<T>,
  fieldName: keyof T,
  value: any
): string | null => {
  try {
    // For individual field validation, we'll just validate the entire object
    // with only the field we care about
    const testObject = { [fieldName]: value } as Partial<T>;
    schema.safeParse(testObject);
    return null;
  } catch (error) {
    if (error instanceof z.ZodError) {
      return error.issues[0]?.message || 'Invalid value';
    }
    return 'Validation error';
  }
};