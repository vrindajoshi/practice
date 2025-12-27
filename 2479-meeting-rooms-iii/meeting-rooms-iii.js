var mostBooked = function(n, meetings) {
    meetings.sort((a, b) => a[0] - b[0]);

    class MinHeap { // constructors for min heap
        constructor(compare) {
            this.data = [];
            this.compare = compare;
        }
        push(x) {
            this.data.push(x);
            this._up(this.data.length - 1);
        }
        pop() {
            if (this.data.length === 1) return this.data.pop();
            const top = this.data[0];
            this.data[0] = this.data.pop();
            this._down(0);
            return top;
        }
        peek() {
            return this.data[0];
        }
        size() {
            return this.data.length;
        }
        _up(i) {
            while (i > 0) {
                let p = (i - 1) >> 1;
                if (this.compare(this.data[p], this.data[i]) <= 0) break;
                [this.data[p], this.data[i]] = [this.data[i], this.data[p]];
                i = p;
            }
        }
        _down(i) {
            let n = this.data.length;
            while (true) {
                let l = i * 2 + 1, r = i * 2 + 2, s = i;
                if (l < n && this.compare(this.data[l], this.data[s]) < 0) s = l;
                if (r < n && this.compare(this.data[r], this.data[s]) < 0) s = r;
                if (s === i) break;
                [this.data[i], this.data[s]] = [this.data[s], this.data[i]];
                i = s;
            }
        }
    }

    const available = new MinHeap((a, b) => a - b);
    const busy = new MinHeap((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0]; // earlier end time first
        return a[1] - b[1];                   // smaller room index first
    });

    const timesUsed = Array(n).fill(0);

    for (let i = 0; i < n; i++) available.push(i);

    for (let [start, end] of meetings) {
        while (busy.size() && busy.peek()[0] <= start) {
            available.push(busy.pop()[1]);
        }

        if (available.size()) {
            let room = available.pop();
            busy.push([end, room]);
            timesUsed[room]++;
        } else {
            let [endTime, room] = busy.pop();
            let duration = end - start;
            busy.push([endTime + duration, room]);
            timesUsed[room]++;
        }
    }

    let max = 0, ans = 0;
    for (let i = 0; i < n; i++) {
        if (timesUsed[i] > max) {
            max = timesUsed[i];
            ans = i;
        }
    }

    return ans;
};
