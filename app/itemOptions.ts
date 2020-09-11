import { Item } from './interfaces/item';

export const increaseQuality = (item: Item):void =>{
    item.quality +=  1;
};

export const decreaseQuality = (item: Item):void =>{
    item.quality -=  1;
};

export const decreaseQualityTwice = (item: Item):void =>{
    item.quality -=  2;
};

export const decreaseSellInn = (item: Item):void =>{
    item.sellIn -=  1;
};

export const zeroQuality = (item: Item):void =>{
    item.quality = 0;
};

export const isConjuredItem = (item: Item):boolean =>{
    const conjuredItems = 'Conjured items';
        
    if(item.name == conjuredItems) {
        
        return true;
    };

    return false;
}

export const itemQualityIsPositive = (item: Item):boolean =>{
    const zero = 0;

    if (item.quality > zero){
        return true;
    }

    return false;
}


