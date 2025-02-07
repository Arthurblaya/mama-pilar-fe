export class Product {
    private constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly categories: string[],
        public readonly price: number,
        public readonly images: string[],
        public readonly description: string
    ) { }

    static create(data: any): Product {
        return new Product(
            data.id,
            data.name,
            data.category || [],
            data.price,
            data.images || [],
            data.description
        );
    }

    getFormattedPrice(): string {
        return `$${this.price.toFixed(2)}`;
    }
}
