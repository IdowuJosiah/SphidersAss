import React from "react";
import { useTheme } from '../Context/ThemeContext'

const IntroComponent = () => {
    const { theme } = useTheme();

    return (
        <section className={`intro-comp-section ${theme === 'light' ? 'light' : 'dark'}`}>
            <div className={` intro-comp  ${theme}`}>
                <div>
                    <p className={` ${theme}`}>
                        Here's Whats Possible With Sphiderass
                    </p>
                </div>
            </div>
        </section>
    )
}
export default IntroComponent