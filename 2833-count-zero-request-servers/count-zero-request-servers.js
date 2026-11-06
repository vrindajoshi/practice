var countServers = function(n, logs, x, queries) {

    logs.sort((a, b) => a[1] - b[1]);

    let sortedQueries = queries.map((q, i) => [q, i]);
    sortedQueries.sort((a, b) => a[0] - b[0]);

    let arr = new Array(queries.length);

    let startIndex = 0;
    let endIndex = 0;

    let freq = new Map();

    for (let [query, originalIndex] of sortedQueries) {

        let startTime = query - x;
        let endTime = query;

        while (endIndex < logs.length &&
               logs[endIndex][1] <= endTime) {

            let server = logs[endIndex][0];

            freq.set(server, (freq.get(server) || 0) + 1);

            endIndex++;
        }

        while (startIndex < endIndex &&
               logs[startIndex][1] < startTime) {

            let server = logs[startIndex][0];

            freq.set(server, freq.get(server) - 1);

            if (freq.get(server) === 0) {
                freq.delete(server);
            }

            startIndex++;
        }

        arr[originalIndex] = n - freq.size;
    }

    return arr;
};