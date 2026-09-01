class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0

        for (let i = 1; i <= prices.length; i++) {
            const curr = prices[i]
            const prev = prices[i - 1]

            if (curr > prev) {
                profit += curr - prev
            }
        }

        return profit;
    }
}
