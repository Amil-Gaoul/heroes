export class Hero {
    constructor(
        public id: number,
        public avatar: string,
        public name: string,
        public alterEgo: string,
        public synopsis: string,
        public likes: number,
        public tagIds?: number[]
    ) { }
}
