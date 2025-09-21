import { BasketService } from './services/BasketService';
import { products, deliveryRules, offers } from './data/catalog';

// Example usage
const basket = new BasketService(products, deliveryRules, offers);

// Test cases from the requirements
console.log('Test Case 1: B01, G01');
basket.clear();
basket.add('B01');
basket.add('G01');
console.log(`Total: $${basket.total().toFixed(2)}`);

console.log('\nTest Case 2: R01, R01');
basket.clear();
basket.add('R01');
basket.add('R01');
console.log(`Total: $${basket.total().toFixed(2)}`);

console.log('\nTest Case 3: R01, G01');
basket.clear();
basket.add('R01');
basket.add('G01');
console.log(`Total: $${basket.total().toFixed(2)}`);

console.log('\nTest Case 4: B01, B01, R01, R01, R01');
basket.clear();
basket.add('B01');
basket.add('B01');
basket.add('R01');
basket.add('R01');
basket.add('R01');
console.log(`Total: $${basket.total().toFixed(2)}`);