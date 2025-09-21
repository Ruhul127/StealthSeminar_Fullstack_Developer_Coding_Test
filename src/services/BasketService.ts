import { Product } from '../models/Product';
import { DeliveryRule } from '../models/DeliveryRule';
import { Offer } from '../models/Offer';

export class BasketService {
    private items: Product[] = [];

    constructor(
        private products: Product[],
        private deliveryRules: DeliveryRule[],
        private offers: Offer[]
    ) {}

    add(productCode: string): void {
        const product = this.products.find(p => p.code === productCode);
        if (!product) {
            throw new Error(`Product with code ${productCode} not found`);
        }
        this.items.push({...product}); // Add a copy to avoid reference issues
    }

    total(): number {
        const subtotal = this.calculateSubtotal();
        const discount = this.calculateDiscount();
        const deliveryCost = this.calculateDeliveryCost(subtotal - discount);
        
        return this.roundToTwoDecimals(subtotal - discount + deliveryCost);
    }

    private calculateSubtotal(): number {
        return this.roundToTwoDecimals(
            this.items.reduce((sum, item) => sum + item.price, 0)
        );
    }

    private calculateDiscount(): number {
        return this.roundToTwoDecimals(
            this.offers.reduce((discount, offer) => discount + offer.apply(this.items), 0)
        );
    }

    private calculateDeliveryCost(amount: number): number {
        const rule = this.deliveryRules.find(
            rule => amount >= rule.minAmount && amount < rule.maxAmount
        );
        return rule ? rule.cost : 0;
    }

    private roundToTwoDecimals(value: number): number {
        return Math.round(value * 100) / 100;
    }

    clear(): void {
        this.items = [];
    }

    // Helper method for testing
    getItems(): Product[] {
        return [...this.items]; // Return a copy to avoid direct manipulation
    }
}