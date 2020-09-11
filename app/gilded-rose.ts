
import { 
    increaseQuality,
    decreaseQuality,
    zeroQuality,
    decreaseSellInn,
    decreaseQualityTwice,
    isConjuredItem,
    itemQualityIsPositive
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
                if (itemQualityIsPositive(item)) {

                    if(isConjuredItem(item)) {
                        decreaseQualityTwice(item);

                    } else {
                        decreaseQuality(item);
                    }
                }
            } else {
                if (item.quality < 50) {
                    item.quality = item.quality + 1
                    if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
                        if (item.sellIn < 11) {
                            if (item.quality < 50) {
                                increaseQuality(item);
                            }
                        }
                        if (item.sellIn < 6) {
                            if (item.quality < 50) {
                                increaseQuality(item);
                            }
                        }
                    }
                }
            }
            if (item.name != 'Sulfuras, Hand of Ragnaros') {
                decreaseSellInn(item);
            }
            if (item.sellIn < 0) {
                if (item.name != 'Aged Brie') {
                    if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
                        if (itemQualityIsPositive(item)) {
                            if (item.name != 'Sulfuras, Hand of Ragnaros') {
                                decreaseQuality(item);
                            }
                        }
                    } else {
                        zeroQuality(item);
                    }
                } else {
                    if (item.quality < 50) {
                        increaseQuality(item);
                    }
                }
            }
        }

        return this.items;
    }
}
