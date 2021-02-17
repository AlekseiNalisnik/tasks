const arr = [
    { name: '12332', value: '12312', newValue: 123 },
    { name: '12332', value: '12312', newValue: 123 },
    { name: '12332', value: '12312', newValue: 123 },
];

console.time('test');

const fuck = arr.filter((v, i) => 
    (arr.length - (i+1)) === arr.slice(i+1).filter(nV =>
        !(Object.entries(v).length === Object.entries(nV).length && Object.entries(v).every(([key, value]) => nV[key] === value))).length
);

console.timeEnd('test');

console.log('FUCK - ', fuck);
