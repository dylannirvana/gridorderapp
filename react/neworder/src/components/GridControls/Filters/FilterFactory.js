import Filter from './Filter';

const FILTER_LIST = ['category', 'function']
export default class FilterFactory {


    constructor() {
        const _SELF = this;
        _SELF.filters = new Object();
        _SELF.filterIndex = 0;
    }

    addContext(label, feed, rendered) {
        const _SELF = this;
        _SELF.filters[label] = new Filter([], label, feed, rendered);

    }

    getRenderedContexts() {

        const _SELF = this;

        let result = new Object();
        let obj = _SELF.filters;

        Object.keys(obj).forEach(function (key) {

            const value = obj[key];

            if (value instanceof Filter && value.shouldRender()) {
                result[key] = value;
            }
        })


        return Object.keys(obj).length ? result : [];
    }

    updateContext(products) {
        const _SELF = this;
        if (_SELF.filterIndex < FILTER_LIST.length) {
            _SELF.addContext(FILTER_LIST[_SELF.filterIndex], products, true)
            _SELF.filterIndex++;
        }

    };

    filterProducts(products) {
        let selectedOptions = [];
        const _SELF = this;
        const RENDERED_CONTEXTS = _SELF.getRenderedContexts();
        FILTER_LIST.forEach(function (filterName) {
            // console.log(renderedFilters)
            Object.keys(RENDERED_CONTEXTS).forEach(function (key) {

              //  console.log(filterName, _SELF.filters[filterName])
                const SELECTED_OPTION =  _SELF.filters[filterName] !== undefined ? _SELF.filters[filterName].getSelectedOption() : undefined;
                if (key === filterName && SELECTED_OPTION) {
                    selectedOptions.push({
                        name: filterName,
                        selectedOption: SELECTED_OPTION
                    });
                }
            })


        });
          console.log(selectedOptions,RENDERED_CONTEXTS)
        return products.filter(function (product, index) { //Loop through each product in the product feed
            let result = true;
             selectedOptions.some(function (filter) { //Loop through the applied filters

                //Check if the product matches atleast one of the the selected filters
                if (result && product[filter.name] !== undefined && product[filter.name].toLowerCase().indexOf(filter.selectedOption.toLowerCase()) !== -1) {
console.log(product[filter.name])
                    // console.log(filter.label, filter.selectedOption.toLowerCase())
                    //If there is a match, return true and exit the loop

                   // result = true;
                    return false;
                }else{
                    result = false;
                }

                //If there is no match, return false and continue with the loop
                return false;
            })

            return result;
        })

    };


}
