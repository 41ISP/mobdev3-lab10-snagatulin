 import "../../pages/Search/SearchPage"

 function Stats({Search, totalResults}) {       

            return (
            <div className="results-info">
                    Total Results: {totalResults} | Showing: {Search.length} movies
                </div>
            )
 }

 export default Stats;