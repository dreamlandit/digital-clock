class Ls {
    create = (key,data)=>{
        const oldData = JSON.parse(localStorage.getItem(key));

        let newData = [];
        if(oldData){
            newData = oldData;
        }
        newData.push(data);

        localStorage.setItem(key,JSON.stringify(newData));
    };

    find =(key)=>{
        return JSON.parse(localStorage.getItem(key));
    };

    delete = (key,deleteData)=>{
       
        const oldData = JSON.parse(localStorage.getItem(key));
        
        const updateData = oldData.filter((data)=> data !== deleteData);

        localStorage.setItem(key, JSON.stringify(updateData));

    };

}