'use client'

import { useState } from 'react'

export default function ContactForm() {
    const [email, setEmail] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify({ email }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
    }
    return <div>
        <form onSubmit={handleSubmit}>
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="submit" />
        </form>

    </div>

}