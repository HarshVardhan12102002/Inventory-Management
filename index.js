(function () {
    var Items = {
    Name: "",
    Num: 0,
    Status: "",
    
    };
    
    var inventory = {
    
    clearuielements: function () {
        var inputs = document.getElementsByClassName("c1");
        for (i = 0; i < inputs.length; i++) {
            inputs[i].value = "";
        }
    },
    
    saveitem: function () {
        var lscount = localStorage.length; 
        var inputs = document.getElementsByClassName("c1");
                Items.Name = inputs[0].value;
                Items.Num = inputs[1].value;
                Items.Status = inputs[2].value; 
                
                
        
                localStorage.setItem("Items_" + lscount, JSON.stringify(Items));
        
                location.reload();
    },
    
    loaddata: function () {
        var datacount = localStorage.length;
        if (datacount > 0)
        {
            var render = "<table border='1'>";
            render += "<tr><th>Name</th><th>Num</th> +<th>Status</th></tr>";
            for (i = 0; i < datacount; i++) {
                var key = localStorage.key(i); 
                var Items = localStorage.getItem(key); 
                var data = JSON.parse(Items); 
                render += "<tr><td>" + data.Name + "</td><td>" + data.Num + " </td>";
                render += "<td>" + data.Status + "</td></tr>";
                
            }
            render+="</table>";
            dvcontainer.innerHTML = render;
        }
    },
    //Method to Clear Storage
    clearstorage: function () {
        var storagecount = localStorage.length; 
        if (storagecount > 0)
        {
            for (i = 0; i < storagecount; i++) {
                localStorage.clear();
            }
        }
        window.location.reload();
    }
    };
    
    var btnsave = document.getElementById('btnsave');
    btnsave.addEventListener('click', inventory.saveitem, false);
    
    var btnclear = document.getElementById('btnclear');
    btnclear.addEventListener('click', inventory.clearuielements, false);
    
    var btnclearstorage = document.getElementById('btnclearstorage');
    btnclearstorage.addEventListener('click', inventory.clearstorage, false);
    
    window.onload = function () {
    inventory.loaddata();
    };
    })