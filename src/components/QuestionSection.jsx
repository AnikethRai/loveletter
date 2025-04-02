import { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';    
import './QuestionSection.css';
import { motion, AnimatePresence } from "framer-motion";

function QuestionSection() {
    const container = useRef(null);
    const [launched, setLaunched] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        if (container.current) {
            const anim = lottie.loadAnimation({
                container: container.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: '/src/assets/animation.json'
            });

            return () => {
                if (anim) {
                    anim.destroy();
                }
            };
        }
    }, []);

    const handleYesClick = () => {
        setShowSuccess(true);
    };

    return (
        <div className="question-section">
            <div className="lottie-container" ref={container}></div>
            <div className="question-content">
                <AnimatePresence>
                    {!showSuccess ? (
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="question-text"
                        >
                            Do you love me as much as I do?
                        </motion.h2>
                    ) : (
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="success-text"
                        >
                            I know you do Love ❤️
                        </motion.h2>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {!showSuccess && (
                        <motion.div 
                            className="button-container"
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0, y: 20 }}
                        >
                            <motion.button 
                                className="yes-button"
                                onClick={handleYesClick}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Yes, I do! ❤️
                            </motion.button>
                            <motion.button
                                className="no-button"
                                onClick={() => setLaunched(true)}
                                initial={{ y: 0 }}
                                animate={launched ? { y: "-100vh", rotate: 720 } : {}}
                                transition={{ duration: 1, ease: "easeOut" }}
                            >
                                No
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default QuestionSection; 