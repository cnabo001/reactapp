import { Button } from "@mui/material";
import type { StoreItem } from "../models/storeItem";
import "../styles/stylesItemContainer.css";
import { NavLink } from "react-router-dom";
import apiConnector from "../api/apiconnector";


export default function StoreItemComponent(item: StoreItem) {
    return (
        <div className="item-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <div className="action-items">
                <Button color="primary" type="submit" component={NavLink} to={`edit/${item.id}`}>Edit</Button>
                <Button color="secondary" type="button" onClick={async () => {
                    if (typeof item.id === "number") {
                        await apiConnector.deleteStoreItem(item.id);
                        window.location.reload();
                    } else {
                        alert("Item ID is missing.");
                    }
                }}>Delete</Button>
            </div>
        </div>
    );
}