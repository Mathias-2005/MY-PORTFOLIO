import { Sun, Moon } from "lucide-react"; // PACKAGE POUR AVOIR LES LOGO SUN/MOON
import '../components/ThemeToggle.scss';

function ThemeToggle({ theme, toggleTheme }) {

    return (
        <>
            <div>
                <button
                    onClick={toggleTheme}
                    className={theme === "light" ? "light" : "dark"} 
                    aria-label="Theme Mode"
                    >
                    {/* SI THEME=LIGHT ALORS CLASS LIGHT SINON CLASS DARK */}
                    {theme === "light" ? (<Sun />) : <Moon />} 
                    {/* SI THEME=LIGHT ALORS LOGO SUN SINON LOGO MOON */} 
                </button>
            </div>
        </>
    )
}

export default ThemeToggle;