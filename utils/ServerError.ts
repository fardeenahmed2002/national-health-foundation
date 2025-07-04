export function serverError(error: any) {
    return error.response?.data?.message || error.message || "Unknown error occurred"
}