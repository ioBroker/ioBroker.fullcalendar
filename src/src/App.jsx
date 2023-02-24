import React from 'react';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { withStyles } from '@mui/styles';

import GenericApp from '@iobroker/adapter-react-v5/GenericApp';
import {
    Loader,
} from '@iobroker/adapter-react-v5';
import Calendar from './Component/Calendar';

const styles = () => ({

});
class App extends GenericApp {
    constructor(props) {
        const extendedProps = { ...props };
        extendedProps.translations = {
            en: require('./i18n/en'),
            de: require('./i18n/de'),
            ru: require('./i18n/ru'),
            pt: require('./i18n/pt'),
            nl: require('./i18n/nl'),
            fr: require('./i18n/fr'),
            it: require('./i18n/it'),
            es: require('./i18n/es'),
            pl: require('./i18n/pl'),
            uk: require('./i18n/uk'),
            'zh-cn': require('./i18n/zh-cn'),
        };

        extendedProps.sentryDSN = window.sentryDSN;

        if (window.location.port === '3000') {
            extendedProps.socket = { port: '8081' };
        }
        if (window.socketUrl && window.socketUrl.startsWith(':')) {
            window.socketUrl = `${window.location.protocol}//${window.location.hostname}${window.socketUrl}`;
        }

        super(props, extendedProps);
    }

    updateEvents = async () => {
        const objects = await this.socket.getObjectViewCustom(
            'schedule',
            'schedule',
            `fullcalendar.${this.instance}.`,
            `fullcalendar.${this.instance}.\u9999`,
        );
        const serverTimeZone = (await this.socket.getState('fullcalendar.0.info.timeZone')).val;
        this.setState({ events: Object.values(objects), serverTimeZone });
    };

    changeEvents = events => {
        this.setState({ events });
    };

    onConnectionReady() {
        this.updateEvents();
    }

    render() {
        if (!this.state.loaded) {
            return <StyledEngineProvider injectFirst>
                <ThemeProvider theme={this.state.theme}>
                    <Loader theme={this.state.themeType} />
                </ThemeProvider>
            </StyledEngineProvider>;
        }
        return <StyledEngineProvider injectFirst>
            <ThemeProvider theme={this.state.theme}>
                <div style={{ overflow: 'auto', height: '100%' }}>
                    <Calendar
                        events={this.state.events || []}
                        socket={this.socket}
                        instance={this.instance}
                        changeEvents={this.changeEvents}
                        updateEvents={this.updateEvents}
                        serverTimeZone={this.state.serverTimeZone}
                    />
                    {/* <pre>
                        {JSON.stringify(this.state.events, null, 2)}
                    </pre> */}
                </div>
            </ThemeProvider>
        </StyledEngineProvider>;
    }
}

export default withStyles(styles)(App);
