const randomUrl = 'https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new';
const response = '116';

const fetchNumber = async () => {
    return await fetch(randomUrl);
}

exports.getRandomNumber = function(req, res) {
    let x = fetchNumber();
    let y = fetchNumber();
    res.send(x + y == response);
}