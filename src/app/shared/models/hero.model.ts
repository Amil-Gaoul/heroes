export class Hero {
    constructor(
        public id: number,
        public name: string,
        public alterEgo: string,
        public synopsis: string,
        public likes: number,
        public tags?: string[]
    ) { }
}
