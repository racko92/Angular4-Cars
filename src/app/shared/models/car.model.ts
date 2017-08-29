export class Car {
    constructor(
        public id?: number,
        public mark?: string,
        public model?: string,
        public year?: string,
        public maxSpeed?: number,
        public isAutomatic: boolean = false,
        public engine?: string,
        public numberOfDoors?: number,
    ){}
}