export const CheckEnv = (E: any, name: string): void => {
    if (!E) {
        throw new Error(`${name} not defined in environment variables`);
    }
};
