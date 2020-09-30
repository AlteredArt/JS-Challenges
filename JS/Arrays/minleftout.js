function solution(A) {
    A.sort((a, b) => a - b);
    return A.reduce((acc, val) => acc === val ? acc + 1 : acc, 1);

}
