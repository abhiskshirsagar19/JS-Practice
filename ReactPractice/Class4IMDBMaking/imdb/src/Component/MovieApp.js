import Heading from "./Heading";
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";
import AddMovie from "./AddMovie";
import Header from "./Header";
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: (
//             <>
//                 <Header />
//                 <MovieList />
//             </>
//         ),
//     },
//     {
//         path: "/movie-detail/:movieId",
//         element: (
//             <>
//                 <MovieDetail />
//             </>
//         ),
//     },
//     {
//         path: "/add-movie",
//         element: (
//             <>
//                 <AddMovie />
//             </>
//         ),
//     },
// ]);


// const MovieApp = () => {
//     return (
//         <RouterProvider router={router} />
//     )
// }

const MovieApp = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<MovieList />}></Route>
                <Route path="/movie-detail/:movieId" element={<MovieDetail />}></Route>
                <Route path="/add-movie" element={<AddMovie />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default MovieApp;