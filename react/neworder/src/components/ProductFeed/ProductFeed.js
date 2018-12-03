import Papa from 'papaparse'

const ProductFeed = (props) => {

    const uploadHandler = (event) => {
      const inventory = event.target.files[0]

      Papa.parse(inventory, {
        header: true,
        complete: function(results) {   

          const feed = results.data;
          
          console.log(feed)
          return feed;
        }
      })
    }
  } 
    
export default ProductFeed;
