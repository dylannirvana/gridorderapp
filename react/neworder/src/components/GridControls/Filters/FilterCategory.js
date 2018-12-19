
import './FilterCategoryList';

export default class FilterCategory  {
    constructor(label,feed, rendered= false){

        const _self = this;

        _self.label = label;
        _self.rendered = rendered;
        _self.filters = [];

        _self.getSelectedFilter = function(){
            return this.filters.some(function(filter){
                return filter.selected;
            })
        };

        _self.getFilters = function(){
            return this.filters;
        };

        _self.setActiveFilter = function(label){
            _self.filters.forEach(function(filter,index){

                if(filter.label == label){
                    _self.filters[index].active = true;
                }else{
                    _self.filters[index].active = false;
                }
            })
        }



        feed.forEach(function (product) {
            const filterLabel = product[_self.label] === undefined ? null : product[_self.label].split(" ")[0];
            let filterExists = _self.filters.filter(function(filter){
                return filterLabel != null ? filter.label == filterLabel.toLowerCase() : false;
            })
            if (filterLabel && !filterExists.length) {
                /*if (appliedFilters.length) {
                    let result = appliedFilters.some(function (filter) {

                        return product.category.indexOf(filter.label) != -1;
                    })
                    result && filterValueList.push(filterValue.toLowerCase())
                } else {
                   filterValueList.push(filterValue.toLowerCase())
                }*/

                _self.filters.push({label: filterLabel.toLowerCase(), active: false})


            }

        });


    }
}