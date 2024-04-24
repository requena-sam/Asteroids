export interface IAnimatable {
    clear(): void;
    draw(): void;
    update(): void;
    shouldBeRemoved: boolean;
}