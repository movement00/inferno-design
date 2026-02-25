import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Aydınlık temaya geç' : 'Karanlık temaya geç'}
      title={theme === 'dark' ? 'Aydınlık Tema' : 'Karanlık Tema'}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}
