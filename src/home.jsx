//src Home.jsx
//Gabriel Caligiuri
import './home.css'
import { useState } from 'react'

const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gabe-caligiuri-32901a20a/', className: "home__github"},
  { label: 'GitHub', href: 'https://github.com/GabrielCaligiuri', className: "home__linked"},
  { label: 'Contact Me', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=gabecaligiuri@gmail.com', className: "home__contact" }
];

const herologo = {label: <img src="/GC_logo.svg" alt="Gabe Caligiuri" className='hero__logo' />};

export default function home() {
    const [showSplash, setShowSplash] = useState(true);

    return (
        <>
        <section className="hero-section">
            {herologo.label}
            <div className="home__links">
                {links.map((item, index) => (
                    <a
                    key={index}
                    href = {item.href}
                    className={item.className}
                    >
                        {item.label}
                    </a>
                ))}
            </div>
        </section>
        </>
        )
}