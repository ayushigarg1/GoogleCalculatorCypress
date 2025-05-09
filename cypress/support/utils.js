// This file contains utility functions for Cypress tests
export function sanitizeDecimalInput(input) {
    const parts = input.split('.');
    return parts.shift() + (parts.length > 0 ? '.' + parts.join('') : '');
}
