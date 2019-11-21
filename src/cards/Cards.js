import React, {useState, useEffect} from 'react';
import "../App.css";
//date, explanation, media_type, service_version, title, url
// { date, explanation, media_type, service_version, title, url }
let apikey = '8YWiTnmfl6Ih93s7DQjPhefibdfwbU2olKDeSq4v';
let dataArr = [];
const date = new Date();
const Cards = () =>  {
    const [apiInfo, setApiInfo] = useState();
    const [loading, setLoading] = useState(true);
    // eslint-disable-next-line no-extend-native
    function getDays(){
        const d = new Date(date.getFullYear(), date.getMonth()+1, 0);
        return d.getDate()
    }

    useEffect(() => {
        getData(getDays());
    }, [])

    async function getData(){
        for(let i=0; i < date.getDate(); i++){
            const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.nasa.gov/planetary/apod?api_key=${apikey}&date=2019-11-${i + 1}`);
            const data = await response.json();
            dataArr.push(data);
        }
        setApiInfo(dataArr);
        setLoading(false);
    } 
    console.log(apiInfo);

    return (
        <div className='picture-container'>
            {loading ? <div className='loading'>...loading </div> : 
            dataArr.map(i => ( 
            <div className="card-image">
                { i.media_type === 'image' ? 
                <>
                    <img src={i.url} alt={i.title}></img> 
                    <div className="top-middle"> {i.title} </div>
                    <div className="bottom-right"> {i.date} </div>
                </>
                : 
                <iframe width="560" height="315" title={i.title} src={i.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                }
            </div>))}
        </div>
    )
}

export default Cards;