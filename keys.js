// STORES KEYS FOR TEMPLATES, TEMPLATE ELEMENTS & KEYS OF OTHER OBJECTS
const keys = {
    template: {
        id: "string",
        text: "object",
        design: "object",
        element: "object",
        topElementId: "string",
    },
    templateElement: {
        id: "string",
        text: "string",
        type: "string",
        design: "string",
        parent: "string",
        children: "array"
    },
};

module.exports = keys;