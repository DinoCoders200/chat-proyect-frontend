import axios from 'axios';
import { env } from '@/config/env';

/**
 * Public Axios instance.
 * Used for endpoints that do NOT require authentication (e.g., login, register).
 */
export const publicApi = axios.create({
  baseURL: env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Private Axios instance.
 * Automatically injects the Authorization Bearer token into headers.
 * Used for endpoints requiring authentication (e.g., channels, messages, user profile).
 */
export const privateApi = axios.create({
  baseURL: env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to dynamically inject the bearer token
privateApi.interceptors.request.use(
  (config) => {
    // Look for the token in localStorage (or integrate with a Zustand store in the future)
    const token = localStorage.getItem('auth_token');

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor to handle global API errors (e.g., 401 Unauthorized)
privateApi.interceptors.response.use(
  (response) => response,
  (error) => {
    // If the server returns a 401, redirect user or clean credentials
    if (error.response?.status === 401) {
      localStorage.removeItem('auth_token');
      // Optional: window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);
