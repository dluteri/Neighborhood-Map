class Helper {
    static baseURL() {
        return "https://api.foursquare.com/v2"
    }
    static auth() {
        const keys = {
            client_id:"11T4OMRIL43DHRCYZ1ECJVFEXACKWO2OM55QUEINFL4I54U3",
            client_secret:"2YY40Q0DPJZOBRGBRB2SKAM0LQMFDU5T2Z2XLIVGPA4VR2WO",
            v: "20181029"  // version # = date created
        };
        // turn keys into a string 
        return Object.keys(keys)
        .map(key=> `${key}=${keys[key]}`)
        .join('&')
    }
    static urlBuilder(urlPrams){ //Prams = parameters
        if(!urlPrams){
            return ""
        }
        return Object.keys(urlPrams)
            .map(key => `${key}=${urlPrams[key]}`)
            .join('&');
    }
    static headers() {
        return {
            Accept: "application/json"
        };
    }
    static async simpleFetch(endPoint, method, urlPrams) {
        let requestData = {
            method,
            headers: Helper.headers()
        };
        return fetch(
            `${Helper.baseURL()}${endPoint}?${Helper.auth()}&${Helper.urlBuilder(
                urlPrams
            )}`,
            requestData
        ).then(res => res.json());
    }
}

export default class FourSquareAPI {
    static search(urlPrams) {
        return Helper.simpleFetch("/venues/search", "GET", urlPrams);
    }
    static getVenueDetails(VENUE_ID) {
        return Helper.simpleFetch(`/venues/${VENUE_ID}`, "GET");
    }
    static getVenuePhotos(VENUE_ID) {
        return Helper.simpleFetch(`/venues/${VENUE_ID}/photos`, "GET");
    }
}

// Code referenced from Forrest Walker's YouTube Tutorial - https://www.youtube.com/watch?v=Dj5hzKBxCBI&list=PL4rQq4MQP1crXuPtruu_eijgOUUXhcUCP&index=3