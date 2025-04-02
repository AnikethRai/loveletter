function Footer() {
    const style = {
        backgroundColor: 'rgba(255, 107, 107, 0.1)',
        color: 'white',
        padding: '10px',
        textAlign: 'center',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backdropFilter: 'blur(10px)',
        zIndex: 1000
    }
    return (
        <footer style={style}>
            <p>&copy; {new Date().getFullYear()} Aniketh Rai</p>
        </footer>
    );
}

export default Footer;
