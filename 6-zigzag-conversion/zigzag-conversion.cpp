class Solution {
public:
    string convert(string s, int numRows) {
        
        if (numRows == 1) return s;

        std::vector<std::vector<std::string>> arr(numRows, std::vector<std::string>(s.length()));

        for (int r = 0; r < numRows; r++) {
            for (int c = 0; c < s.length(); c++) {
                arr[r][c] = "-1";
            }
        } 

        int column = 0;

        for (int i = 0; i < s.length();) {
            int row = 0;
            while (row < numRows-1 && i < s.length()) {
                arr[row++][column] = s.at(i++);
            }
            while(row != 0  && i < s.length()) {
                arr[row--][column++] = s.at(i++);
            }
        }

        string str = "";

        for (int r = 0; r < numRows; r++) {
            for (int c = 0; c < s.length(); c++) {
                if (arr[r][c] != "-1") {
                    str += arr[r][c];
                }
            }
        }

        return str;

    }
};