import { Sun, Moon } from "lucide-react";
import '../components/ThemeToggle.scss';

function ThemeToggle({ theme, toggleTheme }) {

    return (
        <>
            <div>
                <button
                    onClick={toggleTheme}
                    className={theme === "light" ? "light" : "dark"}
                    >
                    {theme === "light" ? (<Sun />) : <Moon />}
                </button>
            </div>
        </>
    )
}

export default ThemeToggle;