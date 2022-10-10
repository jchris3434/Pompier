import CmpTwo from "./CmpTwo";


export default function CmpOne(props) {
    return <div>
                <p> Le texte du premier composant by JC</p>
                <CmpTwo tutu={props.tutu}/>
            </div>
}