"use strict";
class A {
    constructor(_name) {
        this.name = _name;
    }
    showName() {
        console.log(this.name)
    }
    static showMe() {
        console.log('A');
    }
}
var a = new A('fillano');
a.showName();
A.showMe();
class B extends A {
    constructor(_name, _gender) {
        super(_name);
        this.gender = _gender;
    }
    showGender() {
        super.showName();
        console.log('is ' + this.gender);
    }
    static showMe() {
        console.log('B')
    }
}
var b = new B('nobody', 'neutral');
b.showGender();
B.showMe();