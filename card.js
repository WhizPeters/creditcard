// Function to validate a credit card number and determine its type


// please use a valid card details and test the code in the test section which is at the end of this code 
function validate_Credit_card (card_number){

    // Remove spaces and dashes from the card number to  simplify the input for consistent pattern matching and validation using regular expressions
    card_number = card_number.replace(/[ -]/g, '');


     // Define regular expressions for different card types
   // Visa: Starts with '4', followed by 12 digits (optionally followed by 3 more digits)
   const visa_card = /^4[0-9]{12}(?:[0-9]{3})?$/;



   // MasterCard: Starts with '5', followed by a digit between 1 and 5, followed by 14 digits
   const master_card = /^5[1-5]{1}[0-9]{14}$/;



   // American Express: Starts with '3' followed by either '4' or '7', followed by 13 digits
   const american_express =  /^3[47][0-9]{13}$/;


   // Discover: Starts with '6', followed by either '011' or '5' followed by a digit between 0 and 9, followed by 12 digits
   const discover = /^6(?:011|5[0-9]{2})[0-9]{12}$/;

   // Maestro: Starts with one of the specified prefixes followed by 8 to 15 digits
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