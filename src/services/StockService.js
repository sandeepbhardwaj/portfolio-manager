import axios from 'axios';

const API_KEY='BF4MP5NG1TCWVXGQ'
const API_URL = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=BA&apikey=${API_KEY}`;

class StockService {
    searchStock() {
        return axios.get(API_URL);
    }
}

export default new StockService();