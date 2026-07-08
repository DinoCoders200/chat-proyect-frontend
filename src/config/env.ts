import { z } from 'zod';

// Define the schema for environment variables
const envSchema = z.object({
  VITE_API_URL: z.string().url('VITE_API_URL must be a valid URL string'),
});

// Validate import.meta.env
const parsedEnv = envSchema.safeParse(import.meta.env);

if (!parsedEnv.success) {
  const formattedErrors = parsedEnv.error.format();
  console.error('Invalid environment variables:', formattedErrors);
  throw new Error(`Configuration error: Missing or invalid environment variables. Check your .env file. Error details: ${JSON.stringify(formattedErrors)}`);
}

// Export the validated environment variables
export const env = parsedEnv.data;
