export const required = value => value ? undefined : "Required";
const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const max_length = maxLength(30);
export const number = value => value && isNaN(Number(value)) ? "Must be a number" : undefined;
const minValue = min => value =>
    value && value < min ? `Must be at least ${min}` : undefined;
export const minAge = minValue(18);
export const tooOld = value =>
    value && value > 80 ? "You might be too old for this" : undefined;