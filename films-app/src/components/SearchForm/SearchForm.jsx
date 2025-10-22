const [searchTerm, setSearchTerm] = useState('')

const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!searchTerm.trim()) return(
        <div>
     <form onSubmit={handleSubmit}>
    <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Введите название фильма..."/>
    <button type="submit">Найти</button>
</form> 
</div>)
}

export default SearchForm;