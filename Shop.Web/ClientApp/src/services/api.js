import axios from 'axios';

export async function  getShops (){
    try{
        const response = await axios.get('http://romanbokov-001-site1.etempurl.com/api/shop');
            console.log('response  ', response)
            return response.data;
        }catch(error) {
        return [];
    }
}
  
export async function  createOrder (model){
    try{
        const response = await axios.post('http://romanbokov-001-site1.etempurl.com/api/order', model);
            console.log('response  ', response)
            return response.data;
    }catch(error) {
        return [];
    }
}

// 'https://localhost:44479/api/order'