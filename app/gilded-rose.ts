
import { 
    increaseQuality,
    zeroQuality,
    itemDifferentFromAgredBrie,
    itemQualityIsUnder50IncreaseQuality,
    itemDifferentFromSulfurasDecreaseSellInn,
    itemQualityIsPositiveDecreaseQuality,
    itemDifferentFromBackstagePasses,
    itemDifferentFromSulfuras,
    itemQualityIsUnder50DecreaseQuality,
    backstagePassesIncreaseQuality
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
            

            if (itemDifferentFromAgredBrie(item) && itemDifferentFromBackstagePasses(item) && itemDifferentFromSulfuras(item)) {
                itemQualityIsPositiveDecreaseQuality(item);
                
            } else {
                itemQualityIsUnder50DecreaseQuality(item);
            }

            itemDifferentFromSulfurasDecreaseSellInn(item);
            

            if (item.sellIn < 0) {
                if (itemDifferentFromAgredBrie(item)) {
                    if (itemDifferentFromBackstagePasses(item) && itemDifferentFromSulfuras(item)) {
                        
                    } else {
                        zeroQuality(item);
                    }
                } 
                itemQualityIsPositiveDecreaseQuality(item);
            }
        }

        return this.items;
    }
}
