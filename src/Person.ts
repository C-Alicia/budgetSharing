export interface PersonInterface {
    name: string;
}

export class Person implements PersonInterface {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    getName(): string {
        return this.name;
    }
}
