let le, b, I, me, P_, s;
let __tla = (async () => {
  const f = "__mf_init____mf__virtual/__mfe_internal__fullcalendar__mf_v__runtimeInit__mf_v__.js__";
  let m = globalThis[f];
  if (!m) {
    let _, o;
    const n = new Promise((t, i) => {
      _ = t, o = i;
    });
    m = globalThis[f] = {
      initPromise: n,
      initResolve: _,
      initReject: o
    }, typeof window > "u" && _({
      loadRemote: function() {
        return Promise.resolve(void 0);
      },
      loadShare: function() {
        return Promise.resolve(void 0);
      }
    });
  }
  const r = m.initPromise, a = r.then((_) => _.loadShare("@iobroker/adapter-react-v5", {
    customShareInfo: {
      shareConfig: {
        singleton: true,
        strictVersion: false,
        requiredVersion: "*"
      }
    }
  })), e = await a.then((_) => typeof _ == "function" ? _() : _);
  e.__esModule ? e.default : e.default;
  let l, c, d, u, S, C, p, g, T, D, h, O, R, P, v, x, E, M, w, F, y, A, B, V, L, j, N, W, G, U, H, k, q, z, J, K, X, Q, Y, Z, $, __, e_, m_, o_, f_, n_, t_, i_, r_, a_, l_, c_, s_, d_, I_, u_, S_, C_, p_, g_, T_, D_, h_, O_, R_, b_, v_, x_, E_, M_, w_, F_, y_, A_, B_, V_, L_, j_, N_, W_, G_, U_, H_, k_, q_, z_, J_, K_, X_, Q_, Y_, Z_, $_, _e, ee, oe, fe, ne, te, ie, re, ae, ce, se, de, Ie, ue, Se, Ce, pe, ge, Te, De, he, Oe, Re, be, Pe, ve, xe, Ee, Me;
  ({ Theme: l, GenericApp: c, I18n: s, printPrompt: d, ColorPicker: I, ComplexCron: u, copy: S, CustomModal: C, FileBrowser: p, FileBrowserClass: g, EXTENSIONS: T, FileViewer: D, FileViewerClass: h, getSystemIcon: O, getSelectIdIcon: R, Icon: b, IconPicker: P, IconSelector: v, Image: x, DeviceTypeSelector: E, DeviceTypeIcon: M, STATES_NAME_ICONS: w, extendDeviceTypeTranslation: F, Cleaner: y, DoorClosed: A, DoorOpened: B, FireOff: V, FireOn: L, FloodOff: j, FloodOn: N, Gate: W, HeatValve: G, Home: U, Humidity: H, IconHome: k, Jalousie: q, Material: z, MotionOff: J, MotionOn: K, PushButton: X, RepairExpert: Q, RGB: Y, Socket: Z, Thermometer: $, ThermometerSimple: __, Thermostat: e_, Valve: m_, WindowClosed: o_, WindowOpened: f_, WindowTilted: n_, Loader: t_, Logo: i_, MDUtils: r_, ObjectBrowserClass: a_, ObjectBrowser: l_, getSelectIdIconFromObjects: c_, ITEM_IMAGES: s_, InfoBox: d_, Router: I_, SaveCloseButtons: u_, Schedule: S_, SelectWithIcon: C_, TabContainer: p_, TabContent: g_, TabHeader: T_, TableResize: D_, TextWithIcon: h_, ToggleThemeMenu: O_, TreeTable: R_, UploadImage: b_, Utils: P_, withWidth: v_, cron2state: x_, SimpleCron: E_, convertCronToText: M_, LoaderVendor: w_, LoaderPT: F_, LoaderMV: y_, LoaderNW: A_, IconAdapter: B_, IconAlias: V_, IconButtonImage: L_, IconChannel: j_, IconClearFilter: N_, IconClosed: W_, IconCopy: G_, IconDevice: U_, IconDocument: H_, IconDocumentReadOnly: k_, IconExpert: q_, IconFx: z_, IconInstance: J_, IconLogout: K_, IconNoIcon: X_, IconOpen: Q_, IconState: Y_, IconVacuum: Z_, DialogComplexCron: $_, ComplexCronDialog: _e, DialogConfirm: ee, Confirm: me, DialogCron: oe, Cron: fe, DialogError: ne, Error: te, DialogMessage: ie, Message: re, DialogSelectID: ae, SelectID: le, DialogSelectFile: ce, SelectFile: se, DialogSimpleCron: de, SimpleCronDialog: Ie, DialogTextInput: ue, TextInput: Se, Connection: Ce, PROGRESS: pe, ERRORS: ge, PERMISSION_ERROR: Te, AdminConnection: De, dictionary: he, LegacyConnection: Oe, pattern2RegEx: Re, getAttrInObject: be, setAttrInObject: Pe, iobUriToString: ve, iobUriParse: xe, iobUriRead: Ee, moduleFederationShared: Me } = e);
})();
export {
  le as _,
  __tla,
  b as a,
  I as b,
  me as c,
  P_ as d,
  s as e
};
