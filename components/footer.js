import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <p style={styles.text}>© 2024 MyWebsite. All rights reserved.</p>
                <div style={styles.socialLinks}>
                    <a href="https://facebook.com" style={styles.link}>Facebook</a>
                    <a href="https://twitter.com" style={styles.link}>Twitter</a>
                    <a href="https://instagram.com" style={styles.link}>Instagram</a>
                </div>
            </div>
        </footer>
    );
};

// Inline CSS styles
const styles = {
    footer: {
        width: '100%',
        padding: '20px 0',
        backgroundColor: '#101010',
        color: '#ffffff',
        textAlign: 'center',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
    },
    text: {
        marginBottom: '10px',
    },
    socialLinks: {
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
    },
    link: {
        color: '#ffffff',
        textDecoration: 'none',
        fontWeight: 'bold',
    }
};

export default Footer;
