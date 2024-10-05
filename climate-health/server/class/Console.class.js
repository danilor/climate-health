/************************************************************************
 * **********************************************************************
 *
 * The console class was made to control a lot of the console message functionality. Works
 * better in the dev environment and for debug purposes due to its nature.
 *
 * We will use the moment library to calculate the time
 * it took the application to finish
 * @type {moment}
 *
 * **********************************************************************
 ***********************************************************************/

const moment = require('moment'); // require




class ConsoleClass {


    /************************************************************************
     * Constructor.
     * It will start the time counting using the momentjs library
     * @link https://momentjs.com/
     ***********************************************************************/
    constructor() {
        /**
         * it indicates if we want to save all console logs into the memory. Not recommended for regular
         * use.
         * @type {boolean}
         */
        this.saveMemory = false;

        /**
         * Memory saving all information
         * @type {string}
         */
        this.memory = "";

        this.start = moment();
        this.saveLog = true;
        /**
         * We are building the file path for the logs
         * @type {string}
         */
    }

    /**
     * If we call this, this should start saving everything to memory.
     */
    saveToMemory(){
        this.saveMemory = true;
    }

    /************************************************************************
     * Shorten for the con method.
     * @param t
     ***********************************************************************/
    c(t) {
        try {
            if (typeof t === 'string') {
                console.log(' ' + t);
            } else {
                console.log(t);
            }

        } catch (e) {

        }
        return this;
    }

    /************************************************************************
     * Display line command console.
     * @param t
     ***********************************************************************/
    l(t) {

        if(typeof t === 'string'){
            try {
                console.log(' -' + t);
            } catch (e) {

            }
        }else{
            console.log(t);
        }
        return this;
    }

    /************************************************************************
     * Error method.
     * @param t
     ***********************************************************************/
    e(t) {
        if(typeof e === 'string'){
            try {
                console.error(' [ERROR] ' + t);
            } catch (e) {

            }
        }else{
            console.error(t);
        }
        return this;

    }

    /************************************************************************
     * Prints a general message
     * @param t
     * @deprecated
     ***********************************************************************/
    con(t) {
        return this.c(t);

    }

    /************************************************************************
     * Prints an space
     * @deprecated
     ***********************************************************************/
    space() {
        return this.s();
    }

    /************************************************************************
     * Shorter for space
     ***********************************************************************/
    s() {
        return this.c(' ');
    }

    /************************************************************************
     * Prints a level process. The higher the level, the far from the main line the text
     * will show up
     * @param t
     * @param l
     ***********************************************************************/
    level(t, l = 1) {
        const message = ('-').repeat(l) + ' ' + t;
        return this.con(message);
    }

    /************************************************************************
     * It prints the title
     * @param t
     ***********************************************************************/
    title(t, sideSpace = 6, sideCharacter = '▓', lineCharacter = '▓') {
        const titleSize = t.length;
        this.con(sideCharacter + lineCharacter.repeat(sideSpace + sideSpace + titleSize) + sideCharacter);
        this.con(sideCharacter + (' ').repeat(sideSpace + sideSpace + titleSize) + sideCharacter);
        // this.con(sideCharacter + (' ').repeat(sideSpace + sideSpace + titleSize) + sideCharacter);
        this.con(sideCharacter + (' ').repeat(sideSpace) + t + (' ').repeat(sideSpace) + sideCharacter);
        // this.con(sideCharacter + (' ').repeat(sideSpace + sideSpace + titleSize) + sideCharacter);
        this.con(sideCharacter + (' ').repeat(sideSpace + sideSpace + titleSize) + sideCharacter);
        this.con(sideCharacter + lineCharacter.repeat(sideSpace + sideSpace + titleSize) + sideCharacter);
        return this;
    }

    /************************************************************************
     * This method will display
     * the time interval between the start of the process and this
     * call.
     ***********************************************************************/
    displayTime() {
        this.end = moment();
        this.c(this.end.to(this.start, true)); // "5 days" );
      return this;
    }


    /************************************************************************
     * This wll print an endpoint style header. It will include the
     * verb using the endpoint and the name (path) of the endpoint itself
     * @param type {string}
     * @param name {string}
     ***********************************************************************/
    printEndpointHeader(type, name) {
        const st = '[' + type.toUpperCase() + '] ' + name;
        this.s();
        this.c('=REQUEST======================================');
        this.c(st);
        this.c('==============================================');
        this.s();
        return this;

    }
}

module.exports = new ConsoleClass();
