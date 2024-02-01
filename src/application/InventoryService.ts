export default class InventoryService {
    static  API_URL : string = 'http://localhost:5263/api/Inventory';

    static async deleteInventory(id: number): Promise<Response> {
        return await fetch(`${this.API_URL}/DeleteInventory/${id}`, {
            method: 'POST',
        });
    }

    static async getInventory(): Promise<Response> {
        return await fetch(`${this.API_URL}/GetInventory`);
    }

    static async addInventory(inventory: any): Promise<Response> {
        return await fetch(`${this.API_URL}/AddInventory`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inventory),
        });
    }
}