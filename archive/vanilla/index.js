const Papa = require('papaparse');
const csvfile = document.getElementById('csvfile');

csvfile.addEventListener('change', function(event) {
  // alert('Listening...');
  // Parse local CSV file
  Papa.parse(event, {
    complete: function(results) {
      console.log("Finished:", results.data);
    }
  });
  // console.log(event)
})
