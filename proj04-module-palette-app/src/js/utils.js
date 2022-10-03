
const randomColor =() =>
    {
        const letter = '0123456789abcdef';
        let color = '#';
        for(let i = 0; i<6; i++) color += letter[Math.floor(Math.random()*16)];
        return color;

    };

export {randomColor};