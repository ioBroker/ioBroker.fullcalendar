import React from 'react';

import { Box } from '@mui/material';
import WidgetDemoApp from '@iobroker/vis-2-widgets-react-dev/widgetDemoApp';
import { I18n } from '@iobroker/adapter-react-v5';

import translations from './translations';

import FullCalendar from './FullCalendar';
import './App.scss';

const styles = {
    app: theme => ({
        backgroundColor: theme?.palette?.background.default,
        color: theme?.palette?.text.primary,
        height: '100%',
        width: '100%',
        overflow: 'auto',
        display: 'flex',
    }),
};

class App extends WidgetDemoApp {
    constructor(props) {
        super(props);

        // init translations
        I18n.extendTranslations(translations);

        this.socket.registerConnectionHandler(this.onConnectionChanged);
    }

    onConnectionChanged = isConnected => {
        if (isConnected) {
            this.socket.getSystemConfig()
                .then(systemConfig => this.setState({ systemConfig }));
        }
    };

    renderWidget() {
        return <Box somponent="div" sx={styles.app}>
            <FullCalendar
                context={{
                    socket: this.socket,
                    systemConfig: this.state.systemConfig,
                }}
                style={{
                    width: 400,
                    height: 300,
                }}
                data={{
                    instance: '0',
                }}
            />
        </Box>;
    }
}

export default App;
