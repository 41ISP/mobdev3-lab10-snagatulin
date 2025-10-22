import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Главная</Link>
      <Link to="/search">Поиск</Link>
    </nav>
  );
}
export default Navigation;