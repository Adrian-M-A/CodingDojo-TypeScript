import { Item } from './interfaces/item';

const zero = 0;
const eleven = 11;
const six = 6;
const fifty = 50;
const conjuredItems = 'Conjured items';
const agedBrie = 'Aged Brie';
const backstagePasses = 'Backstage passes to a TAFKAL80ETC concert';
const sulfuras = 'Sulfuras, Hand of Ragnaros';


export const increaseQuality = (item: Item):void =>{
    item.quality +=  1;
};

export const decreaseQuality = (item: Item):void =>{
    item.quality -=  1;
};

export const decreaseSellInn = (item: Item):void =>{
    item.sellIn -=  1;
};

export const zeroQuality = (item: Item):void =>{
    item.quality = 0;
};

export const isConjuredItemDecreaseAgain = (item: Item):void =>{  
    if(item.name == conjuredItems) {
        
        decreaseQuality(item);
    };
}

export const itemQualityIsPositiveDecreaseQuality = (item: Item):void =>{
    if (item.quality > zero){

        decreaseQuality(item);
        isConjuredItemDecreaseAgain(item);
    }
}

export const itemQualityIsUnder50IncreaseQuality = (item: Item):void =>{
    if (item.quality < fifty) {
        
        increaseQuality(item);
    }
}

export const itemDifferentFromAgredBrie = (item: Item): boolean => {
    if (item.name !== agedBrie ) {
        
        return true;
    }
    return false;
}

export const itemDifferentFromBackstagePasses = (item: Item): boolean => {
    if (item.name !== backstagePasses ) {
        
        return true;
    }
    return false;
}

export const itemDifferentFromSulfuras = (item: Item): boolean => {
    if (item.name !== sulfuras ) {
        
        return true;
    }
    return false;
}

export const itemDifferentFromSulfurasDecreaseSellInn = (item: Item):void =>{
    if (itemDifferentFromSulfuras(item)) {

        decreaseSellInn(item);
    }
}

export const backstagePassesIncreaseQuality = (item:Item):void =>{
    if (!itemDifferentFromBackstagePasses(item)) {
        
        increaseQualityBySellInnDay(item, eleven);
        increaseQualityBySellInnDay(item, six);
    }
}

export const increaseQualityBySellInnDay = (item: Item, day: number):void =>{
    if (item.sellIn < day) {
        
        itemQualityIsUnder50IncreaseQuality(item);
    }
}

export const decreaseQualityByItemName = (item: Item):void =>{
    if (itemDifferentFromAgredBrie(item) && itemDifferentFromBackstagePasses(item) && itemDifferentFromSulfuras(item)) {
       
        itemQualityIsPositiveDecreaseQuality(item); 
    } 
    decreaseQualityForAgredBackstageOrSulfuras(item);
}

export const decreaseQualityForAgredBackstageOrSulfuras = (item: Item):void =>{
    if(!itemDifferentFromAgredBrie(item) || !itemDifferentFromBackstagePasses(item) || !itemDifferentFromSulfuras(item)){
        itemQualityIsUnder50IncreaseQuality(item);
        backstagePassesIncreaseQuality(item);
    }
}

export const itemNameIsBackstageOrSulfurasNoDecrease = (item: Item):void =>{
    if (!itemDifferentFromBackstagePasses(item) || !itemDifferentFromSulfuras(item)){
        
        zeroQuality(item);
    }
}

export const negativeSellInnDayDecreaseQuality = (item: Item):void =>{
    if (item.sellIn < 0) {
        
        itemNameIsBackstageOrSulfurasNoDecrease(item);
        itemQualityIsPositiveDecreaseQuality(item);
    }
}