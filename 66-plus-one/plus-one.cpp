class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {

        for (int i = digits.size()-1; i >= 0; i--) {
            if (digits[i] != 9) {
                digits[i] += 1;
                return digits;
            } else digits[i] = 0;
        }

        vector<int> newDigits(digits.size() + 1);        
        newDigits[0] = 1;

        for (int i = 0; i < digits.size(); i++) {
            newDigits[i+1] = digits[i];
        }

        return newDigits;
    }
};