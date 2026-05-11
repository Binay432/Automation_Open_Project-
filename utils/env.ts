import * as dotenv from 'dotenv';
dotenv.config();

function hasValue(key: string): string {
    
    const value = process.env[key];

    if (!value){
        throw new Error (`Missing required environment variable: ${key}`); 
    }

    return value;
}

export const ENV = {
  BASE_URL:      hasValue('BASE_URL'),
  STANDARD_USER: hasValue('STANDARD_USER'),
  LOCKED_USER:   hasValue('LOCKED_USER'),
  PROBLEM_USER:  hasValue('PROBLEM_USER'),
  GLITCH_USER:   hasValue('GLITCH_USER'),
  PASSWORD:      hasValue('USER_PASSWORD'),
} as const;