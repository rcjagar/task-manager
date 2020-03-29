// proto type examples 
function persone (firstName, secondName, dob){
    this.firstName = firstName;
    this.secondName = secondName;
    this.age = new Date(dob);
    this.calAge = function(){
        const diff = Date.now() - this.age.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}
const per1 =new persone('rc','jag', '1-3-1989');
console.log(per1.calAge());

//prototype superates 

persone.prototype.getFullName = function(){
    return `${this.firstName} ${this.secondName}`
}
persone.prototype.getMary = function(newSurname){
    return secondName = newSurname
}
console.log()
console.log(per1);
console.log(per1.getFullName());
