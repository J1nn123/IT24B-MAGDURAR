class Person{

constructor (name,lastname,age){
this.name=name;
this.name=lastname;
this.age=age;


}
introduce () {
    return ` Hi Im ${this.name} e ${this.lastname} im ${this.age}`;

}
}
const roland = new Person("Roland","Magdura",23);

    console.log(roland.introduce());




