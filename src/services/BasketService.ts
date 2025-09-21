import { BasketService } from '../src/services/BasketService';
import { products, deliveryRules, offers } from '../src/data/catalog';

describe('BasketService', () => {
    let basket: BasketService;

    beforeEach(() => {
        basket = new BasketService(products, deliveryRules, offers);
    });

    test('should calculate total for B01, G01 correctly', () => {
        basket.add('B01');
        basket.add('G01');
        expect(basket.total()).toBe(37.85);
    });

    test('should calculate total for R01, R01 correctly', () => {
        basket.add('R01');
        basket.add('R01');
        expect(basket.total()).toBe(54.37);
    });

    test('should calculate total for R01, G01 correctly', () => {
        basket.add('R01');
        basket.add('G01');
        expect(basket.total()).toBe(60.85);
    });

    test('should calculate total for B01, B01, R01, R01, R01 correctly', () => {
        basket.add('B01');
        basket.add('B01');
        basket.add('R01');
        basket.add('R01');
        basket.add('R01');
        expect(basket.total()).toBe(98.27);
    });
});