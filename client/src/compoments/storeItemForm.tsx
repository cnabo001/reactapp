import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { StoreItem } from "../models/storeItem";
import apiConnector from "../api/apiconnector";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";

export default function StoreItemForm() {
    const {id} = useParams();
    const parsedId = Number(id);
    const navigate = useNavigate();
    const [hasItem, setHasItem] = useState(false);
    const [item, setItem] = useState<StoreItem>({
        id : undefined, 
        title: "", 
        description: "", 
        price: 0,
        isActive: false,
        createDate: new Date(),
        updateDate: new Date()
    });
    useEffect(() => {
        if (parsedId) {
            (async () => {
                await apiConnector
                .getStoreItemById(parsedId)
                .then((response) => {
                    if (response) {
                        setItem(response);
                        setHasItem(true);
                    }
                });
            })();
        }
    },[parsedId]);

    function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (hasItem) {
            apiConnector.updateStoreItem(item).then(() => {
                navigate("/");
            });
        } else {
            apiConnector.createStoreItems(item).then(() => {
                navigate("/");
            });
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target as HTMLInputElement;
        setItem((prevItem) => ({
            ...prevItem,
            [name]: name === 'price' ? Number(value) : value,
        }));
    };
    
    return (
    <Box component={Paper} sx={{
     p: 4,
     m: 4,
     display: "flex",
     flexDirection: "column",
     gap: 2,
     maxWidth: 600,
     mx: "auto"
    }}>
        <Typography variant="h5" align="center">
            {hasItem ? "Edit Store Item" : "Create Store Item"}
        </Typography>
        <form onSubmit={onSubmit}>
            <TextField
                name="title"
                fullWidth
                label="Title"
                value={item.title}
                margin="normal"
                onChange={handleChange}/>
            <TextField
                name="description"
                fullWidth
                label="Description"
                value={item.description}
                margin="normal"
                onChange={handleChange}/>
            <TextField
                name="price"
                fullWidth
                label="Price"
                type="number"
                value={item.price}
                margin="normal"
                onChange={handleChange}/>
            <Box sx={{display: "flex", justifyContent: "flex-end", gap: 2, mt: 2}}>
                <Button color="secondary" type="button" onClick={() => navigate(-1)}>Cancel</Button>
                <Button color="primary" type="submit">{hasItem  ? "Update" : "Create"}</Button>
            </Box>
        </form>
       </Box>
    )
}