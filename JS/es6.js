const areTrue = (a, b) => ["neither", 'first', 'second', 'both'][a + b * 2]


function areTrue(a, b) {
    return a && b ? 'both'
        : ? 'first'
            : ? 'second'
                : 'neither'
}