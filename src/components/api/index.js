import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
    try {
        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            // 68d0a87a8fmshdaab7b04b692c56p1b98ffjsn5e890e17f4d7  // start of subscription (03.08.22) Edgar
            headers: {
                'X-RapidAPI-Key': '465a94511emsh5e36a5f08efe73ep1a46bfjsn33db99769513', // start of subscription (05.08.22) Vanik
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        });

        return data;
    } catch (e) {
        console.log(e.message);
    }
};

