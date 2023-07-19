function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}



Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;

}

Student.prototype.addMarks = function (...add) {
    if (!this.marks) {
        return console.log("Студент не найден");
    }

    this.marks.push(...add);

}

Student.prototype.getAverage = function () {
    if (!this.marks || this.marks.length===0) {
        return 0;
    }
    const sum = this.marks.reduce((acc, mark) => acc + mark);
    const averageValue = sum / this.marks.length;
    return averageValue;
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}