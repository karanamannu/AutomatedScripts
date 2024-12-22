class EmailGenerator {

    static id = 1; 
  
   static generate(baseEmail) {
     
       let date = new Date()
       let day = date.getDate();
       let month = date.getMonth()+1;
       let year = date.getFullYear();
       var time = date.toLocaleTimeString();
       var hrs=date.getHours(); // => 9
       var minutes=date.getMinutes(); // =>  30
       var secon=date.getSeconds(); // => 51
      // let fullDate = `${day}.${month}.${year}_${hrs}:${minutes}:${secon}`;
      let fullDate = `${day}${month}${year}_${hrs}${minutes}${secon}`;
      // let fullDate = `${day}${month}${year}${date.getHours()}${date.getMinutes()}_${date.getSeconds()}`;
       const uniqueId = `_${fullDate}`;  
      return baseEmail.replace('@', `${uniqueId}@`); 
   
   }

 
 }

export default EmailGenerator
