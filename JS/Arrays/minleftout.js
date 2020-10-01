function solution(A) {
    A.sort((a, b) => a - b);
    return A.reduce((acc, val) => acc === val ? acc + 1 : acc, 1);

}
solution([1, 3, 6, 4, 1, 2])