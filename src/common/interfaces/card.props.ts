export default interface CardProps {
    data: string;
    isFlipped: boolean;
    index: number;
    onClick: (index: number) => void;
}