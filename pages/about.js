// Import React and necessary components from Next.js
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const About = () => {
    return (
        <>
            <Head>
                <title>About Us</title>
                <meta name="description" content="Learn more about our team and mission." />
            </Head>

            <main>
                <h1>About Us</h1>
                <p>This is a simple about page for our Next.js application.</p>
                <p>We are dedicated to providing the best services to our clients and sharing our expertise in web development.</p>

                <section>
                    <h2>Our Mission</h2>
                    <p>Our mission is to make web development easier and more accessible to everyone. We believe in building strong, user-friendly, and scalable web applications.</p>
                </section>

                <section>
                    <h2>Contact Us</h2>
                    <p>If you have any questions, please feel free to <Link href="/contact"><a>Contact Us</a></Link>.</p>
                </section>

                <Link href="/">
                    <a>Go back to home</a>
                </Link>
            </main>

            <style jsx>{`
                main {
                    padding: 20px;
                    font-family: Arial, sans-serif;
                }

                h1, h2 {
                    color: #333;
                }

                p {
                    color: #555;
                }

                a {
                    color: teal;
                    text-decoration: none;
                }

                a:hover {
                    text-decoration: underline;
                }
            `}</style>
        </>
    );
};

export default About;
