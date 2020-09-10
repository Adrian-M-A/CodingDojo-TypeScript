import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';
import { INSPECT_MAX_BYTES } from 'buffer';

describe('Gilded Rose', function () {

    it('should foo', function() {
        const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
    });

    it('All item has a sellIn value', function (){
        const gildedRose = new GildedRose([ new Item(null, 9, null) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.exist;
    });

    it('All item has a quality value', function (){
        const gildedRose = new GildedRose([ new Item(null, null, 9) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.exist;
    });

    it('UpdateQuality must lower quality and sellIn value of every item', function (){
        const gildedRose = new GildedRose([ new Item('Cheese', 8, 9) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.decrease;
        expect(items[0].sellIn).to.decrease;
    });

    it('Aged Brie increase quality the older it gets', function (){
        const gildedRose = new GildedRose([ new Item('Aged Brie', 8, 9) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.increase;
    });

    it('Quality degrades twice fast if sellIn value has passed', function (){
        const gildedRose = new GildedRose([ new Item('Cheese', -1, 9), new Item('Ham', 1, 9) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(7);
        expect(items[1].quality).to.equal(8);

    });

    it('Quality is never negative', function (){
        const gildedRose = new GildedRose([ new Item('Cheese', -1, 1), new Item('Ham', 1, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0);
        expect(items[1].quality).to.equal(0);
    });

    it('Quality of an item is never more than 50', function (){
        const gildedRose = new GildedRose([ new Item('Aged Brie', 8, 50) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(50);
    });

    it('Sulfuras never has to be sold', function (){
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 1, 20) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(1);
    });

    it('Bakstage passes, increases quality by 2 remaining 10 or less days', function (){
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 8, 20) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(22);
    });

    it('Bakstage passes, increases by 3 remaining 5 or less days', function (){
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(23);
    });

    it('Bakstage passes quality is 0 after the concert', function (){
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', -1, 20) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0);
    });

    it('conjured items degrade quality twice faster', function (){
        const gildedRose = new GildedRose([ new Item('Conjured items', 5, 20) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(18);
    });


});
