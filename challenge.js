function angryProfessor(k, a) {
    // Write your code here
    return a.filter(v => v <= 0).length >= k ? 'NO' : 'YES'
}
