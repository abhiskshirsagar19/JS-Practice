import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Heading from "./Heading";
import Pagination from "./Pagination";

// const data = {
//     dates: {
//         maximum: "2024-03-20",
//         minimum: "2024-02-28",
//     },
//     page: 1,
//     results: [
//         {
//             adult: false,
//             backdrop_path: "/oBIQDKcqNxKckjugtmzpIIOgoc4.jpg",
//             genre_ids: [28, 53, 10752],
//             id: 969492,
//             original_language: "en",
//             original_title: "Land of Bad",
//             overview:
//                 "When a Delta Force special ops mission goes terribly wrong, Air Force drone pilot Reaper has 48 hours to remedy what has devolved into a wild rescue operation. With no weapons and no communication other than the drone above, the ground mission suddenly becomes a full-scale battle when the team is discovered by the enemy.",
//             popularity: 2541.619,
//             poster_path: "/h27WHO2czaY5twDmV3Wfx5IdqoE.jpg",
//             release_date: "2024-01-25",
//             title: "Land of Bad",
//             video: false,
//             vote_average: 7.203,
//             vote_count: 155,
//         },
//         {
//             adult: false,
//             backdrop_path: "/nTPFkLUARmo1bYHfkfdNpRKgEOs.jpg",
//             genre_ids: [35, 10749],
//             id: 1072790,
//             original_language: "en",
//             original_title: "Anyone But You",
//             overview:
//                 "After an amazing first date, Bea and Ben’s fiery attraction turns ice cold — until they find themselves unexpectedly reunited at a destination wedding in Australia. So they do what any two mature adults would do: pretend to be a couple.",
//             popularity: 2262.189,
//             poster_path: "/yRt7MGBElkLQOYRvLTT1b3B1rcp.jpg",
//             release_date: "2023-12-21",
//             title: "Anyone But You",
//             video: false,
//             vote_average: 6.9,
//             vote_count: 625,
//         },
//         {
//             adult: false,
//             backdrop_path: "/meyhnvssZOPPjud4F1CjOb4snET.jpg",
//             genre_ids: [16, 28, 12, 35, 10751],
//             id: 940551,
//             original_language: "en",
//             original_title: "Migration",
//             overview:
//                 "After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, from New England, to New York City, to tropical Jamaica.",
//             popularity: 1456.828,
//             poster_path: "/ldfCF9RhR40mppkzmftxapaHeTo.jpg",
//             release_date: "2023-12-06",
//             title: "Migration",
//             video: false,
//             vote_average: 7.636,
//             vote_count: 751,
//         },
//         {
//             adult: false,
//             backdrop_path: "/4woSOUD0equAYzvwhWBHIJDCM88.jpg",
//             genre_ids: [28, 27, 53],
//             id: 1096197,
//             original_language: "en",
//             original_title: "No Way Up",
//             overview:
//                 "Characters from different backgrounds are thrown together when the plane they're travelling on crashes into the Pacific Ocean. A nightmare fight for survival ensues with the air supply running out and dangers creeping in from all sides.",
//             popularity: 1455.821,
//             poster_path: "/9YTdswepVeqnZYo2Mkdn3mKNraF.jpg",
//             release_date: "2024-01-18",
//             title: "No Way Up",
//             video: false,
//             vote_average: 5.7,
//             vote_count: 55,
//         },
//         {
//             adult: false,
//             backdrop_path: "/uF6ah2oXklyw3gU9ByWLKJ0tyfg.jpg",
//             genre_ids: [18, 53],
//             id: 1026436,
//             original_language: "en",
//             original_title: "Miller's Girl",
//             overview:
//                 "A precocious young writer becomes involved with her high school creative writing teacher in a dark coming-of-age drama that examines the blurred lines of emotional connectivity between professor and protégé.",
//             popularity: 976.214,
//             poster_path: "/wKCKKur7LyGFaUHmNhvy7FhIjmC.jpg",
//             release_date: "2024-01-18",
//             title: "Miller's Girl",
//             video: false,
//             vote_average: 6.71,
//             vote_count: 105,
//         },
//         {
//             adult: false,
//             backdrop_path: "/h3HsfV8Kn9Sz2QWUYYdP5ya23hx.jpg",
//             genre_ids: [878, 12],
//             id: 438631,
//             original_language: "en",
//             original_title: "Dune",
//             overview:
//                 "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
//             popularity: 671.899,
//             poster_path: "/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
//             release_date: "2021-09-15",
//             title: "Dune",
//             video: false,
//             vote_average: 7.8,
//             vote_count: 10189,
//         },
//         {
//             adult: false,
//             backdrop_path: "/ibk375gQlUnEUyqyQpt2rCiHll7.jpg",
//             genre_ids: [878, 12],
//             id: 693134,
//             original_language: "en",
//             original_title: "Dune: Part Two",
//             overview:
//                 "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
//             popularity: 648.994,
//             poster_path: "/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
//             release_date: "2024-02-27",
//             title: "Dune: Part Two",
//             video: false,
//             vote_average: 8.7,
//             vote_count: 27,
//         },
//         {
//             adult: false,
//             backdrop_path: "/dmiN2rakG9hZW04Xx7mHOoHTOyD.jpg",
//             genre_ids: [35],
//             id: 673593,
//             original_language: "en",
//             original_title: "Mean Girls",
//             overview:
//                 "New student Cady Heron is welcomed into the top of the social food chain by the elite group of popular girls called ‘The Plastics,’ ruled by the conniving queen bee Regina George and her minions Gretchen and Karen. However, when Cady makes the major misstep of falling for Regina’s ex-boyfriend Aaron Samuels, she finds herself prey in Regina’s crosshairs. As Cady sets to take down the group’s apex predator with the help of her outcast friends Janis and Damian, she must learn how to stay true to herself while navigating the most cutthroat jungle of all: high school.",
//             popularity: 633.06,
//             poster_path: "/fbbj3viSUDEGT1fFFMNpHP1iUjw.jpg",
//             release_date: "2024-01-10",
//             title: "Mean Girls",
//             video: false,
//             vote_average: 6.541,
//             vote_count: 169,
//         },
//         {
//             adult: false,
//             backdrop_path: "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
//             genre_ids: [18, 36],
//             id: 872585,
//             original_language: "en",
//             original_title: "Oppenheimer",
//             overview:
//                 "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
//             popularity: 496.85,
//             poster_path: "/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
//             release_date: "2023-07-19",
//             title: "Oppenheimer",
//             video: false,
//             vote_average: 8.1,
//             vote_count: 6836,
//         },
//         {
//             adult: false,
//             backdrop_path: "/uUiIGztTrfDhPdAFJpr6m4UBMAd.jpg",
//             genre_ids: [14, 28, 878],
//             id: 634492,
//             original_language: "en",
//             original_title: "Madame Web",
//             overview:
//                 "Forced to confront revelations about her past, paramedic Cassandra Webb forges a relationship with three young women destined for powerful futures...if they can all survive a deadly present.",
//             popularity: 492.627,
//             poster_path: "/rULWuutDcN5NvtiZi4FRPzRYWSh.jpg",
//             release_date: "2024-02-14",
//             title: "Madame Web",
//             video: false,
//             vote_average: 5.4,
//             vote_count: 264,
//         },
//         {
//             adult: false,
//             backdrop_path: "/bQS43HSLZzMjZkcHJz4fGc7fNdz.jpg",
//             genre_ids: [878, 10749, 35],
//             id: 792307,
//             original_language: "en",
//             original_title: "Poor Things",
//             overview:
//                 "Brought back to life by an unorthodox scientist, a young woman runs off with a debauched lawyer on a whirlwind adventure across the continents. Free from the prejudices of her times, she grows steadfast in her purpose to stand for equality and liberation.",
//             popularity: 438.085,
//             poster_path: "/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
//             release_date: "2023-12-07",
//             title: "Poor Things",
//             video: false,
//             vote_average: 8.13,
//             vote_count: 1364,
//         },
//         {
//             adult: false,
//             backdrop_path: "/zIYROrkHJPYB3VTiW1L9QVgaQO.jpg",
//             genre_ids: [28, 35],
//             id: 897087,
//             original_language: "en",
//             original_title: "Freelance",
//             overview:
//                 "An ex-special forces operative takes a job to provide security for a journalist as she interviews a dictator, but a military coup breaks out in the middle of the interview, they are forced to escape into the jungle where they must survive.",
//             popularity: 390.663,
//             poster_path: "/7Bd4EUOqQDKZXA6Od5gkfzRNb0.jpg",
//             release_date: "2023-10-05",
//             title: "Freelance",
//             video: false,
//             vote_average: 6.575,
//             vote_count: 580,
//         },
//         {
//             adult: false,
//             backdrop_path: "/7grv5ULlK9wMr2T1fkgr56HlbT.jpg",
//             genre_ids: [18, 36, 10752],
//             id: 760774,
//             original_language: "en",
//             original_title: "One Life",
//             overview:
//                 "British stockbroker Nicholas Winton visits Czechoslovakia in the 1930s and forms plans to assist in the rescue of Jewish children before the onset of World War II, in an operation that came to be known as the Kindertransport.",
//             popularity: 330.514,
//             poster_path: "/yvnIWt2j8VnDgwKJE2VMiFMa2Qo.jpg",
//             release_date: "2023-09-09",
//             title: "One Life",
//             video: false,
//             vote_average: 7.718,
//             vote_count: 117,
//         },
//         {
//             adult: false,
//             backdrop_path: "/aPQsU3yLDUOhLJYnSqkhKRkQTAw.jpg",
//             genre_ids: [36, 18, 10752],
//             id: 467244,
//             original_language: "en",
//             original_title: "The Zone of Interest",
//             overview:
//                 "The commandant of Auschwitz, Rudolf Höss, and his wife Hedwig, strive to build a dream life for their family in a house and garden next to the camp.",
//             popularity: 341.531,
//             poster_path: "/ruyeAfmxbNPWZ92dWymqwTc6nWV.jpg",
//             release_date: "2023-12-15",
//             title: "The Zone of Interest",
//             video: false,
//             vote_average: 7.357,
//             vote_count: 412,
//         },
//         {
//             adult: false,
//             backdrop_path: "/bPe6svQylMx7zS4RyuMJbOL46ao.jpg",
//             genre_ids: [10402, 18],
//             id: 802219,
//             original_language: "en",
//             original_title: "Bob Marley: One Love",
//             overview:
//                 "Jamaican singer-songwriter Bob Marley overcomes adversity to become the most famous reggae musician in the world.",
//             popularity: 360.005,
//             poster_path: "/1lQftpEARVVB9op4TaYiIbactzG.jpg",
//             release_date: "2024-02-14",
//             title: "Bob Marley: One Love",
//             video: false,
//             vote_average: 6.874,
//             vote_count: 135,
//         },
//         {
//             adult: false,
//             backdrop_path: "/2GzgongTSptjSkT7iCoXUcGIVB9.jpg",
//             genre_ids: [10749, 18, 14],
//             id: 994108,
//             original_language: "en",
//             original_title: "All of Us Strangers",
//             overview:
//                 "One night in his near-empty tower block in contemporary London, Adam has a chance encounter with a mysterious neighbor Harry, which punctures the rhythm of his everyday life. As a relationship develops between them, Adam is preoccupied with memories of the past and finds himself drawn back to the suburban town where he grew up, and the childhood home where his parents appear to be living, just as they were on the day they died, 30 years before.",
//             popularity: 255.257,
//             poster_path: "/aviJMFZSnnCAsCVyJGaPNx4Ef3i.jpg",
//             release_date: "2023-12-22",
//             title: "All of Us Strangers",
//             video: false,
//             vote_average: 7.6,
//             vote_count: 168,
//         },
//         {
//             adult: false,
//             backdrop_path: "/hIeEpk2w1dnC9ly9ZJwwbunH2Cx.jpg",
//             genre_ids: [16, 35, 18, 10751, 10402],
//             id: 838240,
//             original_language: "es",
//             original_title: "Robot Dreams",
//             overview:
//                 "Dog lives in Manhattan and he's tired of being alone. One day he decides to build himself a robot, a companion. Their friendship blossoms, until they become inseparable, to the rhythm of 80's NYC. One summer night, Dog, with great sadness, is forced to abandon Robot at the beach. Will they ever meet again?",
//             popularity: 234.347,
//             poster_path: "/qLtK6DFeuJNuB3THGVDklirhQ8u.jpg",
//             release_date: "2023-10-20",
//             title: "Robot Dreams",
//             video: false,
//             vote_average: 7.3,
//             vote_count: 67,
//         },
//         {
//             adult: false,
//             backdrop_path: "/p9DKeXp6FPJtAQ1k13Z4zPWrCbN.jpg",
//             genre_ids: [18],
//             id: 1058694,
//             original_language: "en",
//             original_title: "Radical",
//             overview:
//                 "In a Mexican border town plagued by neglect, corruption, and violence, a frustrated teacher tries a radical new method to break through his students’ apathy and unlock their curiosity, their potential… and maybe even their genius.",
//             popularity: 230.027,
//             poster_path: "/eSatbygYZp8ooprBHZdb6GFZxGB.jpg",
//             release_date: "2023-10-19",
//             title: "Radical",
//             video: false,
//             vote_average: 8.496,
//             vote_count: 257,
//         },
//         {
//             adult: false,
//             backdrop_path: "/heek54YiXiFE00sjMLs8LomK91F.jpg",
//             genre_ids: [28, 12, 16, 35, 10751],
//             id: 1011985,
//             original_language: "en",
//             original_title: "Kung Fu Panda 4",
//             overview:
//                 "Po is gearing up to become the spiritual leader of his Valley of Peace, but also needs someone to take his place as Dragon Warrior. As such, he will train a new kung fu practitioner for the spot and will encounter a villain called the Chameleon who conjures villains from the past.",
//             popularity: 214.708,
//             poster_path: "/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",
//             release_date: "2024-03-06",
//             title: "Kung Fu Panda 4",
//             video: false,
//             vote_average: 0,
//             vote_count: 0,
//         },
//         {
//             adult: false,
//             backdrop_path: "/nvW0QfRJ7ga9TK8DKwBfAPA8ywP.jpg",
//             genre_ids: [28, 18, 80],
//             id: 944401,
//             original_language: "en",
//             original_title: "Dogman",
//             overview:
//                 "A boy, bruised by life, finds his salvation through the love of his dogs.",
//             popularity: 189.434,
//             poster_path: "/rmRkZZ2aZq72dDTjbPnSLtPQcmJ.jpg",
//             release_date: "2023-09-27",
//             title: "Dogman",
//             video: false,
//             vote_average: 7.31,
//             vote_count: 290,
//         },
//     ],
//     total_pages: 50,
//     total_results: 999,
// };
const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const fetchMovie = (pageNo) => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=9f48a5b363c49e0c31bf3d09bb319827&page=${pageNo}`)
            .then(res => res.json())
            .then(data => setMovies(data.results || []));


    }
    useEffect(() => {
        fetchMovie(1);
    }, [])
    return (
        <>
            <Heading />
            <div className="movie-list">
                {!movies.length && <h1>Loading....</h1>}
                {movies.map(movie => (<MovieCard movie={movie} />))}

            </div>
            <Pagination onchangePage={fetchMovie} />
        </>

    );
};

export default MovieList;
