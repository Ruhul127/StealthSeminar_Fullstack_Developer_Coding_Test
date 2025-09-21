export interface Offer {
    productCode: string;
    type: 'halfPrice' | 'bogof' | string;
    description: string;
    apply: (items: Product[]) => number;
}