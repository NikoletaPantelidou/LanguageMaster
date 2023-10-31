export class CountryCardModel {
    name            : string;
    flag            : string;
    code            : string; 

    constructor(name: string, flag: string) {
        this.name = name;
        this.flag = flag;
    }
}