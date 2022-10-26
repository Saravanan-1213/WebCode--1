

var container= document.createElement("div");
container.setAttribute("class","container");

var row = document.createElement("div");
row.setAttribute("class","row");

container.append(row);

var res=fetch("https://api.openbrewerydb.org/breweries");
res.then((data)=>data.json()).then((data1)=>foo(data1));

async function foo(data1){
  try {
    for(var i=0;i<=data1.length;i++){
      row.innerHTML+=`<div class="col-md-4">
      <div class="card border-warning mb-3" style="max-width: 18rem;">
      <div class="card-body">
      <h5 class="card-title">Name:${data1[i].name}</h5>
      <h5 class="card-title">Type:${data1[i].brewery_type}</h5>
        <h5 class="card-title">Address.:${data1[i].address_2}</h5>
        <h5 class="card-title">Address.:${data1[i].address_3}</h5>
        <h5 class="card-title">Website url:${data1[i].website_url}</h5>
        <h5 class="card-title">Phone no:${data1[i].phone}</h5>
        
        </div>
        </div>
    </div>`
    document.body.append(container);
      }
  } catch (error) {
    console.log(error)
  }
   }




