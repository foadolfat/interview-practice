var movies = [
    {
        name: "Star Wars",
        genre: "Sci-Fi",
        year: 1976,
        price: 2.99
    },
    {
        name: "Fan Boys",
        genre: "Comedy",
        year: 2004,
        price: 1.99
    },
    {
        name: "Star Trek",
        genre: "Sci-Fi",
        year: 2009,
        price: 0.99,
    },
    {
        name: "Zoo",
        genre: "Sci-Fi",
        year: 2022,
        price: 4.99
    },
    {
        name: "Atlantis",
        genre: "Sci-Fi",
        year: 2022,
        price: 5.99
    },
    {
        name: "Toy Story",
        genre: "Animation",
        year: 1995,
        price: 1.99
    }
];

function pluck(key) {
    // closure
    return function(source) {
        return source[key];
    }
};

function sortBy(key) {
    // closure...
    var getProp = pluck(key);

    return function(a, b) {
        if(getProp(a) < getProp(b)) {
            return -1;
        }
    
        if(getProp(a) > getProp(b)) {
            return 1;
        }
    
        return 0;
    }
}

function groupBy(key) {
    /**
     * @param {Array<any>} array
     */
    return function(array) {
        return array.reduce(function (grouped, element) {
            grouped[ element[key] ] = grouped[ element[key] ] ? grouped[ element[key ] ].concat([ element ]) : [ element ];

            return grouped;
        }, { });
    }
}

function filterBy(value, key) {
    return function(source) {
        return source[key] === value;
    }
}

var sorted = [...movies].sort(function(a, b) {
    return sortBy("genre")(a, b) || -sortBy("year")(a, b) || sortBy("name")(a, b);
});

var filtered = sorted.filter(filterBy("Sci-Fi", "genre"));

// grouping
var grouped = groupBy("year")(movies); // O(n) + M(n * 4bytes + props * 4 bytes)

var moviesIn2022 = pluck("2022")(grouped);

console.log(moviesIn2022.sort(sortBy("name")));