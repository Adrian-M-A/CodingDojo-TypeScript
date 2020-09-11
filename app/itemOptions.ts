import { Item } from './interfaces/item';



const conjuredItems = 'Conjured items';
const zero = 0;


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
    if(item.name == conjuredItems) {
        
        return true;
    };

    return false;
}

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

export const itemDifferentFromSulfurasDecreaseSellInn = (item: Item):void =>{
    if (item.name != 'Sulfuras, Hand of Ragnaros') {

        decreaseSellInn(item);
    }
}

export const itemQualityIsUnder50IncreaseQuality = (item: Item):void =>{
    if (item.quality < 50) {
        increaseQuality(item);
    }
}


