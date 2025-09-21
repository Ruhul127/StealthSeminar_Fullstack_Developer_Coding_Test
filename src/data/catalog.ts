import { Product } from '../models/Product';

export const products: Product[] = [
    { code: 'R01', name: 'Red Widget', price: 32.95 },
    { code: 'G01', name: 'Green Widget', price: 24.95 },
    { code: 'B01', name: 'Blue Widget', price: 7.95 }
];

export const deliveryRules = [
    { minAmount: 0, maxAmount: 49.99, cost: 4.95 },
    { minAmount: 50, maxAmount: 89.99, cost: 2.95 },
    { minAmount: 90, maxAmount: Infinity, cost: 0 }
];

export const offers = [
    {
        productCode: 'R01',
        type: 'halfPrice',
        description: 'Buy one red widget, get the second half price',
        apply: (items: Product[]) => {
            const redWidgets = items.filter(item => item.code === 'R01');
            if (redWidgets.length >= 2) {
                const discountCount = Math.floor(redWidgets.length / 2);
                return discountCount * (redWidgets[0].price / 2);
            }
            return 0;
        }
    }
];