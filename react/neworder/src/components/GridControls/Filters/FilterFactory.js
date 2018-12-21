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

        console.log('GET FILTER OPTION' , this.filteredProducts)
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

    getNextFilter = () =>{

    }
    updateFilterIterator = (iteratorValue = false) => {

        if(iteratorValue){
            this.iterator = iteratorValue;
        }else{
            this.iterator = this.iterator + 1 == FILTER_LIST.length ? false : (this.iterator + 1);
        }


    }

    updateVisibleFilters = (clickedFilterName = "", filter = false) => {


        /*if(!this.filters[clickedFilterName].selectedOption){

        }*/

        if (clickedFilterName) {


            //If filter has been de-selected
            if (!this.filters[clickedFilterName].selectedOption) {

                this.iterator = clickedFilterName ? FILTER_LIST.indexOf(clickedFilterName) : this.iterator;

                this.iterator++; //Dont include the filter that was clicked


                for (; this.iterator <= FILTER_LIST.length; this.iterator++) {
                    delete this.filters[FILTER_LIST[this.iterator]]
                    console.log('DELETING ' , this.filters[FILTER_LIST[this.iterator]])
                }

                this.iterator = (FILTER_LIST.indexOf(clickedFilterName) + 1);
                //this.addNewFilter(FILTER_LIST[(FILTER_LIST.indexOf(clickedFilterName) + 1).filterName], true)


                return this.filterProducts(true);
            }




        }

        if (this.iterator < FILTER_LIST.length ||  this.iterator === false) {


            const FILTER_NAME = FILTER_LIST[this.iterator];



            if (filter) {
                this.filteredProducts = this.filterProducts(true)
            };

            //result = filter ? this.filterProducts(products) : products;

            this.addNewFilter(FILTER_NAME, true)
            this.iterator++;

            return this.filteredProducts;

        }



      //  console.log(this.iterator)

        return this.filteredProducts;

    };

    getAllSelectedOptions = () => {
        let selectedOptionsList = [];

        const VISIBLE_FILTERS = this.getVisibleFilters();

        FILTER_LIST.forEach(filterName => {

            Object.keys(VISIBLE_FILTERS).forEach(key => {
                //console.log(filterName)

                const SELECTED_OPTION = this.filters[filterName] !== undefined ? this.filters[filterName].selectedOption : undefined;

                if (key === filterName && SELECTED_OPTION) {
                    selectedOptionsList.push({
                        name: filterName,
                        selectedOption: SELECTED_OPTION
                    });
                }

            })

        });

        console.log('SELECTED OPTIONS ' , selectedOptionsList)
        return selectedOptionsList;
    };

    filterProducts(reset = false) {

        let selectedOptionsList = this.getAllSelectedOptions();


        if (!selectedOptionsList.length) {
            this.filteredProducts = Array.from(this.feed);

            console.log('RSET FILTER PRODUCTS ' , this.filteredProducts)
            return this.filteredProducts;
        }

        if(reset){
            this.filteredProducts = Array.from(this.feed);
        }

        this.filteredProducts = this.filteredProducts.filter(function (product, index) { //Loop through each product in the product feed
            let result = true;
            selectedOptionsList.some( (filter) => { //Loop through the applied filters

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
        console.log('FILTER PRODUCTS ' , this.filteredProducts)

        return this.filteredProducts;

    };


}
