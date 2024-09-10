import TemperatureConverter from "./components/hw3-components/TemperatureConverter/TemperatureConverter";
import './HW3.css';

function HW3() {
    return ( 
        <section className="converter" >
            <h1 className="title">Convert temperature:</h1>
            <TemperatureConverter />
        </section>
     );
}

// eslint-disable-next-line react-refresh/only-export-components
export default HW3;

