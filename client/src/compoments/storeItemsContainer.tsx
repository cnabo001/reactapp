import { useEffect, useState } from "react";
import type { StoreItem } from "../models/storeItem";
import StoreItemComponent from "./storeItemComponent";
import apiConnector from "../api/apiconnector";
import "../styles/stylesItemContainer.css";

export default function StoreItemContainer() {
    const [items, setItems] = useState<StoreItem[]>([]);
      useEffect(() => {
        const fectedItems = async () => {
            const response = (await apiConnector.getStoreItems()).items;
            setItems(response);
        }
        fectedItems();
      }, []);
    
    return (
        <div className="store-items-container">
            {items
            .filter((item) => item.isActive)
            .map((item: any) => (
                <StoreItemComponent key={item.id} {...item} />
            ))}
        </div>
    )
}