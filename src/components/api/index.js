import axios from "axios";

const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

const options = {
    params: {
        bl_latitude: '11.847676',
        tr_latitude: '12.838442',
        bl_longitude: '109.095887',
        tr_longitude: '109.149359',
    },
    headers: {
        'X-RapidAPI-Key': '68d0a87a8fmshdaab7b04b692c56p1b98ffjsn5e890e17f4d7',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
};


export const getPlacesData = async () => {
    try {
        const {data: {data}} = await axios.get(URL, options);

        return data;
    } catch (e) {
        console.log(e.message);
    }
};

