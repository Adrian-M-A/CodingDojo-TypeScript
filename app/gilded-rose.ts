
import { 
    increaseQuality,
    decreaseQuality,
    zeroQuality,
    itemQualityIsUnder50IncreaseQuality,
    itemDifferentFromSulfurasDecreaseSellInn,
    itemQualityIsPositiveDecreaseQuality
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
            

            if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert' && item.name != 'Sulfuras, Hand of Ragnaros') {
                itemQualityIsPositiveDecreaseQuality(item);
                
            } else {
                if (item.quality < 50) {
                    increaseQuality(item);
                    if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
                        if (item.sellIn < 11) {
                            itemQualityIsUnder50IncreaseQuality(item);
                        }
                        if (item.sellIn < 6) {
                            itemQualityIsUnder50IncreaseQuality(item);
                        }
                    }
                }
            }

            itemDifferentFromSulfurasDecreaseSellInn(item);
            

            if (item.sellIn < 0) {
                if (item.name != 'Aged Brie') {
                    if (item.name != 'Backstage passes to a TAFKAL80ETC concert' && item.name != 'Sulfuras, Hand of Ragnaros') {
                        
                    } else {
                        zeroQuality(item);
                    }
                } else {
                }
                itemQualityIsPositiveDecreaseQuality(item);
            }
        }

        return this.items;
    }
}
