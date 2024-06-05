const getStudentIdsSum = (students) => {
    const sum = students.reduce((result, student) => {
        return result + student.id;
    }, 0);

    return sum;
}

export default getStudentIdsSum;
