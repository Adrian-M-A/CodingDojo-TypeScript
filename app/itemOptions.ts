import { Item } from './interfaces/item';

export const increaseQuality = (item: Item):void =>{
    item.quality +=  1;
};

export const decreaseQuality = (item: Item):void =>{
    item.quality -=  1;
};