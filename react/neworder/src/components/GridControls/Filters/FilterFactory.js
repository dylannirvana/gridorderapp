import Filter from './Filter';

const FILTER_LIST = ['category', 'function']
export default class FilterFactory {


    constructor(feed) {
        //const _SELF = this;
        this.filters = new Object();

        this.iterator = 0;

        this.feed = Array.from(feed);

        this.filteredProducts = Array.from(feed);

    }

    addNewFilter = (filterName, isVisible, index) => {

        this.filters[filterName] = {
            filterName,
            isVisible,
            index,
            filterOptions: this.getFilterOptions(filterName),
            selectedOption: ''
        }
    }

    selectOption = (filterName, option) => {
        this.filters[filterName].selectedOption = option.toLowerCase();
    }

    getFilterOptions = (filterName, products) => {

        let filterOptions = [];
        /*
         * Iterate through the products and populate filter options
         */
        this.filteredProducts.forEach((product) => {
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


    updateVisibleFilters = (clickedFilterName, filter = false) => {


        let clickedFilterIndex = clickedFilterName ? this.filters[clickedFilterName].index : undefined;


        if (clickedFilterIndex != undefined && clickedFilterIndex + 1 <= this.iterator - 1) {

            //let feed = Array.from(this.feed);

            const NEW_ITERATOR = clickedFilterIndex;
          //  if (clickedFilterIndex != 0) {
                for (; clickedFilterIndex++ <= this.iterator - 1; clickedFilterIndex++) {
                    delete this.filters[FILTER_LIST[clickedFilterIndex]]
                }
            //}


            this.iterator = 0;
            for (this.iterator = 0; this.iterator === clickedFilterIndex; this.iterator++) {
                let filter = this.filters[FILTER_LIST[this.iterator]];
                this.filteredProducts = this.filterProducts(this.filteredProducts);
                this.addNewFilter(filter.filterName, true, this.iterator)
            }


            this.iterator = NEW_ITERATOR;
            console.log(this.iterator)
            return filter ? this.filteredProducts : true;


        }

        if (this.iterator < FILTER_LIST.length) {


            const FILTER_NAME = FILTER_LIST[this.iterator];
            if (filter) this.filteredProducts = this.filterProducts(this.filteredProducts);

            //result = filter ? this.filterProducts(products) : products;

            this.addNewFilter(FILTER_NAME, true, this.iterator)
            this.iterator++;
            console.log(this.iterator)
            return this.filteredProducts;

        }
        return this.filteredProducts;

    };

    filterProducts(products) {


        let selectedOptions = [];
        const _SELF = this;
        const VISIBLE_FILTERS = _SELF.getVisibleFilters();
        FILTER_LIST.forEach(function (filterName) {

            Object.keys(VISIBLE_FILTERS).forEach(function (key) {


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
