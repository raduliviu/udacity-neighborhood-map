class Helper {
    static baseURL(){
        return "https://api.foursquare.com/v2"
    }
    static auth(){
        const keys = {
            client_id: "1EHNFOQBMTMCXFZ5G1BUKL1PIUJKBQGRCJZQ3YJS25YBOVQT",
            client_secret: "DY5LWNTLQXFKZFCNKY23JODLEMIH4NEVXRHDP4V5KYP5JKF1",
            v: "20181114"
        };
        return Object.keys(keys)
            .map(key => `${key}=${keys[key]}`)
            .join("&");
    }
    static urlBuilder(urlPrams) {
        if(!urlPrams){
            return ""
        }
        return Object.keys(urlPrams)
            .map(key =>`${key}=${urlPrams[key]}`)
            .join("&");
    }
    static headers() {
        return {
            Accept: "application/json"
        };
    }
    static simpleFetch(endPoint, method, urlPrams) {
        let requestData = {
            method,
            headers: Helper.headers()
        };
        return fetch(`${Helper.baseURL()}${endPoint}?${Helper.auth()}&${Helper.urlBuilder(urlPrams)}`,
        requestData
        )
        .then(res => res.json())
        .catch(() => {alert('Foursquare had an error, please try reloading the page')});
    }
}
export default class SquareAPI {
    static search(urlPrams){
        return Helper.simpleFetch("/venues/search", "GET", urlPrams);
    }
    static getVenueDetails(VENUE_ID){
        return Helper.simpleFetch(`/venues/${VENUE_ID}`, "GET");
    }
    static getVenuePhotos(VENUE_ID){
        return Helper.simpleFetch(`/venues/${VENUE_ID}/photos`, "GET");
    }
}