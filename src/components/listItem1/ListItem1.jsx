import React, { useEffect, useState } from 'react'
import './listItem1.css'
import { Link, NavLink } from "react-router-dom";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
const ListItem1 = (props) => {

    const [myData, setMyData] = useState([]);
    // const [movieData, setMovieData] = useState({});

    const apiKey = '?api_key=6144e3b0501c8ca5968d387610e06e07';
    // const options = { method: 'GET', headers: { accept: 'application/json' } };
    let TOP_RATED_TV = `https://api.themoviedb.org/3/tv/top_rated${apiKey}&page=1`;


    useEffect(() => {
        const getSeries = async () => {

            // const response = await fetch(TOP_RATED_TV);
            // const resData = await response.json();
            // console.log(resData.results);
            // setMyData(resData.results);
            // console.log(myData);

            fetch(TOP_RATED_TV)
                .then(response => response.json())
                .then(data => {
                    // if (isMounted)   setMyData(data.results);
                    console.log(data);
                    let dataList = data.results;
                    setMyData(dataList);
                    console.log(myData);
                })
                .catch(console.error);

        }

        getSeries();
        // eslint-disable-next-line
    }, []);
    return (
        <>
            {/* return console.log("elem" + elm.name); */}
            {/* <h1>{elm.name}</h1> */}
            {myData.map((elm, i) => {
                return (
                    <>


                        <div className="card"><Link to={'/watch'}>
                            <div className="cardBox">

                                <div className="cardImg">
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500/${elm.poster_path}`}
                                        alt="cardImg"
                                    />
                                </div>
                                <div className="cardText">
                                    <p key={toString(elm.id)} >{elm.name ? elm.name : console.log("Error h1" + elm.name)}</p>
                                    <p className="summary">
                                        <PlayArrowIcon className="icon" />
                                        <AddIcon className="icon" />
                                        <span className='ageLimit' fontSize="large" >{elm.vote_average}</span>
                                        <span className='releaseDate' fontSize="large">{elm.origin_country}</span>
                                    </p>
                                </div>
                                <div className="btn">
                                    <button className="submitBtn"><NavLink to="/">Watch</NavLink></button>
                                </div>
                            </div>
                        </Link>
                        </div>
                    </>
                )

            })
            }
        </>
    )
}

export default ListItem1
