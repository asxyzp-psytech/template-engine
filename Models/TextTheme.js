class TextTheme {

    /**
     * FUNCTION : constructor
     * FUNCTIONALITY : TO INSTANTIATE NEW TEXT THEMES
     * @param {String} id UNIQUE ID OF TEXT THEME
     * @param {String} fontSize FONT-SIZE PROPERTY => EXPECTED VALUE: STRING("Xpx"), STRING("Xem")
     * @param {String} fontStyle FONT-STYLE PROPERTY => "normal"/"italic"/"oblique"
     * @param {String} fontFamily FONT-FAMILY PROPETY => "font-name1, ..., font-nameN"
     * @param {String} fontWeight FONT-WEIGHT PROPERTY => "100", ... ,"900", "light", "bold", "bolder"
     * @param {String} textAlign TEXT-ALIGN PROPERTY => "left", "right", "center", "justify"
     * @param {String} textDecoration TEXT-DECORATION PROPERTY => "underline", "overline", "none", etc
     */
    constructor(id, fontSize, fontStyle, fontFamily, fontWeight, textAlign, textDecoration) {

        //VALIDATIONS
        try {

            if (!id)
                throw Error("TextTheme CONSTRUCTOR: TEXT THEME ID IS MISSING.");
            if (typeof fontSize !== "string")
                throw Error("TextTheme CONSTRUCTOR: fontSize SHOULD BE A STRING");
            if (typeof fontStyle !== "string")
                throw Error("TextTheme CONSTRUCTOR: fontStyle SHOULD BE A STRING");
            if (typeof fontWeight !== "string")
                throw Error("TextTheme CONSTRUCTOR: fontWeight SHOULD BE A STRING");

            this.id = id;
            this.fontFamily = fontFamily ? fontFamily : "sans-seif, serif, monospace";
            this.fontWeight = fontWeight ? fontWeight : 400;
            this.fontStyle = fontStyle ? fontStyle : "normal";
            this.textAlign = (textAlign === "left" || textAlign === "right" || textAlign === "center" || textAlign === "justify" || textAlign === "inherit") ? textAlign : "center";
            this.textDecoration = (textDecoration === "underline" || textDecoration == "overline" || textDecoration == "line-through" || textDecoration == "none" || textDecoration == "inherit") ? textDecoration : "none";
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = TextTheme;