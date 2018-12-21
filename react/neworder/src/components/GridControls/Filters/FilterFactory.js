import Filter from './Filter';

const FILTER_LIST = ['category', 'function', 'designer']
export default class FilterFactory {


    constructor(feed) {
        //const _SELF = this;
        this.filters = new Object();


        this.iterator = {

            index: 0,

            isFirst: () => {
              return this.iterator.index === 0;
            },

            isLast: () => {
                return this.iterator.index === FILTER_LIST.length - 1;
            },
            next: () => {

                if (this.iterator.index <= FILTER_LIST.length - 1) {

                    this.iterator.index++;

                }

                return this.iterator.current();
            },

            prev: () => {

                if (this.iterator.index > 0) {

                    this.iterator.index--;

                }

                return this.iterator.current();
            },

            current: () => {
                if (this.iterator.index < FILTER_LIST.length) {

                    const FILTER_NAME = FILTER_LIST[this.iterator.index];

                    if (!this.filters[FILTER_NAME]) {
                        this.addNewFilter(FILTER_NAME, true);

                    }

                    return this.filters[FILTER_NAME];

                }

                return false;
            },

            goTo: (filterName) => {
                this.iterator.index = FILTER_LIST.indexOf(filterName);

               // this.iterator.index++; //Do not remove clicked filter

                //Remove filters that follow
                for(let i = this.iterator.index + 1; i <= (FILTER_LIST.length - 1); i++){
                    const FILTER_NAME = FILTER_LIST[i];

                    if(this.filters[FILTER_NAME]){
                        delete this.filters[FILTER_NAME];
                    }

                }

                this.filterProducts(true);

                this.iterator.next();
            }


        }

        this.feed = Array.from(feed);

        this.filteredProducts = Array.from(feed);

    }

    addNewFilter = (filterName, isVisible) => {

        this.filters[filterName] = {
            filterName,
            isVisible,
            index: FILTER_LIST[filterName],
            filterOptions: this.getFilterOptions(filterName),
            selectedOption: ''
        }
    }

    toggleFilterOption = (filterName, option) => {
        if (this.filters[filterName].selectedOption === option.toLowerCase()) {
            this.filters[filterName].selectedOption = "";
        } else {
            this.filters[filterName].selectedOption = option.toLowerCase();
        }
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



    updateVisibleFilters = (clickedFilterName = "", filter = false) => {

         if(!clickedFilterName){

             this.iterator.current();


             return this.filterProducts(true);
         }else{
            // const PRODUCTS = this.filterProducts();
            this.iterator.goTo(clickedFilterName);

            return this.filteredProducts;
         }


    };

    getAllSelectedOptions = () => {
        let selectedOptionsList = [];

        const VISIBLE_FILTERS = this.getVisibleFilters();

        FILTER_LIST.forEach(filterName => {

            Object.keys(VISIBLE_FILTERS).forEach(key => {


                const SELECTED_OPTION = this.filters[filterName] !== undefined ? this.filters[filterName].selectedOption : undefined;

                if (key === filterName && SELECTED_OPTION) {
                    selectedOptionsList.push({
                        name: filterName,
                        selectedOption: SELECTED_OPTION
                    });
                }

            })

        });


        return selectedOptionsList;
    };

    filterProducts(reset = false) {

        let selectedOptionsList = this.getAllSelectedOptions();


        if (!selectedOptionsList.length) {
            this.filteredProducts = Array.from(this.feed);


            return this.filteredProducts;
        }

        if (reset) {
            this.filteredProducts = Array.from(this.feed);
        }

        this.filteredProducts = this.filteredProducts.filter(function (product, index) { //Loop through each product in the product feed
            let result = true;
            selectedOptionsList.some((filter) => { //Loop through the applied filters

                //Check if the product matches atleast one of the the selected filters
                if (result && product[filter.name] !== undefined && product[filter.name].toLowerCase().indexOf(filter.selectedOption.toLowerCase()) !== -1) {

                    //If there is a match, return true and exit the loop
                    return false;
                } else {
                    result = false;
                }

                //If there is no match, return false and continue with the loop
                return false;
            })

            return result;
        });

        return this.filteredProducts;

    };


}
