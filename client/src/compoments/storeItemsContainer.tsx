import { useEffect, useState } from "react";
import type { StoreItem } from "../models/storeItem";
import StoreItemComponent from "./storeItemComponent";
import apiConnector from "../api/apiconnector";
import "../styles/stylesItemContainer.css";
import { Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function StoreItemContainer() {
    const [items, setItems] = useState<StoreItem[]>([]);
      useEffect(() => {
        const fectedItems = async () => {
            const response = (await apiConnector.getStoreItems()).items;
            setItems(response);
            (console.log('from component: ',response));
        }
        fectedItems();
      }, []);
    
    return (
        <>
            <div className="store-banner">
                <div className="store-banner__text">
                    <Typography variant="h4">Store Items</Typography>
                    <Typography variant="body1">Browse, edit and create store items. Use the Create button to add a new item.</Typography>
                </div>
                <div className="store-banner__actions">
                    <Button component={NavLink} to="/add" variant="contained" color="primary">Create</Button>
                </div>
            </div>
            <div className="store-items-container">
            {items
            .filter((item) => item.isActive)
            .map((item: any) => (
                <StoreItemComponent key={item.id} {...item} />
            ))}
        </div>
        </>
        
    )
}