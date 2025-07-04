import { CheckEnv } from '@/utils/CheckEnv'
import jwt from 'jsonwebtoken'
import { NextRequest } from 'next/server'
type AuthResult = | { authorized: true; userid: string } | { authorized: false; error: string }
export const userAuth = async (req: NextRequest): Promise<AuthResult> => {
    const token = req.cookies.get('token')?.value

    if (!token) {
        return {
            authorized: false,
            error: 'Not authorized, login again',
        }
    }

    try {
        CheckEnv(process.env.JWT_SECRET, 'JWT_SECRET')
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string }
        return {
            authorized: true,
            userid: decoded.id,
        }
    } catch (error) {
        console.log((error as Error).message)
        return {
            authorized: false,
            error: 'Invalid or expired token',
        }
    }
}
