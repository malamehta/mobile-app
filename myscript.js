
       
       

         // ------------fetching data from json file----

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
                        name_list.push(data.mobiles[i]["name"]);
                }
                for (var i = 0; i <= total_item - 1; i++) {
                        price_list.push(data.mobiles[i]["price"])
                    
                }
                for (var i = 0; i <= total_item - 1; i++) {
                        image_list.push(data.mobiles[i]["image"]);
                    
                }
             


                // ----function for extracting brand list-----
                function myBrand() {
                   
                    for (var j = 0; j <= 3; j++) {
                      var li=document.createElement('li');
                      var label=document.createElement('label');
                      label.className="item";
                      label.setAttribute('for',brand_list[j]);
                      label.setAttribute('data-name',brand_list[j]);
                      var input=document.createElement('input');
                      input.className="Brand";
                      input.setAttribute("type","checkbox");
                      input.setAttribute("name","brand-txt");
                      input.setAttribute("value",brand_list[j])
                      input.id=brand_list[j];
                      var span =document.createElement('span');
                      span.className='label-txt';
                      span.innerHTML=brand_list[j];
                      label.appendChild(input);
                      label.appendChild(span);
                      label.style.cursor="pointer";
                      li.appendChild(label);

                      document.getElementById('default-brand-options').appendChild(li);

                    }
                    if(brand_list.length>3){
                        var a=document.createElement('a');
                        a.className='see-more';
                        a.id='see-more-brand';
                        a.setAttribute("href","#");
                        a.innerHTML="see more";
                        // document.getElementById("default-brand-options").appendChild(a);
                        var moreContent=document.createElement("ul");
                        moreContent.id="more-brand-options";
                        moreContent.style.display="none";
                        document.getElementById("default-brand-options").appendChild(moreContent); 
                       
                        // -----more-options---
                    
                        for(var k=4;k<=brand_list.length-1;k++){
                                var li=document.createElement('li');
                                var label=document.createElement('label');
                                label.className="item";
                                label.setAttribute('for',brand_list[k]);
                                label.setAttribute('data-name',brand_list[k]);
                                var input=document.createElement('input');
                                input.className="Brand";
                                input.setAttribute("type","checkbox");
                                input.setAttribute("name","brand-txt");
                                input.setAttribute("value",brand_list[k])
                                input.id=brand_list[k];
                                var span =document.createElement('span');
                                span.className='label-txt';
                                span.innerHTML=brand_list[k];
                                label.appendChild(input);
                                label.appendChild(span); 
                                li.appendChild(label);
                                label.style.cursor="pointer";
                                moreContent.appendChild(li);

                        }
                        document.getElementById("default-brand-options").appendChild(a);
                    }
                   
                    $(document).ready(function(){
                    $(document).ready(function(){
                    $("#see-more-brand").click(function(){
                    $(this).text($(this).text() == 'see less' ? 'see more' : 'see less'),
                    $("#more-brand-options").toggle();
                       });
                          });
                    })
                    
                   
                     
                }
                var allBrand = myBrand();


                // ------function for extracting ram----
                function myRam() {
                  
                    for (var j = 0; j <= 1; j++) {
                      var li=document.createElement('li');
                      var label=document.createElement('label');
                      label.className="item";
                      label.setAttribute('for',ram_list[j]);
                      label.setAttribute('data-name',ram_list[j]);
                      var input=document.createElement('input');
                      input.className="ram";
                      input.setAttribute("type","checkbox");
                      input.setAttribute("name","ram-txt");
                      input.setAttribute("value",ram_list[j]);
                      input.id=ram_list[j];
                      var span =document.createElement('span');
                      span.className='label-txt';
                      span.innerHTML=ram_list[j];
                      label.appendChild(input);
                      label.appendChild(span);
                      label.style.cursor="pointer";
                      li.appendChild(label);

                      document.getElementById('default-ram-options').appendChild(li);

                    }
                    if(ram_list.length>3){
                        var a=document.createElement('a');
                        a.className='see-more';
                        a.id='see-more-ram';
                        a.setAttribute("href","#");
                        a.innerHTML="see more";
                        // document.getElementById("default-brand-options").appendChild(a);
                        var moreContent=document.createElement("ul");
                        moreContent.id="more-ram-options";
                        moreContent.style.display="none";
                        document.getElementById("default-ram-options").appendChild(moreContent); 
                       
                        // -----more-options---
                    
                        for(var k=2;k<=ram_list.length-1;k++){
                            var li=document.createElement('li');
                                var label=document.createElement('label');
                                label.className="item";
                                label.setAttribute('for',ram_list[k]);
                                label.setAttribute('data-name',ram_list[k]);
                                var input=document.createElement('input');
                                input.className="ram";
                                input.setAttribute("type","checkbox");
                                input.setAttribute("name","ram-txt");
                                input.setAttribute("value",ram_list[k]);
                                input.id=ram_list[k];
                                var span =document.createElement('span');
                                span.className='label-txt';
                                span.innerHTML=ram_list[k];
                                label.appendChild(input);
                                label.appendChild(span);
                                label.style.cursor="pointer"; 
                                li.appendChild(label);

                                moreContent.appendChild(li);

                        }
                        document.getElementById("default-ram-options").appendChild(a);
                    }
                   
                    $(document).ready(function(){
                    $(document).ready(function(){
                    $("#see-more-ram").click(function(){
                    $(this).text($(this).text() == 'see less' ? 'see more' : 'see less'),
                    $("#more-ram-options").toggle();
                       });
                          });
                    })
                    
                   
                     
                }
                var allRam = myRam();



                 // ------function for extracting storage----
                 function myStorage() {
                   
                    for (var j = 0; j <= 1; j++) {
                      var li=document.createElement('li');
                      var label=document.createElement('label');
                      label.className="item";
                      label.setAttribute('for',storage_list[j]);
                      label.setAttribute('data-name',storage_list[j]);
                      var input=document.createElement('input');
                      input.className="storage";
                      input.setAttribute("type","checkbox");
                      input.setAttribute("name","storage-txt");
                      input.setAttribute("value",storage_list[j])
                      input.id=storage_list[j];
                      var span =document.createElement('span');
                      span.className='label-txt';
                      span.innerHTML=storage_list[j];
                      label.appendChild(input);
                      label.appendChild(span);
                      label.style.cursor="pointer";
                      li.appendChild(label);

                      document.getElementById('default-storage-options').appendChild(li);

                    }
                    if(storage_list.length>3){
                        var a=document.createElement('a');
                        a.className='see-more';
                        a.id='see-more-storage';
                        a.setAttribute("href","#");
                        a.innerHTML="see more";
                        // document.getElementById("default-brand-options").appendChild(a);
                        var moreContent=document.createElement("ul");
                        moreContent.id="more-storage-options";
                        moreContent.style.display="none";
                        document.getElementById("default-storage-options").appendChild(moreContent); 
                       
                        // -----more-options---
                    
                        for(var k=2;k<=storage_list.length-1;k++){
                            var li=document.createElement('li');
                                var label=document.createElement('label');
                                label.className="item";
                                label.setAttribute('for',storage_list[k]);
                                label.setAttribute('data-name',storage_list[k]);
                                var input=document.createElement('input');
                                input.className="storage";
                                input.setAttribute("type","checkbox");
                                input.setAttribute("name","storage-txt");
                                input.setAttribute("value",ram_list[k])
                                input.id=storage_list[k];
                                var span =document.createElement('span');
                                span.className='label-txt';
                                span.innerHTML=storage_list[k];
                                label.appendChild(input);
                                label.appendChild(span); 
                                label.style.cursor="pointer";
                                li.appendChild(label);

                                moreContent.appendChild(li);

                        }
                        document.getElementById("default-storage-options").appendChild(a);
                    }
                   
                    $(document).ready(function(){
                    $(document).ready(function(){
                    $("#see-more-storage").click(function(){
                    $(this).text($(this).text() == 'see less' ? 'see more' : 'see less'),
                    $("#more-storage-options").toggle();
                       });
                          });
                    })
                    
                   
                     
                }
                var allStorage = myStorage();



                
                 // ------function for extracting Camera----
                 function myCamera() {
                  
                    for (var j = 0; j <= 1; j++) {
                      var li=document.createElement('li');
                      var label=document.createElement('label');
                      label.className="item";
                      label.setAttribute('for',camera_list[j]);
                      label.setAttribute('data-name',camera_list[j]);
                      var input=document.createElement('input');
                      input.className="camera";
                      input.setAttribute("type","checkbox");
                      input.setAttribute("name","camera-txt");
                      input.setAttribute("value",camera_list[j])
                      input.id=camera_list[j];
                      var span =document.createElement('span');
                      span.className='label-txt';
                      span.innerHTML=camera_list[j];
                      label.appendChild(input);
                      label.appendChild(span);
                      label.style.cursor="pointer";
                      li.appendChild(label);

                      document.getElementById('default-camera-options').appendChild(li);

                    }
                    if(camera_list.length>3){
                        var a=document.createElement('a');
                        a.className='see-more';
                        a.id='see-more-camera';
                        a.setAttribute("href","#");
                        a.innerHTML="see more";
                        // document.getElementById("default-brand-options").appendChild(a);
                        var moreContent=document.createElement("ul");
                        moreContent.id="more-camera-options";
                        moreContent.style.display="none";
                        document.getElementById("default-camera-options").appendChild(moreContent); 
                       
                        // -----more-options---
                    
                        for(var k=2;k<=camera_list.length-1;k++){
                            var li=document.createElement('li');
                                var label=document.createElement('label');
                                label.className="item";
                                label.setAttribute('for',camera_list[k]);
                                label.setAttribute('data-name',camera_list[k]);
                                var input=document.createElement('input');
                                input.className="camera";
                                input.setAttribute("type","checkbox");
                                input.setAttribute("name","ram-txt");
                                input.setAttribute("value",camera_list[k])
                                input.id=camera_list[k];
                                var span =document.createElement('span');
                                span.className='label-txt';
                                span.innerHTML=camera_list[k];
                                label.appendChild(input);
                                label.appendChild(span); 
                                label.style.cursor="pointer";
                                li.appendChild(label);

                                moreContent.appendChild(li);

                        }
                        document.getElementById("default-camera-options").appendChild(a);
                    }
                   
                    $(document).ready(function(){
                    $(document).ready(function(){
                    $("#see-more-camera").click(function(){
                    $(this).text($(this).text() == 'see less' ? 'see more' : 'see less'),
                    $("#more-camera-options").toggle();
                       });
                          });
                    })
                    
                   
                     
                }
                var allCamera = myCamera();


                // ----function for color---
                function myColor() {
                  
                    for (var j = 0; j <= 4; j++) {
                      var li=document.createElement('li');
                      li.className="color-list-options";
                      li.style.backgroundColor=color_list[j];
                      var span=document.createElement('span');
                      span.innerHTML="&#10004";
                      span.style.color=color_list[j+1];
                      li.style.borderColor=color_list[j+1];
                      li.appendChild(span);
                      document.getElementById('default-color-options').appendChild(li);

                    }
                    
                    if(color_list.length>3){
                        var a=document.createElement('a');
                        a.className='see-more';
                        a.id='see-more-color';
                        a.setAttribute("href","#");
                        a.innerHTML="see more";
                        var moreContent=document.createElement("ul");
                        moreContent.id="more-color-options";
                        moreContent.style.display="none";
                        document.getElementById("default-color-options").appendChild(moreContent); 
                       
                        // -----more-options---
                    
                        for(var k=5;k<=brand_list.length-1;k++){
                                var li=document.createElement('li');
                                li.className="color-list-options";
                                li.style.backgroundColor=color_list[k];
                                var span=document.createElement('span');
                                span.innerHTML="&#10004";
                                span.style.color=color_list[k+1];
                                li.appendChild(span);
                                moreContent.appendChild(li);

                        }
                        document.getElementById("default-color-options").appendChild(a);   
                    }

                  // ----price range---

                    const rangeInput = document.querySelectorAll(".range-input input"),
                    priceInput = document.querySelectorAll(".price-input input"),
                    range = document.querySelector(".slider .progress");
                    let priceGap = 1000;

                        priceInput.forEach(input => {
                            input.addEventListener("input", e => {
                                let minPrice = parseInt(priceInput[0].value),
                                    maxPrice = parseInt(priceInput[1].value);

                                if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
                                    if (e.target.className === "input-min") {
                                        rangeInput[0].value = minPrice;
                                        range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
                                    } else {
                                        rangeInput[1].value = maxPrice;
                                        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
                                    }
                                }
                            });
                        });

                        rangeInput.forEach(input => {
                            input.addEventListener("input", e => {
                                let minVal = parseInt(rangeInput[0].value),
                                    maxVal = parseInt(rangeInput[1].value);

                                if ((maxVal - minVal) < priceGap) {
                                    if (e.target.className === "range-min") {
                                        rangeInput[0].value = maxVal - priceGap
                                    } else {
                                        rangeInput[1].value = minVal + priceGap;
                                    }
                                } else {
                                    priceInput[0].value = minVal;
                                    priceInput[1].value = maxVal;
                                    range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
                                    range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
                                }
                            });
                        });


                    // ---on click function--
                                         
     
                
                    $(document).ready(function(){
                    $("#see-more-color").click(function(){
                    $(this).text($(this).text() == 'see less' ? 'see more' : 'see less'),
                    $("#more-color-options").toggle();
                       });
                    

                    //  ----function for color selection---  
                     $('.color-list-options').on("click",function(){
                        $(this).addClass('active');
                     })  
                          });
                     
                     
                }
                var allColor = myColor();
               
                // --------all product----
                function allProduct(data){
                //    console.log(data);
                    for(var i=0;i<name_list.length;i++){
                    var div1=document.createElement('div');
                    div1.className="product-img";
                    var img=document.createElement('img');
                    img.setAttribute("src","images/"+data.mobiles[i]['image']);
                    div1.appendChild(img);
                    var div2=document.createElement('div');
                    div2.className="product-details";
                    var h3=document.createElement('h3');
                    h3.className="product-name"; 
                    h3.innerHTML=data.mobiles[i]['name'];
                    var span1=document.createElement('span');
                    span1.className="product-price";
                    span1.innerHTML='Price:Rs.'+data.mobiles[i]["price"]; 
                    var div3=document.createElement('div');
                    div3.className="info-wrapper";
                    var span2=document.createElement('span');
                    span2.className="product-camera";
                    span2.innerHTML='Camera:'+data.mobiles[i]["camera"]; 
                    var span3=document.createElement('span');
                    span3.className="product-ram"; 
                    span3.innerHTML='Ram:'+data.mobiles[i]["ram"];
                    var span4=document.createElement('span');
                    span4.className="product-storage";
                    span4.innerHTML='Storage'+data.mobiles[i]["storage"];
                    var a=document.createElement('a');
                    a.className="view-details-btn";
                    a.setAttribute("href",'#');
                    a.innerHTML="View Details";
                    var div4=document.createElement('div');
                    div4.className="fa fa-heart";
                    div4.id="heart-icon";
                    // var img2=document.createElement('img');
                    // img2.setAttribute("src","images/heart-img.svg")
                    // div4.appendChild(img2);
                    div2.appendChild(h3);
                    div2.appendChild(span1);
                    div3.appendChild(span2);
                    div3.appendChild(span3);
                    div3.appendChild(span4);
                    div2.appendChild(div3);
                    div2.appendChild(a);
                    var div=document.createElement('div');
                    div.className="card";
                    div.appendChild(div4);
                    div.appendChild(div1);
                    div.appendChild(div2);

                    
                    document.getElementById('card-wrapper').appendChild(div);
                }

                }

                allProduct(data);




    //    function after click event
                
         function getproduct(jsons = {}, datas = {'key':'','value':''}){
            var result = [];
            var allmobile = data['mobiles'];
            if(datas['key'] == '' || datas['key'] == null){
                result.push(allmobile);
            }else{
                    allmobile.forEach(element => {
                        switch(datas['key']){
                            case 'price':
                                if(element['price'] >= datas['value'][0] && element['price'] <= datas['value'][1]){
                                    result.push(element);
                                }
                            default:
                                if(element[datas['key']] == datas['value']){
                                    result.push(element);
                                }
                                break;
                        }
                    });

                }
            return result;
            console.log(result);
            // var res=result[0].Brand;
            // console.log(res);
        }
            
    
        function filterData(){
        var checkboxes=document.getElementsByTagName('input');
        var listArray=[];
        var filterArray=[];
        var category;
        for(var checkbox of checkboxes){
            checkbox.addEventListener('click',function(){
                if(this.checked==true){
                var valueName=this.value;
                listArray.push(valueName);
                category=this.className;
                }
                else{
                   listArray=listArray.filter(e=>e !==this.value); 
                
                }
                for(var i=0;i<listArray.length;i++)
                {
                    filterArray.push(getproduct(data['mobiles'],{'key':category,'value':listArray[i]}));
                    
                }  

                
             filterData();   
            })
           
        }
        
        console.log("filter array",filterArray);
    }
    filterData();


        // function for filter product from search bar
       
        var filterInput=document.getElementById('filterinput');
        filterInput.addEventListener('keyup',filterproduct);
        var cardSection=document.querySelector('.card-section');

        function filterproduct(){
            let filterValue=filterInput.value.toUpperCase();
            // console.log(filterValue);
            let cardItem=cardSection.querySelectorAll('.card');
            for(var i=0;i<cardItem.length;i++){
                let span=cardItem[i].querySelector('.product-name');
                if(span.innerHTML.toUpperCase().indexOf(filterValue)>-1){
                    cardItem[i].style.display="block";
                }else{
                    cardItem[i].style.display="none";
                }
            }
            // console.log(filterValue);
        }
            });
            
              
               

          















       
