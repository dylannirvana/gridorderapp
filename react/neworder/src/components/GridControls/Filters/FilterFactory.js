import Filter from './Filter';

const FILTER_LIST = ['category', 'function']
export default class FilterFactory {


    constructor() {
        const _SELF = this;
        _SELF.filters = new Object();
        _SELF.currentFilterIndex = 0;
    }

    addNewFilter = (filterName, isVisible, index,products) => {

        this.filters[filterName] = {
            filterName, isVisible, index,
            filterOptions: this.getFilterOptions(filterName,products),
            selectedOption: ''
        }
    }

    selectOption = (filterName, option) => {
        this.filters[filterName].selectedOption = option.toLowerCase();
    }

    getFilterOptions = (filterName,products) => {

        let filterOptions= [];
        /*
         * Iterate through the products and populate filter options
         */
        products.forEach((product) => {
            const filterOption = product[filterName] === undefined ? null : product[filterName].split(" ")[0];

            if (filterOption && filterOptions.indexOf(filterOption.toLowerCase()) == -1) {
                filterOptions.push(filterOption.toLowerCase())
            }

        });

        return filterOptions;
    };

    getVisibleFilters = () => {


        let result = new Object();
        let obj = this.filters;

        Object.keys(obj).forEach(function (key) {

            const FILTER = obj[key];

            if (FILTER.isVisible) {
                result[key] = FILTER;
            }
        })


        return Object.keys(obj).length ? result : [];
    }


    updateVisibleFilters = (products, filterName) => {

        if (this.currentFilterIndex < FILTER_LIST.length) {
            this.addNewFilter(FILTER_LIST[this.currentFilterIndex], true, this.currentFilterIndex, products)
            this.currentFilterIndex++;
        }

    };

    filterProducts(products) {
        let selectedOptions = [];
        const _SELF = this;
        const VISIBLE_FILTERS = _SELF.getVisibleFilters();
        FILTER_LIST.forEach(function (filterName) {
            // console.log(renderedFilters)
            Object.keys(VISIBLE_FILTERS).forEach(function (key) {

                //  console.log(filterName, _SELF.filters[filterName])
                const SELECTED_OPTION = _SELF.filters[filterName] !== undefined ? _SELF.filters[filterName].selectedOption : undefined;
                if (key === filterName && SELECTED_OPTION) {
                    selectedOptions.push({
                        name: filterName,
                        selectedOption: SELECTED_OPTION
                    });
                }
            })


        });

        return products.filter(function (product, index) { //Loop through each product in the product feed
            let result = true;
            selectedOptions.some(function (filter) { //Loop through the applied filters

                //Check if the product matches atleast one of the the selected filters
                if (result && product[filter.name] !== undefined && product[filter.name].toLowerCase().indexOf(filter.selectedOption.toLowerCase()) !== -1) {

                    // console.log(filter.label, filter.selectedOption.toLowerCase())
                    //If there is a match, return true and exit the loop

                    // result = true;
                    return false;
                } else {
                    result = false;
                }

                //If there is no match, return false and continue with the loop
                return false;
            })

            return result;
        })

    };


}
