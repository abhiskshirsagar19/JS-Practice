const response = {
    name: "Abc", age: 20,
    characteristics: {
        height: "5 feet",
        complexion: "dark",
        hair: "black",
    },

    teckStatck: {
        language: "JavaSript",
        framework: {
            name: "React",
            version: "18",
        },
    },
}

const obj1 = {
    newObj: {
        obj2: {
            obj5: {
                one: 1,
            },
        },
    },
    obj3: {
        obj4: { two: 2 },
    },
};

const flattenObj = (obj) => {
    // empty object 
    let result = {};

    for (const i in obj) {
        if (typeof obj[i] === "object" && !Array.isArray(obj[i])) {
            const temp = flattenObj(obj[i]);
            for (const j in temp) {
                result[i + "." + j] = temp[j];
            }
        }
        else {
            result[i] = obj[i];

        }
    }
    return result;

}
// const check = flattenObj(response);
const check = flattenObj(obj1);
console.log(check);