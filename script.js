// Construction function
function Student(name, email, cell) {
    this.name = name;
    this.email = email;
    this.cell = cell;

    this.info = function() {
        return `Cantact info of ${name} = Email : ${email}  Cell : ${cell}`;
    };
}

let stu = new Student("Munira", "muniraweb@gmail.com", "01881959920");

console.log(stu.info());