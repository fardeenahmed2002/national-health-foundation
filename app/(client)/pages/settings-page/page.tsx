import React from 'react'
import Link from 'next/link'

const page = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link href={'/pages/reset-password'}>Reset your password</Link>
                </li>
            </ul>
        </div>
    )
}

export default page
