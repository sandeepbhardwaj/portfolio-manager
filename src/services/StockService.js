//import axios from 'axios';

//const API_KEY = 'BF4MP5NG1TCWVXGQ'
//const API_URL = `https://www.alphavantage.co/query`;

//const API_URL = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=BA&apikey=${API_KEY}`;

class StockService {
    searchStock(searchKeyword) {
        console.log(searchKeyword)
        
    }

    getTimeSeriesDaily(stockName) {
        console.log(stockName)
    }

    /*
    searchStock(searchKeyword) {
        return axios.get(API_URL, {
            params: {
                function: 'SYMBOL_SEARCH',
                keywords: searchKeyword,
                apikey: API_KEY
            }
        });
    }

    getTimeSeriesDaily(stockName) {
        return axios.get(API_URL, {
            params: {
                function: 'TIME_SERIES_DAILY',
                symbol: stockName,
                apikey: API_KEY
            }
        });
    }
    */

}

export default new StockService();