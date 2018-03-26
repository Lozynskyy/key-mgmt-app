export const required = value => value ? undefined : "Required";
const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const max_length = maxLength(25);
