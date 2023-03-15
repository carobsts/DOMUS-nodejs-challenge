const firstMostRepeatedLetter = word => {
    const ERROR = "-1";
    let index;
    let max_count = 0; 
    let most_common_letter = '';
    
    if (!!!word.split('').length) return { most_common_letter, index: ERROR };
    
    word = word.toLowerCase(); 
    const letters_counts = {};

    for (letter of word) {
        if (!letters_counts[letter]) { letters_counts[letter] = 1 }
        else { letters_counts[letter] += 1 };

        if (letters_counts[letter] > max_count || 
        letters_counts[letter] === max_count && letter < most_common_letter) {
            max_count = letters_counts[letter];
            most_common_letter = letter;
        };
    }; 

    const audit = Object.values(letters_counts);
    const are_all_equal = audit.every(n => n === audit[0]); 

    if (!!are_all_equal) { most_common_letter = '' };

    const letters_counts_values = Object.values(letters_counts); 
    let max_value = Math.max(...letters_counts_values);

    for (prop in letters_counts) {
        if (letters_counts[prop] === max_value) {
            most_common_letter = prop;
            max_value = -1;
        };
    };

    index = !!are_all_equal ? ERROR : word.indexOf(most_common_letter);

    return { most_common_letter, index };
}; 

module.exports = { firstMostRepeatedLetter };