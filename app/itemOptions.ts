import { Item } from './interfaces/item';

const minimumQuality = 0;
const firstSellInThreshold = 11;
const secondSellInThreshold = 6;
const maximumQuality = 50;
const granularity = 1;
const conjuredItems = 'Conjured items';
const agedBrie = 'Aged Brie';
const backstagePasses = 'Backstage passes to a TAFKAL80ETC concert';
const sulfuras = 'Sulfuras, Hand of Ragnaros';


export const increaseQuality = (item: Item):void =>{
    item.quality +=  granularity;
};

export const decreaseQuality = (item: Item):void =>{
    item.quality -=  granularity;
};

export const decreaseSellIn = (item: Item):void =>{
    item.sellIn -=  granularity;
};

export const resetQuality = (item: Item):void =>{
    item.quality = minimumQuality;
};

export const decreaseConjured = (item: Item):void =>{  
    if(item.name != conjuredItems) return; //Clausura de guarda
        
    decreaseQuality(item);
}

export const isQualityOverMinimum = (item: Item):void =>{
    if (item.quality <= minimumQuality) return;
    
        decreaseQuality(item);
        decreaseConjured(item);
}

export const isQualityUnderMaximum = (item: Item):void =>{
    if (item.quality >= maximumQuality) return;
        
        increaseQuality(item);
}

export const isNotAgredBrie = (item: Item): boolean => {
    if (item.name == agedBrie ) return false;

        return true;
}

export const isAgredBrie = (item: Item): boolean => {
    if (item.name !== agedBrie ) return false;

        return true;
}

export const isNotBackstagePasses = (item: Item): boolean => {
    if (item.name == backstagePasses ) return false;

        return true;
}

export const isBackstagePasses = (item: Item): boolean => {
    if (item.name !== backstagePasses ) return false;

        return true;
}

export const isNotSulfuras = (item: Item): boolean => {
    if (item.name == sulfuras ) return false; 

        return true;
}

export const isSulfuras = (item: Item): boolean => {
    if (item.name !== sulfuras ) return false; 
        
        return true;
}

export const isNotSulfurasDecreaseSellIn = (item: Item):void =>{
    if (isSulfuras(item)) return; 

        decreaseSellIn(item);
}

export const increaseQualityBySellInDay = (item: Item, day: number):void =>{
    if (item.sellIn >= day) return;
        
        isQualityUnderMaximum(item);
}

export const backstagePassesIncreaseQuality = (item:Item):void =>{
    if (isNotBackstagePasses(item)) return; 
        
        increaseQualityBySellInDay(item, firstSellInThreshold);
        increaseQualityBySellInDay(item, secondSellInThreshold);
}

export const decreaseQualityByItemName = (item: Item):void =>{
    
    isNotAgredBackstageOrSulfuras(item);
    isAgredBackstageOrSulfuras(item);
}

export const isNotAgredBackstageOrSulfuras = (item: Item):void =>{
    if (isAgredBrie(item) || isBackstagePasses(item) || isSulfuras(item)) return; 
       
        isQualityOverMinimum(item); 
}

export const isAgredBackstageOrSulfuras = (item: Item):void =>{
    if(isNotAgredBrie(item) && isNotBackstagePasses(item) && isNotSulfuras(item)) return;
        isQualityUnderMaximum(item);
        backstagePassesIncreaseQuality(item);
    
}

export const isBackstageOrSulfuras = (item: Item):void =>{
    if (isNotBackstagePasses(item) && isNotSulfuras(item)) return;
        
        resetQuality(item);
}

export const isNegativeSellInDay = (item: Item):void =>{
    if (item.sellIn >= minimumQuality) return; 
        
        isBackstageOrSulfuras(item);
        isQualityOverMinimum(item);
    
}

export const decreaseSellInByItem = (item: Item):void =>{
    
    isNegativeSellInDay(item);
    isNotSulfurasDecreaseSellIn(item);

}