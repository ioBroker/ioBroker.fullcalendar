import React from 'react';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';

import { Loader, GenericApp } from '@iobroker/adapter-react-v5';

import enLang from './i18n/en.json';
import deLang from './i18n/de.json';
import ruLang from './i18n/ru.json';
import ptLang from './i18n/pt.json';
import nlLang from './i18n/nl.json';
import frLang from './i18n/fr.json';
import itLang from './i18n/it.json';
import esLang from './i18n/es.json';
import plLang from './i18n/pl.json';
import ukLang from './i18n/uk.json';
import zhCnLang from './i18n/zh-cn.json';

import CalendarManager from './Component/CalendarManager';

class App extends GenericApp {
    constructor(props) {
        const extendedProps = { ...props };
        extendedProps.translations = {
            en: enLang,
            de: deLang,
            ru: ruLang,
            pt: ptLang,
            nl: nlLang,
            fr: frLang,
            it: itLang,
            es: esLang,
            pl: plLang,
            uk: ukLang,
            'zh-cn': zhCnLang,
        };

        extendedProps.sentryDSN = window.sentryDSN;

        if (window.location.port === '3000') {
            // extendedProps.socket = { port: '8081' };
            // window.socketUrl = 'http://192.168.178.45:8081';
        }
        if (window.socketUrl && window.socketUrl.startsWith(':')) {
            window.socketUrl = `${window.location.protocol}//${window.location.hostname}${window.socketUrl}`;
        }

        super(props, extendedProps);
    }

    render() {
        if (!this.state.loaded) {
            return (
                <StyledEngineProvider injectFirst>
                    <ThemeProvider theme={this.state.theme}>
                        <Loader themeType={this.state.themeType} />
                    </ThemeProvider>
                </StyledEngineProvider>
            );
        }

        return (
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={this.state.theme}>
                    <div
                        style={{ overflow: 'auto', height: '100%' }}
                        id="rootDiv"
                    >
                        <CalendarManager
                            systemConfig={this._systemConfig}
                            socket={this.socket}
                            theme={this.state.theme}
                            instance={this.instance}
                            alive={this.state.alive}
                            themeType={this.state.themeType}
                        />
                    </div>
                </ThemeProvider>
            </StyledEngineProvider>
        );
    }
}

export default App;
