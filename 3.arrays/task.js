function compareArrays(arr1, arr2) {
    let equal = arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
    return equal;
}

function getUsersNamesInAgeRange(users, gender) {
    const filter = users.filter(user => user.gender === gender).map(user => user.age);
    if (filter.length === 0) { return 0; }
    const ageOfUsers = filter.reduce((acc, age) => (acc + age), 0);

    const result = ageOfUsers / filter.length;
    return result;
}
