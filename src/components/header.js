import React from 'react'
import { Link } from 'gatsby'
import '../assets/styles/default.css'
import styles from './header.module.css'

const Header = ({ siteTitle, menuLinks }) => (
    <div className={styles.outer}>
        <div className={styles.wrapper}>
            <div className={styles.logo}>
                /*img here*/
            </div>
            <nav className={styles.navbar}>
                {
                    menuLinks.map(link =>
                        <li key={link.name}>
                            <Link to={link.link}>{link.name}</Link>
                        </li>)
                }
            </nav>
        </div>
    </div>
)

export default Header
