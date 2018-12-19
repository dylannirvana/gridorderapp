import Filter from './Filter';

const FILTER_LIST = ['category', 'function']
export default class FilterFactory {

    constructor() {
        this.filters = new Object();
        this.filterIndex = 0;
    }

    addFilter(label, feed, rendered) {
        this.filters[label] = new Filter([], label, feed, rendered);

    }

    renderNextFilter(products) {
        if (this.filterIndex < FILTER_LIST.length) {
            this.addFilter(FILTER_LIST[this.filterIndex], products, true)
            this.filterIndex++;
        }

    };

    filterProducts(products) {
        let appliedFilters = [];
        const component = this;
        const renderedFilters = component.getRenderedFilters();
        FILTER_LIST.forEach(function (filterLabel) {
           // console.log(renderedFilters)
            Object.keys(renderedFilters).forEach(function(key){

                if(key === filterLabel){
                    appliedFilters.push({label: filterLabel, selectedOption: component.filters[filterLabel].getSelectedOption()});
                }
            })


        });
      //  console.log(appliedFilters)
        return  products.filter(function (product, index) { //Loop through each product in the product feed

            return appliedFilters.some(function (filter) { //Loop through the applied filters

                //Check if the product matches atleast one of the the selected filters
                if (product[filter.label] !== undefined && product[filter.label].toLowerCase().indexOf(filter.selectedOption.toLowerCase()) !== -1) {

                   // console.log(filter.label, filter.selectedOption.toLowerCase())
                    //If there is a match, return true and exit the loop
                    return true;
                }

                //If there is no match, return false and continue with the loop
                return false;
            })
        })

    };

    getRenderedFilters() {
        let result = new Object();
        let obj = this.filters;

        Object.keys(obj).forEach(function (key) {

            const value = obj[key];

            if (value instanceof Filter && value.shouldRender()) {
                result[key] = value;
            }
        })


        return Object.keys(obj).length ? result : [];
    }

}
