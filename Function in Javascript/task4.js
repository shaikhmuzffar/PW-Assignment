function calculateTax() {
    // Tax rates based on income ranges
    const taxRates = [
        { min: 0, max: 10000, rate: 0.1 },
        { min: 10001, max: 50000, rate: 0.2 },
        { min: 50001, max: 100000, rate: 0.3 },
        { min: 100001, max: Infinity, rate: 0.4 }
    ];

    // Return a function that calculates tax based on income
    return function(income) {
        for (let i = 0; i < taxRates.length; i++) {
            const { min, max, rate } = taxRates[i];
            if (income >= min && income <= max) {
                return income * rate;
            }
        }
    };
}

// Example usage
const calculateTaxFunction = calculateTax();

// Test the function with various incomes
const income1 = 8000;
const income2 = 30000;
const income3 = 75000;
const income4 = 120000;

console.log(`Tax on income $${income1}: $${calculateTaxFunction(income1)}`);
console.log(`Tax on income $${income2}: $${calculateTaxFunction(income2)}`);
console.log(`Tax on income $${income3}: $${calculateTaxFunction(income3)}`);
console.log(`Tax on income $${income4}: $${calculateTaxFunction(income4)}`);
