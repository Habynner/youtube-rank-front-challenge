export default interface Video {
    id: string;
    userId: string;
    alias: string;
    name: string;
    url: string;
    description: string;
    category: string;
    votes: number;
}