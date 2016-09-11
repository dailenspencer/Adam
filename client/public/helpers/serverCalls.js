import $ from 'jquery';

export function pythonCall(companyName, symbol){
  return $.ajax({
    type: 'post',
    url: "http://ec2-52-44-119-179.compute-1.amazonaws.com:8084/",   
    data: {
      'companyName':companyName,
      'symbol': symbol
    },
    xhrFields: {
        withCredentials: false
    },  
    headers: {
      
    }, 
    success: function (data) {
        return JSON.parse(data[0]);
    },  
    error: function () {
        console.log('We are sorry but our servers are having an issue right now');
    }
})
}
