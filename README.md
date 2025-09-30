# OMDB API

## API Ключ

`505480d7`

## Описание проекта

Необходимо создать React-приложение для поиска и просмотра информации о фильмах с использованием OMDB API. Приложение должно состоять из трех основных страниц с навигацией между ними.

## Технологический стек

- **React** (функциональные компоненты с хуками)
- **React Router** (BrowserRouter для маршрутизации)
- **OMDB API** (для получения данных о фильмах)
- **Fetch API** (для HTTP-запросов)
- **CSS** (для стилизации)

## Функциональные требования

### Страница "Поиск" (`/`)

- Форма для ввода поискового запроса
- Отображение результатов поиска в виде карточек
- Обработка состояний: загрузка, ошибка, отсутствие результатов
- Возможность перехода к детальной информации о фильме

### Страница "Детали фильма" (`/movie/:id`)

- Подробная информация о выбранном фильме
- Постер, название, описание, рейтинг, год, жанр, актеры
- Кнопка возврата к предыдущей странице

### Общие требования

- Навигационное меню между основными страницами
- Обработка ошибок API
- Индикаторы загрузки
- Базовый адаптивный дизайн

## Пошаговое выполнение

### Шаг 1: Подготовка и настройка

**Что делать:**

- Создать новый React-проект
- Установить необходимые зависимости для маршрутизации
- Получить API ключ для OMDB API
- Создать структуру папок для компонентов и страниц

**Примеры кода для понимания:**

Создание проекта:

```bash
npm create vite@latest
```

Структура переменных окружения:

```javascript
// .env файл
VITE_SOME_KEY = 123
DB_PASSWORD = foobar
```

Пример использования переменной окружения:

```javascript
const apiKey = import.meta.env.VITE_SOME_KEY
```

### Шаг 2: Настройка маршрутизации

**Что делать:**

- Настроить основные маршруты в приложении
- Создать компонент навигации
- Подключить маршрутизацию к главному компоненту

**Примеры кода для понимания:**

Базовая структура роутера:

```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SearchPage />} />
                <Route path="/movie/:id" element={<MovieDetailsPage />} />
            </Routes>
        </BrowserRouter>
    )
}
```

Пример навигационных ссылок:

```javascript
import { Link } from 'react-router-dom';

<Link to="/">Главная</Link>
<Link to="/search">Поиск</Link>
```

Получение параметра из URL:

```javascript
import { useParams } from 'react-router-dom'

const { id } = useParams() // получение :id из URL
```

### Шаг 3: Работы с API

**Что делать:**

- Создать функции для работы с OMDB API
- Реализовать поиск фильмов по запросу
- Реализовать получение детальной информации о фильме

**Примеры кода для понимания:**

Базовая структура fetch запроса:

```javascript
const MovieFeed = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch(
                `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`,
            )
            setMovies(await response.json())
        }
    }, []) // Блок внутри useEffect срабатывает когда компонент прогружается

    return (
        <div>
            {movies.map((movie) => (
                <MovieCard {...movie} />
            ))}
        </div>
    )
}
```

Различные типы запросов к API:

```javascript
// Поиск фильмов
;`http://www.omdbapi.com/?apikey=${API_KEY}&s=batman&page=1` // Получение деталей фильма
`http://www.omdbapi.com/?apikey=${API_KEY}&i=tt0372784` // С дополнительными параметрами
`http://www.omdbapi.com/?apikey=${API_KEY}&s=batman&type=movie&y=2008`
```

### Шаг 4: Создание переиспользуемых компонентов

**Что делать:**

- Создать компонент карточки фильма
- Создать компонент индикатора загрузки
- Создать компонент для отображения ошибок

**Примеры кода для понимания:**

Структура пропсов для компонента:

```javascript
const MovieCard = ({ movie, onClick }) => {
    return (
        <div onClick={() => onClick(movie.imdbID)}>
            <img src={movie.Poster !== 'N/A' ? movie.Poster : defaultImage} />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
        </div>
    )
}
```

Использование компонента:

```javascript
{
    movies.map((movie) => (
        <MovieCard
            key={movie.imdbID}
            movie={movie}
            onClick={handleMovieClick}
        />
    ))
}
```

Простой индикатор загрузки:

```javascript
const LoadingSpinner = () => <div className="spinner">Загрузка...</div>
```

### Шаг 5: Страница поиска

**Что делать:**

- Создать форму поиска с полем ввода
- Реализовать выполнение поиска при отправке формы
- Отобразить результаты поиска
- Обработать различные состояния (загрузка, ошибка, пустой результат)

**Примеры кода для понимания:**

Обработка формы поиска:

```javascript
const [searchTerm, setSearchTerm] = useState('')

