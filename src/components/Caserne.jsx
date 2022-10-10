import VHciterne1 from "./VHciterne1"
import VHciterne2 from "./VHciterne2"
import VHlance1 from "./VHlance1"
import VHlance2 from "./VHlance2"
import VHurgence1 from "./VHurgence1"



export default function Caserne(props) {

    return <div>
                <h2>CASERNE : Vehicules Disponibles :</h2>
                <p><VHciterne1/></p>
                <p><VHciterne2/></p>
                <p><VHlance1/></p>
                <p><VHlance2/></p>
                <p><VHurgence1/></p>
            </div>
}