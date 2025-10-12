export interface StoreItem {
        id: string | undefined;
        title: string;
        price: number;
        description: string;
        isActive: boolean;
        createDate: Date | undefined;
        updateDate: Date | undefined;
}