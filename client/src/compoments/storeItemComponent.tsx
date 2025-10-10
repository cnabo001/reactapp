import { Button } from "@mui/material";
import type { StoreItem } from "../models/storeItem";
import { NavLink } from "react-router-dom";
import apiConnector from "../api/apiconnector";


export default function StoreItemComponent(item: StoreItem) {
    return (
        <div className="item-card">
            <div className="item-card__content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>${item.price}</p>
            </div>
            <div className="item-card__actions">
                <Button color="primary" type="submit" component={NavLink} to={`edit/${item.id}`}>Edit</Button>
                <Button color="secondary" type="button" onClick={async () => {
                    if (typeof item.id === "number") {
                        await apiConnector.deleteStoreItem(Number(item.id));
                        window.location.reload();
                    } else {
                        alert("Item ID is missing.");
                    }
                }}>Delete</Button>
            </div>
        </div>
    );
}