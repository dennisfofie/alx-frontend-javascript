const getListStudentIds = (students) => {
    if (!Array.isArray(students)) {
        return [];
    }

    const studentId = [];

    students.map((student) => {
        studentId.push(student.id);
    });

    return studentId;
};

export default getListStudentIds;
