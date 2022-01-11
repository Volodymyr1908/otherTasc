function Calculator() {
    this.add = function(...rest) {
        let res = 0;
        rest.forEach(el => res += el)
        return res;
    }
    this.sub = function(...rest) {
        let res = rest.reduce((prev, curr) => {
            return prev - curr;
        });
        return res
    }
    this.mul = function(...rest) {
        let res = rest.reduce((prev, curr) => {
            return prev * curr;
        });
        return res
    }
    this.div = function(...rest) {
        let res = rest.reduce((prev, curr) => {
            return prev / curr;
        });
        return res
    }
}


const calc = new Calculator();

console.log(calc.add(5, 5, 5), calc.sub(10, 2, 3), calc.mul(5, 2, 5), calc.div(20, 4, 5))