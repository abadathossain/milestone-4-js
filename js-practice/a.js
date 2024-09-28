var array = [
    {
        "bad": "something",
        "good": "something"
    },

    {
        "bad": "something",
        "good": "something"
    }
];

for (var i = 0; i < array.length; i++) {
    delete array[i].bad;
}
console.log(array)