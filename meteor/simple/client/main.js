import { Template } from 'meteor/templating';
import { Papa } from 'papaparse';
import './main.html';

var input = document.querySelector('uploadCSV');
console.log(input)

// Parse local CSV file
Papa.parse(input, {
	complete: function(results, file) {
		console.log("Finished:", results.data);
    return results.data;
	}
});
