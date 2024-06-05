const updateStudentGradeByCity = (students, city, newGrades) => {

    const filteredStudents = students.filter(
        student => student.location === city
    );

    const updateGrades = filteredStudents.map(
        (student) => {

            const checkGrade = newGrades.find(grade => grade.studentId === student.id);

            if (checkGrade) {
                student["grade"] = checkGrade.grade;
            }
            else {
                student["grade"] = 'N/A';
            }
            return student;
        }
    );

    return updateGrades;

};

export default updateStudentGradeByCity;
