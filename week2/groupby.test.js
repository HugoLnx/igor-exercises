var g = require('./groupby.js');

test('Teste1', () => {
    expect(g([1,2,3,4,5,6,7,8,9], function(value) {
        return value % 3;
    })).toEqual({0 : [3,6,9], 1 : [1,4,7], 2 : [2,5,8]});
});

test('Teste2', () => {
    expect(g([{video: 1, type: 'live'}, {video: 2, type: 'collection'}, {video: 3, type: 'collection'}, {video: 4, type: 'live'}], function(video) {
        return video.type;
    })).toEqual({'live' : [{video: 1, type: 'live'},{video: 4, type: 'live'}], 'collection' : [{video: 2, type: 'collection'},{video: 3, type: 'collection'}]});
});
