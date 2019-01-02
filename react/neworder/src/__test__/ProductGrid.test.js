import React, {Component} from 'react';
import renderer from 'react-test-renderer';
import {mount, shallow} from 'enzyme';
import Enzyme from 'enzyme';
import toJson from 'enzyme-to-json';
import {createSerializer} from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import ProductGrid from '../components/ProductGrid/ProductGrid';
import Product from '../components/ProductGrid/Product';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() })
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

const DATA = JSON.parse('[{"sku":"81134","name":"Studio Swing Arm Floor Lamp","category":"Floor > Task","function":"Functional","relatives":"VC CLASSIC","designer":"Studio VC","image":"https://www.circalighting.com/media/catalog/product/8/1/81134hab_5.png","gridorder":"1215.0000","neworder":"","__parsed_extra":[""]},{"sku":"82034","name":"Studio Swing Arm Wall Light","category":"Wall > Task","function":"Functional","relatives":"VC CLASSIC","designer":"Studio VC","image":"https://www.circalighting.com/media/catalog/product/8/2/82034hab_1.png","gridorder":"4742.0000","neworder":"","__parsed_extra":[""]},{"sku":"91025","name":"Studio Adjustable Floor Lamp","category":"Floor > Task","function":"Functional","relatives":"VC CLASSIC","designer":"Studio VC","image":"https://www.circalighting.com/media/catalog/product/9/1/91025hab_5.png","gridorder":"1211.0000","neworder":"","__parsed_extra":[""]},{"sku":"92000D","name":"Classic Swing Arm Wall Lamp","category":"Wall > Task","function":"Functional","relatives":"VC CLASSIC","designer":"Studio VC","image":"https://www.circalighting.com/media/catalog/product/9/2/92000dhabl_1.png","gridorder":"4536.0000","neworder":"","__parsed_extra":[""]},{"sku":"92025","name":"Studio Swing Arm Wall Light","category":"Wall > Task","function":"Functional","relatives":"VC CLASSIC","designer":"Studio VC","image":"https://www.circalighting.com/media/catalog/product/9/2/92025hab_1.png","gridorder":"4738.0000","neworder":"","__parsed_extra":[""]},{"sku":"AH2000","name":"Dean Single Arm Sconce","category":"Wall > Decorative","function":"Decorative","relatives":"Dean","designer":"Alexa Hampton","image":"https://www.circalighting.com/media/catalog/product/a/h/ah2000pnnp_5.png","gridorder":"4159.0000","neworder":"","__parsed_extra":[""]},{"sku":"AH2001","name":"Dean Library Sconce","category":"Wall > Decorative","function":"Decorative","relatives":"Dean","designer":"Alexa Hampton","image":"https://www.circalighting.com/media/catalog/product/a/h/ah2001pnnp_8.png","gridorder":"4161.0000","neworder":"","__parsed_extra":[""]},{"sku":"AH2002","name":"Abbot Single Arm Sconce","category":"Wall > Decorative","family": "test-family", "function":"Decorative","relatives":"Abbot","designer":"Alexa Hampton","image":"https://www.circalighting.com/media/catalog/product/a/h/ah2002pnnp_8.png","gridorder":"4144.0000","neworder":"","__parsed_extra":[""]},{"sku":"AH2003","name":"Abbot Library Sconce","category":"Wall > Decorative","function":"Decorative","relatives":"Abbot","designer":"Alexa Hampton","image":"https://www.circalighting.com/media/catalog/product/a/h/ah2003gmnp_5.png","gridorder":"4146.0000","neworder":"","__parsed_extra":[""]},{"sku":"AH2004","name":"Bing Single Arm Sconce","category":"Wall > Decorative","function":"Decorative","relatives":"Bing","designer":"Alexa Hampton","image":"https://www.circalighting.com/media/catalog/product/a/h/ah2004pnnp_5.png","gridorder":"4137.0000","neworder":"","__parsed_extra":[""]},{"sku":"AH2010","name":"Ginger Single Arm Sconce","category":"Wall > Decorative","function":"Decorative","relatives":"Ginger","designer":"Alexa Hampton","image":"https://www.circalighting.com/media/catalog/product/a/h/ah2010pnnp_5.png","gridorder":"4139.0000","neworder":"","__parsed_extra":[""]},{"sku":"AH2012","name":"Gene Swing Arm","category":"Wall > Task","function":"Functional","relatives":"Gene","designer":"Alexa Hampton","image":"https://www.circalighting.com/media/catalog/product/a/h/ah2012nbs_1.png","gridorder":"4525.0000","neworder":"","__parsed_extra":[""]},{"sku":"AH2013","name":"Gene Library Sconce","category":"Wall > Decorative", "family": "test-family", "function":"Decorative","relatives":"Gene","designer":"Alexa Hampton","image":"https://www.circalighting.com/media/catalog/product/a/h/ah2013nbnp_5.png","gridorder":"4150.0000","neworder":"","__parsed_extra":[""]},{"sku":"AH2700","name":"Dean 9\\" Picture Light","category":"Wall > Picture","function":"Picture","relatives":"Dean2","designer":"Alexa Hampton","image":"https://www.circalighting.com/media/catalog/product/a/h/ah2700nb_1.png","gridorder":"5324.0000","neworder":"","__parsed_extra":[""]},{"sku":"AH2701","name":"Dean 12\\" Picture Light","category":"Wall > Picture","function":"Picture","relatives":"Dean2","designer":"Alexa Hampton","image":"https://www.circalighting.com/media/catalog/product/a/h/ah2701nb_1.png","gridorder":"5328.0000","neworder":"","__parsed_extra":[""]},{"sku":"AH2702","name":"Dean 18\\" Picture Light","category":"Wall > Picture","function":"Picture","relatives":"Dean2","designer":"Alexa Hampton","image":"https://www.circalighting.com/media/catalog/product/a/h/ah2702nb_1.png","gridorder":"5332.0000","neworder":"","__parsed_extra":[""]},{"sku":"AH2703","name":"Dean 24\\" Picture Light","category":"Wall > Picture","function":"Picture","relatives":"Dean2","designer":"Alexa Hampton","image":"https://www.circalighting.com/media/catalog/product/a/h/ah2703nb_1.png","gridorder":"5336.0000","neworder":"","__parsed_extra":[""]}]');


