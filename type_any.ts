

let user: any = {};

let student: unknown;
// student.toLocaleUpperCase();
student = ('abc' as string).toUpperCase();
console.log(student);
student = <string>'abc'.toLowerCase();
console.log(<number>student * 6);
student = 123;
console.log(student as number * 6);
console.log(typeof student);
student = 123 as number;

console.log(typeof student);

let a = function () {
    //falkjfa
    // /safjlajf
    //eror ......
    // /ajfsdjf
    //ajfsdjf

}






