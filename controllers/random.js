const randomUrl = 'https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new';
const response = '116';

const fetchNumber = async () => {
    const response = await fetch(randomUrl);
    const result = await response.text();
    const number = parseInt(result.trim());
    return number;
}

exports.getRandomNumber = async function(req, res) {
    const x = await fetchNumber();
    const y = await fetchNumber();
    const s = x + y;
    const r = +response;
    const b = s == r;
    console.log(x)
    console.log(y)
    console.log(s)
    console.log(r)
    console.log(b)
    res.send(b);
}