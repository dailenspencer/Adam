import $ from 'jquery';

export function pythonCall(companyName, symbol){
  return $.ajax({
    type: 'post',
    url: "http://localhost:8084",   
    data: {
      'companyName':companyName,
      'symbol': symbol
    },
    xhrFields: {
        withCredentials: false
    },  
    headers: {
      contentType: 'application/json'
    }, 
    success: function (data) {
        console.log('Success');
        console.log(data);
    },  
    error: function () {
        console.log('We are sorry but our servers are having an issue right now');
    }
})
}
