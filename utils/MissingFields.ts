export const isMissing = (field: any, fieldName: string): void => {
    if (!field) {
        throw new Error(`${fieldName} is required`);
    }
};
