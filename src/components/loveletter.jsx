import { useLocation } from 'react-router-dom'
import QuestionSection from './QuestionSection'
import './loveletter.css'

function Loveletter() {
    const location = useLocation()
    const { name } = location.state || { name: 'Love' }
    const { song } = location.state || { song: false }

    return (
        <div className="love-letter-container">
            <span className="heart">❤</span>
            <span className="heart">❤</span>
            <span className="heart">❤</span>
            <span className="heart">❤</span>
            <span className="heart">❤</span>
            <span className="heart">❤</span>
            <span className="heart">❤</span>
            <span className="heart">❤</span>
            <span className="heart">❤</span>
            <span className="heart">❤</span>
            {song && (
                <audio autoPlay loop>
                    <source src="/blue.mp3" type="audio/mpeg" />
                </audio>
            )}
            <div className="love-letter">
                <h1>Dear {name},</h1>
                <div className="letter-content">
                    <p className="letter-paragraph">
                        I keep getting surprised by how good things feel with you. It's not a crazy, loud thing, but this really nice, quiet wonder. Like finding a secret little spot that just makes you happy. Every time we're together, I feel like I discover something new and cool about you, and about us.
                    </p>

                    <p className="letter-paragraph">
                        I love how we just fit. We can do our own things, but still feel super close. It's like we have this special way of understanding each other, without even saying much. It just makes me feel... really good, like there's a spark that keeps lighting up.
                    </p>

                    <p className="letter-paragraph">
                        Here's a little something for you:
                    </p>

                    <div className="poem">
                        <p>Like when the morning light hits a flower,</p>
                        <p>Everything feels fresh, like a brand new hour.</p>
                        <p>Not a big fire, or a loud sound,</p>
                        <p>Just a quiet wonder, all around.</p>
                        <p>Your words feel soft, like a gentle breeze,</p>
                        <p>Making my heart feel happy and at ease.</p>
                        <p>The moon looks down, shining so bright,</p>
                        <p>And everything feels perfect, just right.</p>
                    </div>

                    <div className="decorative-line">✨💖🌙</div>

                    <p className="letter-signature">
                        Thinking of you, with a happy, sparkly feeling,<br />
                        Your Love
                    </p>
                </div>
            </div>
            <div className="question-section-wrapper">
                <QuestionSection />
            </div>
        </div>
    )
}

export default Loveletter
