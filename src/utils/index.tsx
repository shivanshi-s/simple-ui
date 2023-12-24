import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// apply clsx function to all the functions
export const cn = (...classes: ClassValue[]) => twMerge(clsx(classes));
