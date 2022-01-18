'use strict';
class Cart {
    constructor() {
        this.items = [];
        this._totalCount = 0;
    }
    addItem(product) {
        let i = this.items.findIndex(item => {
            return item.name === product.name;
        });

        if (i !== -1) {
            this.items[i].count++;
            this.items[i].cost = this._roundTo2DecimalPlaces(this.items[i].price * this.items[i].count);
        } else {
            this.items.push({
                name: product.name,
                count: 1,
                price: this._roundTo2DecimalPlaces(product.price),
                cost: this._roundTo2DecimalPlaces(product.price)
            });
        }

        this._totalCount++;
    }
    getTotalCount() {
        return this._totalCount;
    }
    getTotalCost() {
        let totalCost = this.items.reduce((sum, item) => {
            return sum + item.price * item.count;
        }, 0);
        return this._roundTo2DecimalPlaces(totalCost);
    }
    _roundTo2DecimalPlaces(cost) {
        return (Math.round(cost*100)/100).toFixed(2);
    }
}