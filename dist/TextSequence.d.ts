/// <reference types="react" />
import Text from "./Entity/Text";
import './font.css';
interface TextSequenceProps {
    height: number;
    text: Text;
}
export default function TextSequence({ height, text }: TextSequenceProps): JSX.Element;
export {};
