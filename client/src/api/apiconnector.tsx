import type { AxiosResponse } from "axios";
import axios from "axios";
import type { StoreItem } from "../models/storeItem";
import type { StoreItems } from "../models/storeItems";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL //|| 'https://localhost:44330/api'
});

const apiConnector = {
    getStoreItems: async (): Promise<StoreItems> => {
        try{
            const response: AxiosResponse<StoreItems> = 
                await api.get(`/StoreItems/Items`);
                console.log(response);
            const items  = 
                response.data.items.map((item: any) => ({...item}) as StoreItem);
            return { items };
        } catch (error) {
            console.error('Error fetching store items', error);
            throw error; 
        }
    },

    getStoreItemById: async (id: number): Promise<StoreItem | undefined> => {
        try{
            const response: AxiosResponse<StoreItem> = 
                await api.get(`/StoreItems/Items/${id}`);
            return (response.data) as StoreItem;
        } catch (error) {
            console.error('Error fetching store items', error);
            throw error;  
        }
    },

    createStoreItems: async (model: StoreItem): Promise<number> => {
        try{
            const response: AxiosResponse<number> = 
                await api.post(`/StoreItems/Items`, model);
           
            return (response.data) as number;
        } catch (error) {
            console.error('Error fetching store items', error);
            throw error;  
        }
    },

    updateStoreItem: async (model: StoreItem): Promise<void> => {
        try{
            await api.put(`/StoreItems/Items/${model.id}`, model);
            return;
        } catch (error) {
            console.error('Error fetching store items', error);
            throw error;  
        }
    },
    
    deleteStoreItem: async (id: number): Promise<void> => {
        try{
            await api.delete(`/StoreItems/Items/${id}`);
            return;
        } catch (error) {
            console.error('Error fetching store items', error);
            throw error;  
        }
    }
}

export default apiConnector;