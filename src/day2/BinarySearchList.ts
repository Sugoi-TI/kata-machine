export default function bs_list(haystack: number[], needle: number): boolean {
    let start = 0;
    let end = haystack.length;

    do {
        const middle = Math.floor(start + (end - start) / 2);
        if (haystack[middle] == needle) {
            return true;
        } else if (haystack[middle] < needle) {
            start = middle + 1;
        } else {
            end = middle;
        }
    } while (start < end);

    return false;
}

// function bs_list_recurs(haystack: number[], needle: number): boolean {
//     const middle = Math.floor(0 - haystack.length / 2);
//     if (haystack[middle] === needle) {
//         return true;
//     } else if (haystack[middle] < needle) {
//         bs_list_recurs(haystack.slice(middle), needle);
//     } else {
//         bs_list_recurs(haystack.slice(0), needle);
//     }
// }
