import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import radheImage from '../assets/radhe.jpg'
import './Welcome.css'

function Welcome() {
    const [name, setName] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        // Check if name is empty
        if (!name.trim()) {
            setError('Please enter your name')
            return
        }

        // Check if name contains only alphabets
        const nameRegex = /^[a-zA-Z\s]+$/
        if (!nameRegex.test(name)) {
            setError('Please enter only alphabets')
            return
        }

        // If validation passes, navigate to loveletter with the name
        navigate('/loveletter', { 
            state: { 
                name: name.trim(),
                timestamp: new Date().toISOString(),
                song: true
            } 
        })
    }

    return (
        <div className="welcome-container">
            <div className="radhe-img"></div>
            <div className="Welcome-card">
                <h3>Love enter your name:</h3>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Here Love" 
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                            setError('')
                        }}
                    />
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" className="welcome-button">Continue</button>
                </form>
            </div>
        </div>
    )
}

export default Welcome