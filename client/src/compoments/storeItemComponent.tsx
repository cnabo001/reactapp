import type { StoreItem } from "../models/storeItem";
import "../styles/stylesItemContainer.css";


export default function StoreItemComponent(item: StoreItem) {
    return (
        <div className="item-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>${item.price}</p>
        </div>
    );
}