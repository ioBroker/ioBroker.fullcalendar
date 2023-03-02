import React from 'react';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';

import GenericApp from '@iobroker/adapter-react-v5/GenericApp';
import { I18n, Loader } from '@iobroker/adapter-react-v5';

import Calendar from './Component/Calendar';

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

    onEventsChanged = (id, obj) => {
        const events = JSON.parse(JSON.stringify(this.state.events));
        const eventPos = events.findIndex(e => e._id === id);
        if (eventPos !== -1) {
            if (obj) {
                events[eventPos] = obj;
            } else {
                events.splice(eventPos, 1);
            }
        } else {
            events.push(obj);
        }
        this.setState({ events });
    };

    componentWillUnmount() {
        if (this.subscribed) {
            this.socket.unsubscribeObject(`fullcalendar.${this.instance}.*`, this.onEventsChanged);
        }
        super.componentWillUnmount();
    }

    updateEvents = async () => {
        const objects = await this.socket.getObjectViewCustom(
            'schedule',
            'schedule',
            `fullcalendar.${this.instance}.`,
            `fullcalendar.${this.instance}.\u9999`,
        );
        let serverTimeZone = 0;
        try {
            const state = await this.socket.getState('fullcalendar.0.info.timeZone');
            serverTimeZone = state?.val || 0;
        } catch (e) {
            // ignore
        }
        this.setState({ events: Object.values(objects), serverTimeZone });
    };

    changeEvents = events => {
        this.setState({ events });
    };

    onConnectionReady() {
        this.socket.subscribeObject(`fullcalendar.${this.instance}.*`, this.onEventsChanged);
        this.subscribed = true;

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
                <div style={{ overflow: 'auto', height: '100%' }} id="rootDiv">
                    <Calendar
                        events={this.state.events || []}
                        socket={this.socket}
                        instance={this.instance}
                        changeEvents={this.changeEvents}
                        updateEvents={this.updateEvents}
                        serverTimeZone={this.state.serverTimeZone || 0}
                        t={I18n.t}
                        language={I18n.getLanguage()}
                    />
                    {/* <pre>
                        {JSON.stringify(this.state.events, null, 2)}
                    </pre> */}
                </div>
            </ThemeProvider>
        </StyledEngineProvider>;
    }
}

export default App;
