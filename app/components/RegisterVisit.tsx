"use client";

import { useEffect } from 'react';

const RegisterVisit = () => {
  useEffect(() => {
    const registerVisit = async () => {
      try {
        const response = await fetch('/api/register-visit', {
          method: 'POST',
        });

        if (!response.ok) {
          console.error('Failed to register visit');
        }
      } catch (error) {
        console.error('Error registering visit:', error);
      }
    };

    registerVisit();
  }, []);

  return null;
};

export default RegisterVisit;
