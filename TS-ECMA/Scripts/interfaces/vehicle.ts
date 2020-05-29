export interface Vehicle{
    brand: string;
    model?: number;
    run: () => void;
    doSomething?(): string; 
}