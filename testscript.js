
  fetch("mydata.json")
  .then((jsondata) => jsondata.json())
  .then((actualdata) => {
      var data = actualdata;
      var total_item = data.mobiles.length;
      // console.log(data);
      var brand_list = [];
      var ram_list=[];
      var storage_list=[];
      var camera_list=[];
      var color_list=[];
      var name_list=[];
      var price_list=[];
      var image_list=[];


      for (var i = 0; i <= total_item - 1; i++) {
          if (brand_list.includes(data.mobiles[i]["Brand"])) {
              continue;
          }
          else {
              brand_list.push(data.mobiles[i]["Brand"])
          }
      }

      for (var i = 0; i <= total_item - 1; i++) {
          if (ram_list.includes(data.mobiles[i]["ram"])) {
              continue;
          }
          else {
              ram_list.push(data.mobiles[i]["ram"])
          }
      }

      for (var i = 0; i <= total_item - 1; i++) {
          if (storage_list.includes(data.mobiles[i]["storage"])) {
              continue;
          }
          else {
              storage_list.push(data.mobiles[i]["storage"])
          }
      }

      for (var i = 0; i <= total_item - 1; i++) {
          if (camera_list.includes(data.mobiles[i]["camera"])) {
              continue;
          }
          else {
              camera_list.push(data.mobiles[i]["camera"])
          }
      }

      for (var i = 0; i <= total_item - 1; i++) {
          if (color_list.includes(data.mobiles[i]["color"]["code"])) {
              continue;
          }
          else {
              color_list.push(data.mobiles[i]["color"]["code"])
          }
      }

      for (var i = 0; i <= total_item - 1; i++) {
          if (name_list.includes(data.mobiles[i]["name"])) {
              continue;
          }
          else {
              name_list.push(data.mobiles[i]["name"])
          }
      }
      for (var i = 0; i <= total_item - 1; i++) {
              price_list.push(data.mobiles[i]["price"])
          
      }
      for (var i = 0; i <= total_item - 1; i++) {
          if (image_list.includes(data.mobiles[i]["image"])) {
              continue;
          }
          else {
              image_list.push(data.mobiles[i]["image"])
          }
      }
      function allProduct(){
        var div1=document.createElement('div');
        div1.className="product-img";
        var img=document.createElement('img');
        div1.appendChild(img);
        var div2=document.createElement('div');
        div2.className="product-details";
        console.log('test3');
        var h3=document.createElement('h3');
        h3.className="product-name"; 
        h3.innerHTML="hello";
        var span1=document.createElement('span');
        span1.className="product-price"; 
        var span2=document.createElement('span');
        span2.className="product-camera"; 
        var span3=document.createElement('span');
        span3.className="product-ram"; 
         var span4=document.createElement('span');
        span4.className="product-storage";
        var a=document.createElement('a');
        a.className="view-details-btn";
        a.setAttribute("href",'#');
        div2.appendChild(h3);
        div2.appendChild(span1);
        div2.appendChild(span2);
        div2.appendChild(span3);
        div2.appendChild(span4);
        div2.appendChild(a);
        document.getElementById('card-info').appendChild(div1);
        document.getElementById('card-info').appendChild(div2);
        window.onload=allProduct;
    }
    });


