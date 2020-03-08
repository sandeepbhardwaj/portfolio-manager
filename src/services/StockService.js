import axios from 'axios';

const API_KEY='BF4MP5NG1TCWVXGQ'
const API_URL = `https://www.alphavantage.co/query`;

//const API_URL = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=BA&apikey=${API_KEY}`;

class StockService {
    searchStock(searchKeyword) {
        return axios.get(API_URL, {
            params: {
                function: 'SYMBOL_SEARCH',
                keywords: searchKeyword,
                apikey: API_KEY
            }
          });
    }
}

export default new StockService();