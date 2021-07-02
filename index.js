fetch('https://xlsxserver.herokuapp.com/getNames',{
    mode: 'cors',
    headers: {
        'Access-Control-Allow-Origin':'*'
    }
})
.then(response => response.json())
.then(data => {
    console.log(data);
   for(x in data){
       console.log(data[x]);

       var li = document.createElement('li');
       li.classList = 'list-group-item';
       li.innerHTML = data[x];
       rootul = document.getElementById('RootList');
       rootul.appendChild(li);
       
   }
  })