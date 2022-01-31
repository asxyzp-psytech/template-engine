/**
 * CLASS : DesignTheme
 * FUNCTIONALITY : TO INSTANTIATE NEW DESIGN THEMES
 */
class DesignTheme {

    /**
     * FUNCTION : constructor
     * FUNCTIONALITY : CONSTRUCTOR TO CREATE NEW DESIGN THEMES
     * @param {String} id UNIQUE ID OF THE DESIGN THEME
     * @param {String} color COLOR PROPERTY => EXPECTED VALUE: STRING("#RRGGBB"), STRING("rgba(R,G,B,A)")
     * @param {String} background BACKGROUND SHORT-FORM PROPERTY => EXPECTED VALUE: STRING("#RRGGBB", "rgba(R,G,B,A)")
     * @param {String} height HEIGHT PROPERTY => EXPECTED VALUE: STRING("Xpx"), STRING("Xem")
     * @param {String} width WIDTH PROPERTY => EXPECTED VALUE: STRING("Xpx"), STRING("Xem")
     * @param {String} margin MARGIN PROPERTY => EXPECTED VALUE: STRING("Xpx"), STRING("Xem")
     * @param {String} padding PADDING PROPERTY => EXPECTED VALUE: STRING("Xpx"), STRING("Xem")
     */
    constructor(id, color, background, height, width, margin, padding) {

        //VALIDATIONS
        try {
            if (!id)
                throw Error("DesignTheme CONSTRUCTOR: DESIGN THEME ID IS MISSING.");
            if (typeof color !== "string")
                throw Error("DesignTheme CONSTRUCTOR: COLOR SHOULD BE A STRING");
            if (typeof background !== "string")
                throw Error("DesignTheme CONSTRUCTOR: BACKGROUND SHOULD BE A STRING");
            if (typeof height !== "string")
                throw Error("DesignTheme CONSTRUCTOR: HEIGHT SHOULD BE A STRING");
            if (typeof width !== "string")
                throw Error("DesignTheme CONSTRUCTOR: WIDTH SHOULD BE A STRING");
            if (typeof margin !== "string")
                throw Error("DesignTheme CONSTRUCTOR: MARGIN SHOULD BE A STRING");
            if (typeof padding !== "string")
                throw Error("DesignTheme CONSTRUCTOR: PADDING SHOULD BE A STRING");

            this.id = id;
            this.color = color ? color : "#000000";
            this.background = background ? background : "#FFFFFF";
            this.height = height ? height : "fit-content";
            this.width = width ? width : "fit-content";
            this.margin = margin ? margin : "0px";
            this.padding = padding ? padding : "0px";

        } catch (error) {
            console.error(error);
        }
    }

}
module.exports = DesignTheme;