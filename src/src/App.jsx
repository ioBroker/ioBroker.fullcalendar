import React from 'react';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';

import GenericApp from '@iobroker/adapter-react-v5/GenericApp';
import { Loader } from '@iobroker/adapter-react-v5';

import CalendarManager from './Component/CalendarManager';

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

    onConnectionReady() {
        super.onConnectionReady();
        (async () => {
            const adapterConfig = await this.socket.getObject(`system.adapter.fullcalendar.${this.instance}`);
            this.setState({ adapterConfig: adapterConfig.native });
        }
        )();
    }

    render() {
        if (!this.state.loaded || !this.state.adapterConfig) {
            return <StyledEngineProvider injectFirst>
                <ThemeProvider theme={this.state.theme}>
                    <Loader theme={this.state.themeType} />
                </ThemeProvider>
            </StyledEngineProvider>;
        }

        return <StyledEngineProvider injectFirst>
            <ThemeProvider theme={this.state.theme}>
                <div style={{ overflow: 'auto', height: '100%' }} id="rootDiv">
                    <CalendarManager
                        systemConfig={this._systemConfig}
                        socket={this.socket}
                        instance={this.instance}
                        adapterConfig={this.state.adapterConfig}
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
