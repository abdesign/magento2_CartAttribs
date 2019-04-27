/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'uiComponent'
], function (Component) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'SimpleVendor_CartAttribs/summary/item/details'
        },

        /**
         * @param {Object} quoteItem
         * @return {String}
         */
        getValue: function(quoteItem) {
            return quoteItem.name;
        },

        getName: function(quoteItem) {
            var decoded = this.decodeEntities(quoteItem.name);
            return decoded;
        },

        getSku: function(quoteItem) {
            var item = this.getItem(quoteItem.item_id);
            return item.sku;
        },
        getItem: function(item_id) {
            var itemElement = null;
            _.each(window.checkoutConfig.quoteItemData, function(element, index) {
                if (element.item_id == item_id) {
                    itemElement = element;
                }
            });
            return itemElement;
        },

        decodeEntities: function(str) {

            var element = document.createElement('textarea');

            if(str && typeof str === 'string') {
              // strip script/html tags
              str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
              str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
              element.innerHTML = str;
              str = element.textContent;
              element.textContent = '';
            }


            return str;


        }
    });
});
