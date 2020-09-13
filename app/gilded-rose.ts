
import {
    decreaseQualityByItemName,
    decreaseSellInByItem
    
 } from'./itemOptions';

export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {   
        for (let i = 0; i < this.items.length; i++) {
            let item = this.items[i];
            
            decreaseQualityByItemName(item);
            decreaseSellInByItem(item);
        }

        return this.items;
    }
}
