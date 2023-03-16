import { useEffect, useState } from 'react';
import { I18n } from '@iobroker/adapter-react-v5';
import CalendarContainer from './CalendarContainer';
import { Button } from '@mui/material';

const Simulations = props => {
    const [simulations, setSimulations] = useState([]);
    const [selectedSimulation, setSelectedSimulation] = useState(null);
    const refreshSimulations = async () => {
        const objects = await props.socket.getObjectViewCustom(
            'system',
            'state',
            `fullcalendar.${props.instance}.Simulations.`,
            `fullcalendar.${props.instance}.Simulations.\u9999`,
        );
        setSimulations(Object.values(objects));
    };
    useEffect(() => {
        refreshSimulations();
    }, []);
    return <div style={{ display: 'flex' }}>
        <div>
            {simulations.map(simulation =>
                <div>
                    <Button
                        key={simulation._id}
                        onClick={() => setSelectedSimulation(simulation._id)}
                    >
                        {simulation.common.name}
                    </Button>
                </div>)}
        </div>
        {selectedSimulation && <CalendarContainer
            systemConfig={props.systemConfig}
            socket={props.socket}
            instance={props.instance}
            isSimulation
            simulationId={selectedSimulation}
            t={I18n.t}
            language={I18n.getLanguage()}
        />}
    </div>;
};

export default Simulations;
