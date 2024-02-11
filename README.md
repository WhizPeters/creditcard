# creditcard

This JavaScript program validates credit card numbers and determines their type (e.g., Visa, MasterCard, Discover, etc.) using regular expressions. It includes a function validate_Credit_card and a set of regular expressions for different card types.

Overview
The credit card validation program checks the validity of credit card numbers and identifies their corresponding types. It utilizes regular expressions to define patterns for different card types such as Visa, MasterCard, American Express, Discover, and Maestro.

Code Explanation
// Function to validate a credit card number and determine its type
function validate_Credit_card(card_number) {
    // Remove spaces and dashes from the card number to simplify the input for consistent pattern matching and validation using regular expressions
    card_number = card_number.replace(/[ -]/g, '');

    // Define regular expressions for different card types
    const visa_card = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const master_card = /^5[1-5]{1}[0-9]{14}$/;
    const american_express = /^3[47][0-9]{13}$/;
    const discover = /^6(?:011|5[0-9]{2})[0-9]{12}$/;
    const maestro = /^(5018|5020|5038|6304|6759|6761|6763)[0-9]{8,15}$/;

    // Check if the card number matches any of the patterns and return the card type
    if (visa_card.test(card_number)) {
        return 'Visa Card';
    } else if (master_card.test(card_number)) {
        return 'MasterCard';
    } else if (american_express.test(card_number)) {
        return 'American Express';
    } else if (discover.test(card_number)) {
        return 'Discover';
    } else if (maestro.test(card_number)) {
        return 'Maestro';
    } else {
        return 'Invalid Card';
    }
}

// Example usage
const card_number = '4111-1111-1111-1111';
const card_type = validate_Credit_card(card_number);
console.log(`Card Type: ${card_type}`);