const handleSubmit = async (e) => {
    e.preventDefault()
    if (!searchTerm.trim()) return

    // выполнить поиск
}
```

Контролируемый инпут:

```javascript
<form onSubmit={handleSubmit}>
    <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Введите название фильма..."
    />
    <button type="submit">Найти</button>
</form>
```

Условный рендеринг результатов:

```javascript
{
    loading && <LoadingSpinner />
}
{
    error && <div className="error">{error}</div>
}
{
    movies.length === 0 && !loading && searchTerm && <p>Ничего не найдено</p>
}
{
    movies.length > 0 && (
        <div className="movies-grid">{/* рендер карточек */}</div>
    )
}
```

### Шаг 6: Страница деталей фильма

**Что делать:**

- Создать компонент для отображения детальной информации
- Получить ID фильма из параметров URL
- Загрузить и отобразить подробную информацию о фильме
- Добавить возможность возврата на предыдущую страницу

**Примеры кода для понимания:**

Получение и использование параметра URL:

```javascript
const { id } = useParams()
const [movie, setMovie] = useState(null)

useEffect(() => {
    const loadMovieDetails = async () => {
        try {
            const data = await fetchMovieDetails(id)
            setMovie(data)
        } catch (error) {
            // обработка ошибки
        }
    }

    if (id) {
        loadMovieDetails()
    }
}, [id])
```

Навигация назад:

```javascript
import { useNavigate } from 'react-router-dom'

const navigate = useNavigate()
const goBack = () => navigate(-1)

;<button onClick={goBack}>← Назад</button>
```

Отображение детальной информации:

```javascript
{
    movie && (
        <div className="movie-details">
            <img src={movie.Poster} alt={movie.Title} />
            <div className="movie-info">
                <h1>
                    {movie.Title} ({movie.Year})
                </h1>
                <p>
                    <strong>Жанр:</strong> {movie.Genre}
                </p>
                <p>
                    <strong>Режиссер:</strong> {movie.Director}
                </p>
                <p>
                    <strong>Актеры:</strong> {movie.Actors}
                </p>
                <p>
                    <strong>Описание:</strong> {movie.Plot}
                </p>
                <p>
                    <strong>Рейтинг IMDB:</strong> {movie.imdbRating}
                </p>
            </div>
        </div>
    )
}
```

### Шаг 7: Стилизация и финальная доработка

**Что делать:**

- Создать базовые стили для всех компонентов
- Обеспечить читаемость и привлекательность интерфейса
- Добавить базовую адаптивность
- Протестировать все функции приложения

Анимация загрузки:

```css
.spinner {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
```

## Структура проекта (рекомендуемая)

```
src/
  components/
    MovieCard.js
    Navigation.js
    SearchForm.js
    LoadingSpinner.js
    ErrorMessage.js
  pages/
    SearchPage.js
    MovieDetailsPage.js
  services/
    movieService.js App.js
  App.css
```

## API документация

**Базовый URL:** `http://www.omdbapi.com/`

**Основные параметры:**

- `apikey` - ваш API ключ (обязательный)
- `s` - поисковый запрос (для поиска фильмов)
- `i` - IMDb ID (для получения деталей)
- `page` - номер страницы (для пагинации)
- `type` - тип контента (movie, series, episode)
- `y` - год выпуска

**Примеры запросов:**

- Поиск: `?apikey=YOUR_KEY&s=batman&page=1`
- Детали: `?apikey=YOUR_KEY&i=tt0372784`
- С фильтром: `?apikey=YOUR_KEY&s=batman&type=movie&y=2008`

## Документация

- [OMDB API Documentation](http://www.omdbapi.com/)
- [React Router Documentation](https://reactrouter.com/)
- [React Hooks Guide](https://react.dev/reference/react)
- [Fetch API MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

# Как сдавать

- Создайте форк репозитория в организации 41ISR с названием webdev-6-вашафамилия
- Используя ветку wip сделайте задание
- Зафиксируйте изменения в вашем репозитории
- Когда документ будет готов - создайте пул реквест из ветки wip (вашей) на ветку main (тоже вашу) и укажите меня (ktkv419) как reviewer

Не мержите сами коммит, это сделаю я после проверки задания
