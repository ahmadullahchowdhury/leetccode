

var maxProfit = function (prices) {
    let minPrice = prices[0];
    let maxProfit = 0;
    for(let price of prices){
        // currentProfit = price - minPrice;
        maxProfit = Math.max(maxProfit, price - minPrice);
        minPrice = Math.min(price, minPrice);
    }
    return maxProfit
};

const prices = [2,3,,3,6,4];

console.log(maxProfit(prices));