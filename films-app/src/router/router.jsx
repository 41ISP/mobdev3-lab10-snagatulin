import { createBrowserRouter } from "react-router-dom";
import MoviesDetailsPages from "../pages/MovieDetail/MovieDetails";
import SearchPage from "../pages/Search/SearchPage";

export const router = createBrowserRouter([
{
    path:"/",
    element: <SearchPage/>
},
{
    path:"movie/:id",
    element: <MoviesDetailsPages/>
}

])