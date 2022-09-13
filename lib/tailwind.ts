/// Combine multiple tailwind class strings to one
export const classNames = (...classes: any[]) =>
    classes.filter(Boolean).join(" ");