describe('<ProductGrid/>',()=>{
    const APP_INSTANCE = renderer.create(
        <App  />
    ).getInstance();
//console.log(APP_INSTANCE)
    APP_INSTANCE.container.setState({
        feed: Array.from(DATA),
        filteredProducts: DATA,
        packeryRefresh: false
    });
    const FILTER_FACTORY = APP_INSTANCE.container.getFilterFactory();

    it('Verify Snapshot', () => {




        const PRODUCT_GRID_COMPONENT = renderer.create(
            <ProductGrid container={APP_INSTANCE.container} />
        );

        // const PRODUCT_GRID = PRODUCT_GRID_COMPONENT.getInstance();

        expect(PRODUCT_GRID_COMPONENT).toMatchSnapshot()
    });

    it('Verify if selecting Category -> Floor returns 15 products'  ,()=>{
       // console.log(FILTER_FACTORY)
        const FILTERED_PRODUCTS = FILTER_FACTORY.toggleFilterOption('category','wall');

        //EXPECT: Correct product count is returned returned
        expect(FILTERED_PRODUCTS).toHaveLength(15);

        //EXPECT: Category attribute of each product to contain the keyword - Wall
        FILTERED_PRODUCTS.forEach((product) => expect(product.category).toContain('Wall'))

        //EXPECT: Result is same as the saved snapshot
        expect(FILTERED_PRODUCTS).toMatchSnapshot();

    })

    it('Verify if selecting Function -> Decorative returns 7 products'  ,()=>{

        //Select the option
        const FILTERED_PRODUCTS = FILTER_FACTORY.toggleFilterOption('function','decorative');

        //EXPECT: Correct product count is returned
        expect(FILTERED_PRODUCTS).toHaveLength(7);

        //EXPECT: Function attribute of each product to contain the keyword - Decorative
        FILTERED_PRODUCTS.forEach((product) => expect(product.function).toContain('Decorative'))

        //EXPECT: Result is same as the saved snapshot
        expect(FILTERED_PRODUCTS).toMatchSnapshot();

    })

    it('Verify if sorting by family "test-family" sorts correctly'  ,()=>{

        //Select the sort option
        const FILTERED_PRODUCTS = FILTER_FACTORY.toggleFilterOption('family','test-family');

        //FILTER_FACTORY should be ready to sort
        const SHOULD_SORT = FILTER_FACTORY.shouldSort('family')
        expect(SHOULD_SORT).toEqual(true);

        //Test Data has two products with family == "test-family"

        //Before sort, first two products should not be having Family attribute's value "test-family"
        !expect(FILTERED_PRODUCTS[0].family).toEqual('test-family');
        !expect(FILTERED_PRODUCTS[1].family).toEqual('test-family');

        //Do the sorting
        const SORTED_PRODUCTS = FILTER_FACTORY.sortProducts({filterName: "family", selectedOption:"test-family"});

        //Product count should be the same before and after the sorting
        expect(SORTED_PRODUCTS).toHaveLength(7);

        //After sort, first two products should  be having Family attribute's value "test-family"
        expect(SORTED_PRODUCTS[0].family).toEqual('test-family');
        expect(SORTED_PRODUCTS[1].family).toEqual('test-family');

        //Create snapshot
        expect(SORTED_PRODUCTS).toMatchSnapshot();
    })
})
