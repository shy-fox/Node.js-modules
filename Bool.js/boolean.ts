export class Bool {

    ///////////////////////////////////////////////////////
    /////////         The is functions            /////////
    ///////////////////////////////////////////////////////

    /**
     * A quick and easy way to check if all the booleans in a list are true.
     * @param list The list you want to iterate through
     * 
     * @returns 'true' if all of the values inside the list are true.
     */

    static and(list:boolean[]):boolean {
        var r = 0;
        list.forEach(b => { if (!b) r++; });

        return r == 0;
    }

    /**
     * A quick and easy way to check if one or more  booleans in a list are true.
     * @param list The list you want to iterate through
     * 
     * @returns 'true' if one or more of the values inside the list are true.
     */

    static or(list:boolean[]):boolean {
        var r = 0;
        list.forEach(b => { if (!b) r++; })

        return r != 0;
    }

    /**
     * A quick and easy way to check if only one of the booleans in a list is true.
     * @param list The list you want to iterate through
     * 
     * @returns 'true' if only one of the values inside the list is true.
     */

    static xor(list:boolean[]):boolean {
        var r = 0;
        list.forEach(b => { if (!b) r++; })

        return this.and([this.nor([r == 0, r == list.length]), r != list.length]);
    }

    ///////////////////////////////////////////////////////
    /////////        The not functions            /////////
    ///////////////////////////////////////////////////////

    /**
     * A quick and easy way to check if not all the booleans in a list are true.
     * @param list The list you want to iterate through
     * 
     * @returns 'true' if not all of the values inside the list are true.
     */

    static nand(list:boolean[]):boolean { return !this.and(list); }

    /**
     * A quick and easy way to check if none of the booleans in a list are true.
     * @param list The list you want to iterate through
     * 
     * @returns 'true' if none of the values inside the list are true.
     */

    static nor(list:boolean[]):boolean { return !this.or(list); }

    /**
     * A quick and easy way to check if none or all the booleans in a list are true.
     * @param list The list you want to iterate through
     * 
     * @returns 'true' if none or all of the values inside the list are true.
     */
    static xnor(list:boolean[]):boolean { return !this.xor(list); }
}
