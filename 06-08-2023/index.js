Array.prototype.sortMethod = function(){
    //  var c= this[1];
    //return c;
            var newArr=[];
            for (var i = 0; i < this.length; i++)   
               {  
                 for (var j = i + 1; j < this.length; j++)   
                 {  
                  var tmp = 0;  
                  if (this[i] > this[j])   
                  {  
                    tmp = this[i];  
                    this[i] = this[j];  
                    this[j] = tmp;  
    }  
    } 
    newArr.push(this[i]);  
    }
            return newArr[1];
        }
       
    myArray = [11,234,1,89,34,546,32];
    // myArray.sort();
    console.log(myArray.sortMethod());
    
    //
    
    