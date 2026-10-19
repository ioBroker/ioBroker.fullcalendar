const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./emotion-cache.browser.esm--RCZvsJA.js","./emotion-use-insertion-effect-with-fallbacks.browser.esm-Dgo1zuEd.js","./useMediaQuery-CLh7sOs5.js","./useMediaQuery-Cm2kB8Te.js","./createGrid-B_cMcaaY.js","./react.production-BHZyVOnE.js","./react-dom-Cp3cTVwc.js"])))=>i.map(i=>d[i]);
import { n as e } from "./rolldown-runtime-COiEfhsA.js";
import { t } from "./vite-preload-helper-CRzLMJPS.js";
let au, wm, Nt, P, S, mm, mt, ym, Tt, _m, xt, Nf, _, af, le, tf, w, El, v, df, xe, sf, ue, Yd, y, Pp, m, Op, h, bm, Ot, zf, g, tu, Xd, b, dm, pt, gm, bt, nf, T, ef, C, rf, Ce, Dl, _e, kf, me, Ol, re, Lp, qe, Um, hu, cm, dt, Im, vl, Yp, sl, ou, Xp, E, em, Ge, $p, Fn, qm, mu, Bp, Ft, xm, Mt, Em, ml, Qp, D, nh, kl, Wm, gu, Zp, He, lf, ye, rh, pu, Gm, Su, gh, uu, Ip, hl, nm, nt, hm, _t, Rp, ft, sm, ut, Zd, x;
let __tla = (async () => {
  var _a2, _b, _c2, _d2, _e2, _f2, _g, _h2, _i2, _j, _k, _l2, _m2, _n2, _o2, _p2, _q, _r2, _s2, _t2;
  let n, r, i, a, ee, te, o, ne, s, c, ie;
  n = (e2, t2) => {
    let n2 = e2[t2.canonical];
    if (n2 !== void 0) return n2;
    let r2 = t2.aliases || [];
    for (let n3 of r2) {
      if (!Object.prototype.hasOwnProperty.call(e2, n3)) continue;
      let r3 = e2[n3];
      if (r3 !== void 0) return e2[t2.canonical] = r3, r3;
    }
  };
  r = /* @__PURE__ */ Symbol.for(`module-federation.shared-cache-listeners`);
  i = (e2) => {
    let t2 = e2[r];
    return t2 === void 0 && (t2 = /* @__PURE__ */ Object.create(null), Object.defineProperty(e2, r, {
      value: t2,
      enumerable: false,
      configurable: false,
      writable: false
    })), t2;
  };
  a = (e2, t2, n2) => {
    var _a3;
    let r2 = i(e2);
    (r2[_a3 = t2.canonical] || (r2[_a3] = /* @__PURE__ */ new Set())).add(n2);
  };
  ee = /* @__PURE__ */ Symbol.for(`module-federation.shared-cache-owners`);
  te = (e2) => {
    let t2 = e2[ee];
    return t2 === void 0 && (t2 = /* @__PURE__ */ Object.create(null), Object.defineProperty(e2, ee, {
      value: t2,
      enumerable: false,
      configurable: false,
      writable: false
    })), t2;
  };
  o = (e2) => {
    let t2 = [
      e2,
      e2 == null ? void 0 : e2.default
    ];
    for (let e3 of t2) if (e3 && typeof e3 == `object`) {
      for (let t3 of [
        `__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE`,
        `__TEST_INTERNALS`,
        `__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED`
      ]) {
        let n2 = e3[t3];
        if (n2 && typeof n2 == `object`) return {
          internals: n2
        };
      }
      if (typeof e3.useState == `function`) return {
        hook: e3.useState
      };
    }
  };
  ne = (e2, t2) => {
    if (e2 === t2) return true;
    let n2 = o(e2), r2 = o(t2);
    if (!n2 || !r2) return false;
    let i2 = n2.internals, a2 = r2.internals;
    return i2 !== void 0 || a2 !== void 0 ? i2 !== void 0 && i2 === a2 : typeof n2.hook == `function` && n2.hook === r2.hook;
  };
  s = (e2, t2, i2, a2) => {
    var _a3;
    let o2 = n(e2, t2);
    if (o2 !== void 0 && ne(o2, i2)) return i2;
    e2[t2.canonical] = i2;
    let s2 = t2.aliases || [];
    for (let t3 of s2) Object.defineProperty(e2, t3, {
      value: i2,
      enumerable: true,
      configurable: true,
      writable: true
    });
    let re2 = e2[ee];
    a2 === void 0 ? re2 && delete re2[t2.canonical] : te(e2)[t2.canonical] = a2;
    let c2 = (_a3 = e2[r]) == null ? void 0 : _a3[t2.canonical];
    if (c2) for (let e3 of c2) e3(i2);
    return i2;
  };
  re = e({
    CacheProvider: () => le,
    ClassNames: () => ge,
    Global: () => _e,
    ThemeContext: () => ue,
    ThemeProvider: () => de,
    __moduleExports: () => d,
    __unsafe_useEmotionCache: () => fe,
    createElement: () => ve,
    css: () => ye,
    default: () => ce,
    jsx: () => be,
    keyframes: () => xe,
    useTheme: () => pe,
    withEmotionCache: () => me,
    withTheme: () => he
  });
  c = `__mf_init__virtual:mf:__mfe_internal__fullcalendar__mf_owner__78845261933133__mf_v__runtimeInit__mf_v__.js__`;
  ie = globalThis[c];
  if (!ie) {
    let e2, t2, n2 = new Promise((n3, r2) => {
      e2 = n3, t2 = r2;
    });
    ie = globalThis[c] = {
      initPromise: n2,
      initResolve: e2,
      initReject: t2
    };
  }
  var ae = ie.initPromise, l = `__mf_module_cache__`;
  globalThis[l] || (globalThis[l] = {
    share: {},
    remote: {}
  }), (_a2 = globalThis[l]).share || (_a2.share = {}), (_b = globalThis[l]).remote || (_b.remote = {});
  var u = globalThis[l], oe = (e2) => {
    let t2 = u.pendingShareLoads || (u.pendingShareLoads = []);
    t2.push(e2);
    let n2 = () => {
      let n3 = t2.indexOf(e2);
      n3 !== -1 && t2.splice(n3, 1);
    };
    return e2.then(n2, n2), e2;
  };
  for (let e2 of Object.keys(u.share)) if (e2.startsWith(`default:`)) {
    let t2 = e2.slice(8);
    u.share[t2] === void 0 && (u.share[t2] = u.share[e2]);
  } else if (!e2.includes(`:`)) {
    let t2 = `default:` + e2;
    u.share[t2] === void 0 && (u.share[t2] = u.share[e2]);
  }
  let se, ce, de, fe, pe, he, ge, ve, be, Se;
  se = (e2) => {
    let t2 = (() => {
      let t3 = e2;
      for (let e3 = 0; e3 < 5; e3++) {
        let e4 = t3 == null ? void 0 : t3.default;
        if (!e4 || typeof e4 != `object`) break;
        let n2 = Object.keys(t3).filter((e5) => e5 !== "default").map((e5) => t3[e5]);
        if (n2.length > 0 && n2.some((e5) => e5 !== void 0)) break;
        t3 = e4;
      }
      return t3;
    })();
    return t2 && Object.getPrototypeOf(t2) === null ? Object.assign({}, t2) : t2;
  };
  Se = (e2) => {
    d = e2, le = e2.CacheProvider, ue = e2.ThemeContext, de = e2.ThemeProvider, fe = e2.__unsafe_useEmotionCache, pe = e2.useTheme, me = e2.withEmotionCache, he = e2.withTheme, ge = e2.ClassNames, _e = e2.Global, ve = e2.createElement, ye = e2.css, be = e2.jsx, xe = e2.keyframes, ce = e2.default ?? e2;
  };
  a(u.share, {
    canonical: `default:@emotion/react`,
    aliases: [
      `@emotion/react`
    ]
  }, Se);
  var d = n(u.share, {
    canonical: `default:@emotion/react`,
    aliases: [
      `@emotion/react`
    ]
  });
  d === void 0 ? oe(ae.then(() => {
    if (d = n(u.share, {
      canonical: `default:@emotion/react`,
      aliases: [
        `@emotion/react`
      ]
    }), d !== void 0) Se(d);
    else return t(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__78845261933133__prebuild___mf_0_emotion_mf_1_react__prebuild__-BbpInq7W.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }).then((e2) => {
      d = se(e2), s(u.share, {
        canonical: `default:@emotion/react`,
        aliases: [
          `@emotion/react`
        ]
      }, d, `fullcalendar`);
    }), __vite__mapDeps([0,1]), import.meta.url);
  })) : Se(d);
  let we, Te;
  Ce = e({
    Accordion: () => je,
    AccordionActions: () => Me,
    AccordionDetails: () => Ne,
    AccordionSummary: () => Pe,
    Alert: () => Fe,
    AlertTitle: () => Ie,
    AppBar: () => Le,
    Autocomplete: () => Re,
    Avatar: () => ze,
    AvatarGroup: () => Be,
    Backdrop: () => Ve,
    Badge: () => He,
    BottomNavigation: () => Ue,
    BottomNavigationAction: () => We,
    Box: () => Ge,
    Breadcrumbs: () => Ke,
    Button: () => qe,
    ButtonBase: () => Je,
    ButtonGroup: () => Ye,
    ButtonGroupButtonContext: () => Xi,
    ButtonGroupContext: () => Yi,
    Card: () => Xe,
    CardActionArea: () => Ze,
    CardActions: () => Qe,
    CardContent: () => $e,
    CardHeader: () => et,
    CardMedia: () => tt,
    Checkbox: () => nt,
    Chip: () => rt,
    CircularProgress: () => it,
    ClickAwayListener: () => at,
    Collapse: () => ot,
    Container: () => st,
    CssBaseline: () => ct,
    CssVarsProvider: () => Br,
    Dialog: () => ut,
    DialogActions: () => dt,
    DialogContent: () => ft,
    DialogContentText: () => pt,
    DialogTitle: () => mt,
    Divider: () => ht,
    Drawer: () => gt,
    Experimental_CssVarsProvider: () => Ur,
    Fab: () => _t,
    Fade: () => vt,
    FilledInput: () => yt,
    FormControl: () => bt,
    FormControlLabel: () => xt,
    FormGroup: () => St,
    FormHelperText: () => Ct,
    FormLabel: () => wt,
    FormLabelRoot: () => Ja,
    GlobalStyles: () => Hn,
    Grid: () => Tt,
    Grow: () => Et,
    Icon: () => Dt,
    IconButton: () => Ot,
    ImageList: () => kt,
    ImageListItem: () => At,
    ImageListItemBar: () => jt,
    InitColorSchemeScript: () => qn,
    Input: () => Mt,
    InputAdornment: () => Nt,
    InputBase: () => Pt,
    InputLabel: () => Ft,
    LinearProgress: () => m,
    Link: () => It,
    List: () => h,
    ListItem: () => g,
    ListItemAvatar: () => Lt,
    ListItemButton: () => _,
    ListItemIcon: () => v,
    ListItemSecondaryAction: () => Rt,
    ListItemText: () => y,
    ListSubheader: () => zt,
    Menu: () => b,
    MenuItem: () => x,
    MenuList: () => Bt,
    MobileStepper: () => Vt,
    Modal: () => Ht,
    ModalManager: () => Uo,
    NativeSelect: () => Ut,
    NoSsr: () => Wt,
    OutlinedInput: () => Gt,
    Pagination: () => Kt,
    PaginationItem: () => qt,
    Paper: () => S,
    Popover: () => C,
    PopoverPaper: () => os,
    PopoverRoot: () => as,
    Popper: () => Jt,
    Portal: () => Yt,
    Radio: () => Xt,
    RadioGroup: () => Zt,
    Rating: () => Qt,
    ScopedCssBaseline: () => $t,
    Select: () => w,
    SelectFocusSourceProvider: () => ws,
    Skeleton: () => en,
    Slide: () => tn,
    Slider: () => nn,
    SliderMark: () => Ns,
    SliderMarkLabel: () => Ps,
    SliderRail: () => As,
    SliderRoot: () => ks,
    SliderThumb: () => Ms,
    SliderTrack: () => js,
    SliderValueLabel: () => Fs,
    Snackbar: () => T,
    SnackbarContent: () => rn,
    SpeedDial: () => an,
    SpeedDialAction: () => on,
    SpeedDialIcon: () => sn,
    Stack: () => cn,
    Step: () => ln,
    StepButton: () => un,
    StepConnector: () => dn,
    StepContent: () => fn,
    StepContext: () => Xs,
    StepIcon: () => pn,
    StepLabel: () => mn,
    Stepper: () => hn,
    StepperContext: () => uc,
    StyledEngineProvider: () => Er,
    SvgIcon: () => gn,
    SwipeableDrawer: () => _n,
    Switch: () => E,
    THEME_ID: () => Yn,
    Tab: () => vn,
    TabScrollButton: () => An,
    Table: () => yn,
    TableBody: () => bn,
    TableCell: () => xn,
    TableContainer: () => Sn,
    TableFooter: () => Cn,
    TableHead: () => wn,
    TablePagination: () => Tn,
    TablePaginationActions: () => En,
    TableRow: () => Dn,
    TableSortLabel: () => On,
    Tabs: () => kn,
    TextField: () => D,
    TextareaAutosize: () => jn,
    ThemeProvider: () => Tr,
    ToggleButton: () => Mn,
    ToggleButtonGroup: () => Nn,
    Toolbar: () => Pn,
    Tooltip: () => Fn,
    Typography: () => In,
    Unstable_TrapFocus: () => Kn,
    Zoom: () => Bn,
    __moduleExports: () => O,
    accordionActionsClasses: () => fi,
    accordionClasses: () => ui,
    accordionDetailsClasses: () => mi,
    accordionSummaryClasses: () => gi,
    adaptV4Theme: () => Xn,
    alertClasses: () => vi,
    alertTitleClasses: () => bi,
    alpha: () => ar,
    appBarClasses: () => Si,
    areEqualValues: () => Ss,
    autocompleteClasses: () => Ti,
    avatarClasses: () => Di,
    avatarGroupClasses: () => ki,
    backdropClasses: () => ji,
    badgeClasses: () => Ni,
    bottomNavigationActionClasses: () => Li,
    bottomNavigationClasses: () => Fi,
    boxClasses: () => zi,
    breadcrumbsClasses: () => Bi,
    buttonBaseClasses: () => Wi,
    buttonClasses: () => Hi,
    buttonGroupClasses: () => Ji,
    capitalize: () => Gr,
    cardActionAreaClasses: () => ea,
    cardActionsClasses: () => na,
    cardClasses: () => Qi,
    cardContentClasses: () => ia,
    cardHeaderClasses: () => oa,
    cardMediaClasses: () => ca,
    checkboxClasses: () => ua,
    chipClasses: () => fa,
    circularProgressClasses: () => ma,
    collapseClasses: () => ga,
    colors: () => Ae,
    containerClasses: () => va,
    createChainedFunction: () => Kr,
    createColorScheme: () => xr,
    createFilterOptions: () => wi,
    createStyles: () => mr,
    createSvgIcon: () => qr,
    createTheme: () => dr,
    createTransitions: () => vr,
    css: () => cr,
    darkScrollbar: () => lt,
    darken: () => or,
    debounce: () => Jr,
    decomposeColor: () => er,
    default: () => ke,
    deprecatedPropType: () => Yr,
    dialogActionsClasses: () => Sa,
    dialogClasses: () => ba,
    dialogContentClasses: () => wa,
    dialogContentTextClasses: () => Ea,
    dialogTitleClasses: () => Oa,
    dividerClasses: () => Aa,
    drawerClasses: () => Ma,
    duration: () => yr,
    easing: () => br,
    emphasize: () => ir,
    enhanceHighContrast: () => fr,
    experimental_extendTheme: () => jr,
    experimental_sx: () => Jn,
    extendTheme: () => Ar,
    fabClasses: () => Pa,
    filledInputClasses: () => Ia,
    formControlClasses: () => za,
    formControlLabelClasses: () => Va,
    formGroupClasses: () => Ua,
    formHelperTextClasses: () => Ga,
    formLabelClasses: () => qa,
    generateUtilityClass: () => Wn,
    generateUtilityClasses: () => Gn,
    getAccordionActionsUtilityClass: () => pi,
    getAccordionDetailsUtilityClass: () => hi,
    getAccordionSummaryUtilityClass: () => _i,
    getAccordionUtilityClass: () => di,
    getActiveElement: () => Zr,
    getAlertTitleUtilityClass: () => xi,
    getAlertUtilityClass: () => yi,
    getAppBarUtilityClass: () => Ci,
    getAutocompleteUtilityClass: () => Ei,
    getAvatarGroupUtilityClass: () => Ai,
    getAvatarUtilityClass: () => Oi,
    getBackdropUtilityClass: () => Mi,
    getBadgeUtilityClass: () => Pi,
    getBottomNavigationActionUtilityClass: () => Ri,
    getBottomNavigationUtilityClass: () => Ii,
    getBreadcrumbsUtilityClass: () => Vi,
    getButtonBaseUtilityClass: () => Ki,
    getButtonGroupUtilityClass: () => Zi,
    getButtonUtilityClass: () => Ui,
    getCardActionAreaUtilityClass: () => ta,
    getCardActionsUtilityClass: () => ra,
    getCardContentUtilityClass: () => aa,
    getCardHeaderUtilityClass: () => sa,
    getCardMediaUtilityClass: () => la,
    getCardUtilityClass: () => $i,
    getCheckboxUtilityClass: () => da,
    getChipUtilityClass: () => pa,
    getCircularProgressUtilityClass: () => ha,
    getCollapseUtilityClass: () => _a,
    getContainerUtilityClass: () => ya,
    getContrastRatio: () => nr,
    getDialogActionsUtilityClass: () => Ca,
    getDialogContentTextUtilityClass: () => Da,
    getDialogContentUtilityClass: () => Ta,
    getDialogTitleUtilityClass: () => ka,
    getDialogUtilityClass: () => xa,
    getDividerUtilityClass: () => ja,
    getDrawerUtilityClass: () => Na,
    getFabUtilityClass: () => Fa,
    getFilledInputUtilityClass: () => La,
    getFormControlLabelUtilityClasses: () => Ha,
    getFormControlUtilityClasses: () => Ba,
    getFormGroupUtilityClass: () => Wa,
    getFormHelperTextUtilityClasses: () => Ka,
    getFormLabelUtilityClasses: () => Ya,
    getGridUtilityClass: () => Za,
    getIconButtonUtilityClass: () => to,
    getIconUtilityClass: () => $a,
    getImageListItemBarUtilityClass: () => so,
    getImageListItemUtilityClass: () => ao,
    getImageListUtilityClass: () => ro,
    getInitColorSchemeScript: () => Hr,
    getInputAdornmentUtilityClass: () => fo,
    getInputBaseUtilityClass: () => mo,
    getInputLabelUtilityClasses: () => go,
    getInputUtilityClass: () => lo,
    getLinearProgressUtilityClass: () => vo,
    getLinkUtilityClass: () => bo,
    getListItemAvatarUtilityClass: () => Eo,
    getListItemButtonUtilityClass: () => Oo,
    getListItemIconUtilityClass: () => Ao,
    getListItemSecondaryActionClassesUtilityClass: () => Mo,
    getListItemTextUtilityClass: () => Po,
    getListItemUtilityClass: () => wo,
    getListSubheaderUtilityClass: () => Io,
    getListUtilityClass: () => So,
    getLuminance: () => rr,
    getMenuItemUtilityClass: () => Bo,
    getMenuUtilityClass: () => Ro,
    getMobileStepperUtilityClass: () => Ho,
    getModalUtilityClass: () => Go,
    getNativeSelectUtilityClasses: () => qo,
    getOffsetLeft: () => is,
    getOffsetTop: () => rs,
    getOpenInteractionType: () => bs,
    getOutlinedInputUtilityClass: () => Yo,
    getOverlayAlpha: () => Mr,
    getPaginationItemUtilityClass: () => $o,
    getPaginationUtilityClass: () => Zo,
    getPaperUtilityClass: () => ts,
    getPopoverUtilityClass: () => ss,
    getPopperUtilityClass: () => ls,
    getRadioGroupUtilityClass: () => ms,
    getRadioUtilityClass: () => ds,
    getRatingUtilityClass: () => gs,
    getScopedCssBaselineUtilityClass: () => vs,
    getSelectUtilityClasses: () => Ts,
    getSkeletonUtilityClass: () => Ds,
    getSliderUtilityClass: () => Is,
    getSnackbarContentUtilityClass: () => Bs,
    getSnackbarUtilityClass: () => Rs,
    getSpeedDialActionUtilityClass: () => Ws,
    getSpeedDialIconUtilityClass: () => Ks,
    getSpeedDialUtilityClass: () => Hs,
    getStackUtilityClass: () => Js,
    getStepButtonUtilityClass: () => ec,
    getStepConnectorUtilityClass: () => nc,
    getStepContentUtilityClass: () => ic,
    getStepIconUtilityClass: () => oc,
    getStepLabelUtilityClass: () => cc,
    getStepUtilityClass: () => Zs,
    getStepperUtilityClass: () => dc,
    getSvgIconUtilityClass: () => mc,
    getSwitchUtilityClass: () => gc,
    getTabScrollButtonUtilityClass: () => Hc,
    getTabUtilityClass: () => vc,
    getTableBodyUtilityClass: () => Sc,
    getTableCellUtilityClass: () => wc,
    getTableContainerUtilityClass: () => Ec,
    getTableFooterUtilityClass: () => Oc,
    getTableHeadUtilityClass: () => Ac,
    getTablePaginationActionsUtilityClass: () => Pc,
    getTablePaginationUtilityClass: () => Mc,
    getTableRowUtilityClass: () => Ic,
    getTableSortLabelUtilityClass: () => Rc,
    getTableUtilityClass: () => bc,
    getTabsUtilityClass: () => Bc,
    getTextFieldUtilityClass: () => Wc,
    getToggleButtonGroupUtilityClass: () => Jc,
    getToggleButtonUtilityClass: () => Kc,
    getToolbarUtilityClass: () => Xc,
    getTooltipUtilityClass: () => Qc,
    getTouchRippleUtilityClass: () => qi,
    getTypographyUtilityClass: () => el,
    gridClasses: () => Xa,
    hexToRgb: () => Zn,
    hslToRgb: () => $n,
    iconButtonClasses: () => eo,
    iconClasses: () => Qa,
    imageListClasses: () => no,
    imageListItemBarClasses: () => oo,
    imageListItemClasses: () => io,
    inputAdornmentClasses: () => uo,
    inputBaseClasses: () => po,
    inputClasses: () => co,
    inputLabelClasses: () => ho,
    isEmpty: () => xs,
    isMuiElement: () => Xr,
    keyframes: () => lr,
    lighten: () => sr,
    linearProgressClasses: () => _o,
    linkClasses: () => yo,
    listClasses: () => xo,
    listItemAvatarClasses: () => To,
    listItemButtonClasses: () => Do,
    listItemClasses: () => Co,
    listItemIconClasses: () => ko,
    listItemSecondaryActionClasses: () => jo,
    listItemTextClasses: () => No,
    listSubheaderClasses: () => Fo,
    major: () => nl,
    makeStyles: () => Dr,
    menuClasses: () => Lo,
    menuItemClasses: () => zo,
    mergeSlotProps: () => li,
    minor: () => rl,
    mobileStepperClasses: () => Vo,
    modalClasses: () => Wo,
    nativeSelectClasses: () => Ko,
    outlinedInputClasses: () => Jo,
    ownerDocument: () => $r,
    ownerWindow: () => ei,
    paginationClasses: () => Xo,
    paginationItemClasses: () => Qo,
    paperClasses: () => es,
    patch: () => il,
    popoverClasses: () => ns,
    popperClasses: () => cs,
    prerelease: () => al,
    private_applyChildrenFocusVisible: () => Rr,
    private_applyInsetFocusVisible: () => Lr,
    private_createMixins: () => Fr,
    private_createTypography: () => Pr,
    private_excludeVariablesFromRoot: () => Ir,
    private_outsetFocusRing: () => zr,
    radioClasses: () => us,
    radioGroupClasses: () => ps,
    ratingClasses: () => hs,
    recomposeColor: () => tr,
    requirePropFactory: () => ti,
    responsiveFontSizes: () => _r,
    rgbToHex: () => Qn,
    scopedCssBaselineClasses: () => _s,
    selectClasses: () => ys,
    setRef: () => ni,
    shouldSkipGeneratingVar: () => Nr,
    skeletonClasses: () => Es,
    sliderClasses: () => Os,
    snackbarClasses: () => Ls,
    snackbarContentClasses: () => zs,
    speedDialActionClasses: () => Us,
    speedDialClasses: () => Vs,
    speedDialIconClasses: () => Gs,
    stackClasses: () => qs,
    stepButtonClasses: () => $s,
    stepClasses: () => Ys,
    stepConnectorClasses: () => tc,
    stepContentClasses: () => rc,
    stepIconClasses: () => ac,
    stepLabelClasses: () => sc,
    stepperClasses: () => lc,
    styled: () => wr,
    svgIconClasses: () => pc,
    switchClasses: () => hc,
    tabClasses: () => _c,
    tabScrollButtonClasses: () => Vc,
    tableBodyClasses: () => xc,
    tableCellClasses: () => Cc,
    tableClasses: () => yc,
    tableContainerClasses: () => Tc,
    tableFooterClasses: () => Dc,
    tableHeadClasses: () => kc,
    tablePaginationActionsClasses: () => Nc,
    tablePaginationClasses: () => jc,
    tableRowClasses: () => Fc,
    tableSortLabelClasses: () => Lc,
    tabsClasses: () => zc,
    textFieldClasses: () => Uc,
    toggleButtonClasses: () => Gc,
    toggleButtonGroupClasses: () => qc,
    toolbarClasses: () => Yc,
    tooltipClasses: () => Zc,
    touchRippleClasses: () => Gi,
    typographyClasses: () => $c,
    unstable_ClassNameGenerator: () => Wr,
    unstable_composeClasses: () => Un,
    unstable_createBreakpoints: () => ur,
    unstable_createMuiStrictModeTheme: () => pr,
    unstable_getUnit: () => hr,
    unstable_memoTheme: () => Qr,
    unstable_toUnitless: () => gr,
    unstable_useEnhancedEffect: () => ri,
    unstable_useId: () => ii,
    unsupportedProp: () => ai,
    useAutocomplete: () => Vn,
    useColorScheme: () => Vr,
    useControlled: () => oi,
    useEventCallback: () => si,
    useForkRef: () => ci,
    useFormControl: () => Ra,
    useMediaQuery: () => Ln,
    usePagination: () => Rn,
    useRadioGroup: () => fs,
    useScrollTrigger: () => zn,
    useSelectFocusSource: () => Cs,
    useStepContext: () => Qs,
    useStepperContext: () => fc,
    useTheme: () => Sr,
    useThemeProps: () => Cr,
    version: () => tl,
    withStyles: () => Or,
    withTheme: () => kr
  });
  we = `__mf_init__virtual:mf:__mfe_internal__fullcalendar__mf_owner__78845261933133__mf_v__runtimeInit__mf_v__.js__`;
  Te = globalThis[we];
  if (!Te) {
    let e2, t2, n2 = new Promise((n3, r2) => {
      e2 = n3, t2 = r2;
    });
    Te = globalThis[we] = {
      initPromise: n2,
      initResolve: e2,
      initReject: t2
    };
  }
  var Ee = Te.initPromise, f = `__mf_module_cache__`;
  globalThis[f] || (globalThis[f] = {
    share: {},
    remote: {}
  }), (_c2 = globalThis[f]).share || (_c2.share = {}), (_d2 = globalThis[f]).remote || (_d2.remote = {});
  var p = globalThis[f], De = (e2) => {
    let t2 = p.pendingShareLoads || (p.pendingShareLoads = []);
    t2.push(e2);
    let n2 = () => {
      let n3 = t2.indexOf(e2);
      n3 !== -1 && t2.splice(n3, 1);
    };
    return e2.then(n2, n2), e2;
  };
  for (let e2 of Object.keys(p.share)) if (e2.startsWith(`default:`)) {
    let t2 = e2.slice(8);
    p.share[t2] === void 0 && (p.share[t2] = p.share[e2]);
  } else if (!e2.includes(`:`)) {
    let t2 = `default:` + e2;
    p.share[t2] === void 0 && (p.share[t2] = p.share[e2]);
  }
  let Oe, ke, Ae, je, Me, Ne, Pe, Fe, Ie, Le, Re, ze, Be, Ve, Ue, We, Ke, Je, Ye, Xe, Ze, Qe, $e, et, tt, rt, it, at, ot, st, ct, lt, ht, gt, vt, yt, St, Ct, wt, Et, Dt, kt, At, jt, Pt, It, Lt, Rt, zt, Bt, Vt, Ht, Ut, Wt, Gt, Kt, qt, Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn, rn, an, on, sn, cn, ln, un, dn, fn, pn, mn, hn, gn, _n, vn, yn, bn, xn, Sn, Cn, wn, Tn, En, Dn, On, kn, An, jn, Mn, Nn, Pn, In, Ln, Rn, zn, Bn, Vn, Hn, Un, Wn, Gn, Kn, qn, Jn, Yn, Xn, Zn, Qn, $n, er, tr, nr, rr, ir, ar, or, sr, cr, lr, ur, dr, fr, pr, mr, hr, gr, _r, vr, yr, br, xr, Sr, Cr, wr, Tr, Er, Dr, Or, kr, Ar, jr, Mr, Nr, Pr, Fr, Ir, Lr, Rr, zr, Br, Vr, Hr, Ur, Wr, Gr, Kr, qr, Jr, Yr, Xr, Zr, Qr, $r, ei, ti, ni, ri, ii, ai, oi, si, ci, li, ui, di, fi, pi, mi, hi, gi, _i, vi, yi, bi, xi, Si, Ci, wi, Ti, Ei, Di, Oi, ki, Ai, ji, Mi, Ni, Pi, Fi, Ii, Li, Ri, zi, Bi, Vi, Hi, Ui, Wi, Gi, Ki, qi, Ji, Yi, Xi, Zi, Qi, $i, ea, ta, na, ra, ia, aa, oa, sa, ca, la, ua, da, fa, pa, ma, ha, ga, _a, va, ya, ba, xa, Sa, Ca, wa, Ta, Ea, Da, Oa, ka, Aa, ja, Ma, Na, Pa, Fa, Ia, La, Ra, za, Ba, Va, Ha, Ua, Wa, Ga, Ka, qa, Ja, Ya, Xa, Za, Qa, $a, eo, to, no, ro, io, ao, oo, so, co, lo, uo, fo, po, mo, ho, go, _o, vo, yo, bo, xo, So, Co, wo, To, Eo, Do, Oo, ko, Ao, jo, Mo, No, Po, Fo, Io, Lo, Ro, zo, Bo, Vo, Ho, Uo, Wo, Go, Ko, qo, Jo, Yo, Xo, Zo, Qo, $o, es, ts, ns, rs, is, as, os, ss, cs, ls, us, ds, fs, ps, ms, hs, gs, _s, vs, ys, bs, xs, Ss, Cs, ws, Ts, Es, Ds, Os, ks, As, js, Ms, Ns, Ps, Fs, Is, Ls, Rs, zs, Bs, Vs, Hs, Us, Ws, Gs, Ks, qs, Js, Ys, Xs, Zs, Qs, $s, ec, tc, nc, rc, ic, ac, oc, sc, cc, lc, uc, dc, fc, pc, mc, hc, gc, _c, vc, yc, bc, xc, Sc, Cc, wc, Tc, Ec, Dc, Oc, kc, Ac, jc, Mc, Nc, Pc, Fc, Ic, Lc, Rc, zc, Bc, Vc, Hc, Uc, Wc, Gc, Kc, qc, Jc, Yc, Xc, Zc, Qc, $c, el, tl, nl, rl, il, al, ol;
  Oe = (e2) => {
    let t2 = (() => {
      let t3 = e2;
      for (let e3 = 0; e3 < 5; e3++) {
        let e4 = t3 == null ? void 0 : t3.default;
        if (!e4 || typeof e4 != `object`) break;
        let n2 = Object.keys(t3).filter((e5) => e5 !== "default").map((e5) => t3[e5]);
        if (n2.length > 0 && n2.some((e5) => e5 !== void 0)) break;
        t3 = e4;
      }
      return t3;
    })();
    return t2 && Object.getPrototypeOf(t2) === null ? Object.assign({}, t2) : t2;
  };
  ol = (e2) => {
    O = e2, Ae = e2.colors, je = e2.Accordion, Me = e2.AccordionActions, Ne = e2.AccordionDetails, Pe = e2.AccordionSummary, Fe = e2.Alert, Ie = e2.AlertTitle, Le = e2.AppBar, Re = e2.Autocomplete, ze = e2.Avatar, Be = e2.AvatarGroup, Ve = e2.Backdrop, He = e2.Badge, Ue = e2.BottomNavigation, We = e2.BottomNavigationAction, Ge = e2.Box, Ke = e2.Breadcrumbs, qe = e2.Button, Je = e2.ButtonBase, Ye = e2.ButtonGroup, Xe = e2.Card, Ze = e2.CardActionArea, Qe = e2.CardActions, $e = e2.CardContent, et = e2.CardHeader, tt = e2.CardMedia, nt = e2.Checkbox, rt = e2.Chip, it = e2.CircularProgress, at = e2.ClickAwayListener, ot = e2.Collapse, st = e2.Container, ct = e2.CssBaseline, lt = e2.darkScrollbar, ut = e2.Dialog, dt = e2.DialogActions, ft = e2.DialogContent, pt = e2.DialogContentText, mt = e2.DialogTitle, ht = e2.Divider, gt = e2.Drawer, _t = e2.Fab, vt = e2.Fade, yt = e2.FilledInput, bt = e2.FormControl, xt = e2.FormControlLabel, St = e2.FormGroup, Ct = e2.FormHelperText, wt = e2.FormLabel, Tt = e2.Grid, Et = e2.Grow, Dt = e2.Icon, Ot = e2.IconButton, kt = e2.ImageList, At = e2.ImageListItem, jt = e2.ImageListItemBar, Mt = e2.Input, Nt = e2.InputAdornment, Pt = e2.InputBase, Ft = e2.InputLabel, m = e2.LinearProgress, It = e2.Link, h = e2.List, g = e2.ListItem, Lt = e2.ListItemAvatar, _ = e2.ListItemButton, v = e2.ListItemIcon, Rt = e2.ListItemSecondaryAction, y = e2.ListItemText, zt = e2.ListSubheader, b = e2.Menu, x = e2.MenuItem, Bt = e2.MenuList, Vt = e2.MobileStepper, Ht = e2.Modal, Ut = e2.NativeSelect, Wt = e2.NoSsr, Gt = e2.OutlinedInput, Kt = e2.Pagination, qt = e2.PaginationItem, S = e2.Paper, C = e2.Popover, Jt = e2.Popper, Yt = e2.Portal, Xt = e2.Radio, Zt = e2.RadioGroup, Qt = e2.Rating, $t = e2.ScopedCssBaseline, w = e2.Select, en = e2.Skeleton, tn = e2.Slide, nn = e2.Slider, T = e2.Snackbar, rn = e2.SnackbarContent, an = e2.SpeedDial, on = e2.SpeedDialAction, sn = e2.SpeedDialIcon, cn = e2.Stack, ln = e2.Step, un = e2.StepButton, dn = e2.StepConnector, fn = e2.StepContent, pn = e2.StepIcon, mn = e2.StepLabel, hn = e2.Stepper, gn = e2.SvgIcon, _n = e2.SwipeableDrawer, E = e2.Switch, vn = e2.Tab, yn = e2.Table, bn = e2.TableBody, xn = e2.TableCell, Sn = e2.TableContainer, Cn = e2.TableFooter, wn = e2.TableHead, Tn = e2.TablePagination, En = e2.TablePaginationActions, Dn = e2.TableRow, On = e2.TableSortLabel, kn = e2.Tabs, An = e2.TabScrollButton, D = e2.TextField, jn = e2.TextareaAutosize, Mn = e2.ToggleButton, Nn = e2.ToggleButtonGroup, Pn = e2.Toolbar, Fn = e2.Tooltip, In = e2.Typography, Ln = e2.useMediaQuery, Rn = e2.usePagination, zn = e2.useScrollTrigger, Bn = e2.Zoom, Vn = e2.useAutocomplete, Hn = e2.GlobalStyles, Un = e2.unstable_composeClasses, Wn = e2.generateUtilityClass, Gn = e2.generateUtilityClasses, Kn = e2.Unstable_TrapFocus, qn = e2.InitColorSchemeScript, Jn = e2.experimental_sx, Yn = e2.THEME_ID, Xn = e2.adaptV4Theme, Zn = e2.hexToRgb, Qn = e2.rgbToHex, $n = e2.hslToRgb, er = e2.decomposeColor, tr = e2.recomposeColor, nr = e2.getContrastRatio, rr = e2.getLuminance, ir = e2.emphasize, ar = e2.alpha, or = e2.darken, sr = e2.lighten, cr = e2.css, lr = e2.keyframes, ur = e2.unstable_createBreakpoints, dr = e2.createTheme, fr = e2.enhanceHighContrast, pr = e2.unstable_createMuiStrictModeTheme, mr = e2.createStyles, hr = e2.unstable_getUnit, gr = e2.unstable_toUnitless, _r = e2.responsiveFontSizes, vr = e2.createTransitions, yr = e2.duration, br = e2.easing, xr = e2.createColorScheme, Sr = e2.useTheme, Cr = e2.useThemeProps, wr = e2.styled, Tr = e2.ThemeProvider, Er = e2.StyledEngineProvider, Dr = e2.makeStyles, Or = e2.withStyles, kr = e2.withTheme, Ar = e2.extendTheme, jr = e2.experimental_extendTheme, Mr = e2.getOverlayAlpha, Nr = e2.shouldSkipGeneratingVar, Pr = e2.private_createTypography, Fr = e2.private_createMixins, Ir = e2.private_excludeVariablesFromRoot, Lr = e2.private_applyInsetFocusVisible, Rr = e2.private_applyChildrenFocusVisible, zr = e2.private_outsetFocusRing, Br = e2.CssVarsProvider, Vr = e2.useColorScheme, Hr = e2.getInitColorSchemeScript, Ur = e2.Experimental_CssVarsProvider, Wr = e2.unstable_ClassNameGenerator, Gr = e2.capitalize, Kr = e2.createChainedFunction, qr = e2.createSvgIcon, Jr = e2.debounce, Yr = e2.deprecatedPropType, Xr = e2.isMuiElement, Zr = e2.getActiveElement, Qr = e2.unstable_memoTheme, $r = e2.ownerDocument, ei = e2.ownerWindow, ti = e2.requirePropFactory, ni = e2.setRef, ri = e2.unstable_useEnhancedEffect, ii = e2.unstable_useId, ai = e2.unsupportedProp, oi = e2.useControlled, si = e2.useEventCallback, ci = e2.useForkRef, li = e2.mergeSlotProps, ui = e2.accordionClasses, di = e2.getAccordionUtilityClass, fi = e2.accordionActionsClasses, pi = e2.getAccordionActionsUtilityClass, mi = e2.accordionDetailsClasses, hi = e2.getAccordionDetailsUtilityClass, gi = e2.accordionSummaryClasses, _i = e2.getAccordionSummaryUtilityClass, vi = e2.alertClasses, yi = e2.getAlertUtilityClass, bi = e2.alertTitleClasses, xi = e2.getAlertTitleUtilityClass, Si = e2.appBarClasses, Ci = e2.getAppBarUtilityClass, wi = e2.createFilterOptions, Ti = e2.autocompleteClasses, Ei = e2.getAutocompleteUtilityClass, Di = e2.avatarClasses, Oi = e2.getAvatarUtilityClass, ki = e2.avatarGroupClasses, Ai = e2.getAvatarGroupUtilityClass, ji = e2.backdropClasses, Mi = e2.getBackdropUtilityClass, Ni = e2.badgeClasses, Pi = e2.getBadgeUtilityClass, Fi = e2.bottomNavigationClasses, Ii = e2.getBottomNavigationUtilityClass, Li = e2.bottomNavigationActionClasses, Ri = e2.getBottomNavigationActionUtilityClass, zi = e2.boxClasses, Bi = e2.breadcrumbsClasses, Vi = e2.getBreadcrumbsUtilityClass, Hi = e2.buttonClasses, Ui = e2.getButtonUtilityClass, Wi = e2.buttonBaseClasses, Gi = e2.touchRippleClasses, Ki = e2.getButtonBaseUtilityClass, qi = e2.getTouchRippleUtilityClass, Ji = e2.buttonGroupClasses, Yi = e2.ButtonGroupContext, Xi = e2.ButtonGroupButtonContext, Zi = e2.getButtonGroupUtilityClass, Qi = e2.cardClasses, $i = e2.getCardUtilityClass, ea = e2.cardActionAreaClasses, ta = e2.getCardActionAreaUtilityClass, na = e2.cardActionsClasses, ra = e2.getCardActionsUtilityClass, ia = e2.cardContentClasses, aa = e2.getCardContentUtilityClass, oa = e2.cardHeaderClasses, sa = e2.getCardHeaderUtilityClass, ca = e2.cardMediaClasses, la = e2.getCardMediaUtilityClass, ua = e2.checkboxClasses, da = e2.getCheckboxUtilityClass, fa = e2.chipClasses, pa = e2.getChipUtilityClass, ma = e2.circularProgressClasses, ha = e2.getCircularProgressUtilityClass, ga = e2.collapseClasses, _a = e2.getCollapseUtilityClass, va = e2.containerClasses, ya = e2.getContainerUtilityClass, ba = e2.dialogClasses, xa = e2.getDialogUtilityClass, Sa = e2.dialogActionsClasses, Ca = e2.getDialogActionsUtilityClass, wa = e2.dialogContentClasses, Ta = e2.getDialogContentUtilityClass, Ea = e2.dialogContentTextClasses, Da = e2.getDialogContentTextUtilityClass, Oa = e2.dialogTitleClasses, ka = e2.getDialogTitleUtilityClass, Aa = e2.dividerClasses, ja = e2.getDividerUtilityClass, Ma = e2.drawerClasses, Na = e2.getDrawerUtilityClass, Pa = e2.fabClasses, Fa = e2.getFabUtilityClass, Ia = e2.filledInputClasses, La = e2.getFilledInputUtilityClass, Ra = e2.useFormControl, za = e2.formControlClasses, Ba = e2.getFormControlUtilityClasses, Va = e2.formControlLabelClasses, Ha = e2.getFormControlLabelUtilityClasses, Ua = e2.formGroupClasses, Wa = e2.getFormGroupUtilityClass, Ga = e2.formHelperTextClasses, Ka = e2.getFormHelperTextUtilityClasses, qa = e2.formLabelClasses, Ja = e2.FormLabelRoot, Ya = e2.getFormLabelUtilityClasses, Xa = e2.gridClasses, Za = e2.getGridUtilityClass, Qa = e2.iconClasses, $a = e2.getIconUtilityClass, eo = e2.iconButtonClasses, to = e2.getIconButtonUtilityClass, no = e2.imageListClasses, ro = e2.getImageListUtilityClass, io = e2.imageListItemClasses, ao = e2.getImageListItemUtilityClass, oo = e2.imageListItemBarClasses, so = e2.getImageListItemBarUtilityClass, co = e2.inputClasses, lo = e2.getInputUtilityClass, uo = e2.inputAdornmentClasses, fo = e2.getInputAdornmentUtilityClass, po = e2.inputBaseClasses, mo = e2.getInputBaseUtilityClass, ho = e2.inputLabelClasses, go = e2.getInputLabelUtilityClasses, _o = e2.linearProgressClasses, vo = e2.getLinearProgressUtilityClass, yo = e2.linkClasses, bo = e2.getLinkUtilityClass, xo = e2.listClasses, So = e2.getListUtilityClass, Co = e2.listItemClasses, wo = e2.getListItemUtilityClass, To = e2.listItemAvatarClasses, Eo = e2.getListItemAvatarUtilityClass, Do = e2.listItemButtonClasses, Oo = e2.getListItemButtonUtilityClass, ko = e2.listItemIconClasses, Ao = e2.getListItemIconUtilityClass, jo = e2.listItemSecondaryActionClasses, Mo = e2.getListItemSecondaryActionClassesUtilityClass, No = e2.listItemTextClasses, Po = e2.getListItemTextUtilityClass, Fo = e2.listSubheaderClasses, Io = e2.getListSubheaderUtilityClass, Lo = e2.menuClasses, Ro = e2.getMenuUtilityClass, zo = e2.menuItemClasses, Bo = e2.getMenuItemUtilityClass, Vo = e2.mobileStepperClasses, Ho = e2.getMobileStepperUtilityClass, Uo = e2.ModalManager, Wo = e2.modalClasses, Go = e2.getModalUtilityClass, Ko = e2.nativeSelectClasses, qo = e2.getNativeSelectUtilityClasses, Jo = e2.outlinedInputClasses, Yo = e2.getOutlinedInputUtilityClass, Xo = e2.paginationClasses, Zo = e2.getPaginationUtilityClass, Qo = e2.paginationItemClasses, $o = e2.getPaginationItemUtilityClass, es = e2.paperClasses, ts = e2.getPaperUtilityClass, ns = e2.popoverClasses, rs = e2.getOffsetTop, is = e2.getOffsetLeft, as = e2.PopoverRoot, os = e2.PopoverPaper, ss = e2.getPopoverUtilityClass, cs = e2.popperClasses, ls = e2.getPopperUtilityClass, us = e2.radioClasses, ds = e2.getRadioUtilityClass, fs = e2.useRadioGroup, ps = e2.radioGroupClasses, ms = e2.getRadioGroupUtilityClass, hs = e2.ratingClasses, gs = e2.getRatingUtilityClass, _s = e2.scopedCssBaselineClasses, vs = e2.getScopedCssBaselineUtilityClass, ys = e2.selectClasses, bs = e2.getOpenInteractionType, xs = e2.isEmpty, Ss = e2.areEqualValues, Cs = e2.useSelectFocusSource, ws = e2.SelectFocusSourceProvider, Ts = e2.getSelectUtilityClasses, Es = e2.skeletonClasses, Ds = e2.getSkeletonUtilityClass, Os = e2.sliderClasses, ks = e2.SliderRoot, As = e2.SliderRail, js = e2.SliderTrack, Ms = e2.SliderThumb, Ns = e2.SliderMark, Ps = e2.SliderMarkLabel, Fs = e2.SliderValueLabel, Is = e2.getSliderUtilityClass, Ls = e2.snackbarClasses, Rs = e2.getSnackbarUtilityClass, zs = e2.snackbarContentClasses, Bs = e2.getSnackbarContentUtilityClass, Vs = e2.speedDialClasses, Hs = e2.getSpeedDialUtilityClass, Us = e2.speedDialActionClasses, Ws = e2.getSpeedDialActionUtilityClass, Gs = e2.speedDialIconClasses, Ks = e2.getSpeedDialIconUtilityClass, qs = e2.stackClasses, Js = e2.getStackUtilityClass, Ys = e2.stepClasses, Xs = e2.StepContext, Zs = e2.getStepUtilityClass, Qs = e2.useStepContext, $s = e2.stepButtonClasses, ec = e2.getStepButtonUtilityClass, tc = e2.stepConnectorClasses, nc = e2.getStepConnectorUtilityClass, rc = e2.stepContentClasses, ic = e2.getStepContentUtilityClass, ac = e2.stepIconClasses, oc = e2.getStepIconUtilityClass, sc = e2.stepLabelClasses, cc = e2.getStepLabelUtilityClass, lc = e2.stepperClasses, uc = e2.StepperContext, dc = e2.getStepperUtilityClass, fc = e2.useStepperContext, pc = e2.svgIconClasses, mc = e2.getSvgIconUtilityClass, hc = e2.switchClasses, gc = e2.getSwitchUtilityClass, _c = e2.tabClasses, vc = e2.getTabUtilityClass, yc = e2.tableClasses, bc = e2.getTableUtilityClass, xc = e2.tableBodyClasses, Sc = e2.getTableBodyUtilityClass, Cc = e2.tableCellClasses, wc = e2.getTableCellUtilityClass, Tc = e2.tableContainerClasses, Ec = e2.getTableContainerUtilityClass, Dc = e2.tableFooterClasses, Oc = e2.getTableFooterUtilityClass, kc = e2.tableHeadClasses, Ac = e2.getTableHeadUtilityClass, jc = e2.tablePaginationClasses, Mc = e2.getTablePaginationUtilityClass, Nc = e2.tablePaginationActionsClasses, Pc = e2.getTablePaginationActionsUtilityClass, Fc = e2.tableRowClasses, Ic = e2.getTableRowUtilityClass, Lc = e2.tableSortLabelClasses, Rc = e2.getTableSortLabelUtilityClass, zc = e2.tabsClasses, Bc = e2.getTabsUtilityClass, Vc = e2.tabScrollButtonClasses, Hc = e2.getTabScrollButtonUtilityClass, Uc = e2.textFieldClasses, Wc = e2.getTextFieldUtilityClass, Gc = e2.toggleButtonClasses, Kc = e2.getToggleButtonUtilityClass, qc = e2.toggleButtonGroupClasses, Jc = e2.getToggleButtonGroupUtilityClass, Yc = e2.toolbarClasses, Xc = e2.getToolbarUtilityClass, Zc = e2.tooltipClasses, Qc = e2.getTooltipUtilityClass, $c = e2.typographyClasses, el = e2.getTypographyUtilityClass, tl = e2.version, nl = e2.major, rl = e2.minor, il = e2.patch, al = e2.prerelease, ke = e2.default ?? e2;
  };
  a(p.share, {
    canonical: `default:@mui/material`,
    aliases: [
      `@mui/material`
    ]
  }, ol);
  var O = n(p.share, {
    canonical: `default:@mui/material`,
    aliases: [
      `@mui/material`
    ]
  });
  O === void 0 ? De(Ee.then(() => {
    if (O = n(p.share, {
      canonical: `default:@mui/material`,
      aliases: [
        `@mui/material`
      ]
    }), O !== void 0) ol(O);
    else return t(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__78845261933133__prebuild___mf_0_mui_mf_1_material__prebuild__-BNACOqHg.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }).then((e2) => {
      O = Oe(e2), s(p.share, {
        canonical: `default:@mui/material`,
        aliases: [
          `@mui/material`
        ]
      }, O, `fullcalendar`);
    }), __vite__mapDeps([2,3,1,4]), import.meta.url);
  })) : ol(O);
  let cl, ll;
  sl = e({
    ThemeProvider: () => ml,
    __moduleExports: () => j,
    default: () => pl,
    unstable_nested: () => gl,
    useTheme: () => hl
  });
  cl = `__mf_init__virtual:mf:__mfe_internal__fullcalendar__mf_owner__78845261933133__mf_v__runtimeInit__mf_v__.js__`;
  ll = globalThis[cl];
  if (!ll) {
    let e2, t2, n2 = new Promise((n3, r2) => {
      e2 = n3, t2 = r2;
    });
    ll = globalThis[cl] = {
      initPromise: n2,
      initResolve: e2,
      initReject: t2
    };
  }
  var ul = ll.initPromise, k = `__mf_module_cache__`;
  globalThis[k] || (globalThis[k] = {
    share: {},
    remote: {}
  }), (_e2 = globalThis[k]).share || (_e2.share = {}), (_f2 = globalThis[k]).remote || (_f2.remote = {});
  var A = globalThis[k], dl = (e2) => {
    let t2 = A.pendingShareLoads || (A.pendingShareLoads = []);
    t2.push(e2);
    let n2 = () => {
      let n3 = t2.indexOf(e2);
      n3 !== -1 && t2.splice(n3, 1);
    };
    return e2.then(n2, n2), e2;
  };
  for (let e2 of Object.keys(A.share)) if (e2.startsWith(`default:`)) {
    let t2 = e2.slice(8);
    A.share[t2] === void 0 && (A.share[t2] = A.share[e2]);
  } else if (!e2.includes(`:`)) {
    let t2 = `default:` + e2;
    A.share[t2] === void 0 && (A.share[t2] = A.share[e2]);
  }
  let fl, pl, gl, _l;
  fl = (e2) => {
    let t2 = (() => {
      let t3 = e2;
      for (let e3 = 0; e3 < 5; e3++) {
        let e4 = t3 == null ? void 0 : t3.default;
        if (!e4 || typeof e4 != `object`) break;
        let n2 = Object.keys(t3).filter((e5) => e5 !== "default").map((e5) => t3[e5]);
        if (n2.length > 0 && n2.some((e5) => e5 !== void 0)) break;
        t3 = e4;
      }
      return t3;
    })();
    return t2 && Object.getPrototypeOf(t2) === null ? Object.assign({}, t2) : t2;
  };
  _l = (e2) => {
    j = e2, ml = e2.ThemeProvider, hl = e2.useTheme, gl = e2.unstable_nested, pl = e2.default ?? e2;
  };
  a(A.share, {
    canonical: `default:@mui/private-theming`,
    aliases: [
      `@mui/private-theming`
    ]
  }, _l);
  var j = n(A.share, {
    canonical: `default:@mui/private-theming`,
    aliases: [
      `@mui/private-theming`
    ]
  });
  j === void 0 ? dl(ul.then(() => {
    if (j = n(A.share, {
      canonical: `default:@mui/private-theming`,
      aliases: [
        `@mui/private-theming`
      ]
    }), j !== void 0) _l(j);
    else return t(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__78845261933133__prebuild___mf_0_mui_mf_1_private_mf_2_theming__prebuild__-x2iF6PTF.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }).then((e2) => {
      j = fl(e2), s(A.share, {
        canonical: `default:@mui/private-theming`,
        aliases: [
          `@mui/private-theming`
        ]
      }, j, `fullcalendar`);
    }), [], import.meta.url);
  })) : _l(j);
  let yl, bl;
  vl = e({
    Box: () => eu,
    Container: () => Cu,
    GlobalStyles: () => kl,
    Grid: () => wu,
    RtlProvider: () => xu,
    Stack: () => Tu,
    StyledEngineProvider: () => Ol,
    ThemeProvider: () => pu,
    __moduleExports: () => F,
    alignContent: () => Gu,
    alignItems: () => Wu,
    alignSelf: () => Xu,
    alpha: () => af,
    backgroundColor: () => md,
    bgcolor: () => pd,
    blend: () => pf,
    border: () => Du,
    borderBottom: () => Au,
    borderBottomColor: () => Fu,
    borderColor: () => Mu,
    borderLeft: () => ju,
    borderLeftColor: () => Iu,
    borderRadius: () => zu,
    borderRight: () => ku,
    borderRightColor: () => Pu,
    borderTop: () => Ou,
    borderTopColor: () => Nu,
    borderTransform: () => Eu,
    borders: () => Al,
    bottom: () => yd,
    boxClasses: () => qd,
    boxSizing: () => Ad,
    breakpoints: () => jl,
    color: () => fd,
    colorChannel: () => Qd,
    columnGap: () => ed,
    compose: () => Il,
    containerClasses: () => bf,
    createBox: () => tu,
    createBreakpoints: () => au,
    createContainer: () => Su,
    createGrid: () => Sf,
    createSpacing: () => ou,
    createStack: () => kf,
    createStyled: () => nu,
    createTheme: () => iu,
    createUnarySpacing: () => Pd,
    createUnaryUnit: () => Nd,
    css: () => El,
    cssContainerQueries: () => Ml,
    darken: () => sf,
    decomposeColor: () => Zd,
    default: () => wl,
    display: () => Ll,
    emphasize: () => df,
    experimental_sx: () => Tl,
    flex: () => qu,
    flexBasis: () => Bu,
    flexDirection: () => Vu,
    flexGrow: () => Ju,
    flexShrink: () => Yu,
    flexWrap: () => Hu,
    flexbox: () => Rl,
    fontFamily: () => Rd,
    fontSize: () => zd,
    fontStyle: () => Bd,
    fontWeight: () => Vd,
    gap: () => $u,
    getContainerUtilityClass: () => xf,
    getContrastRatio: () => rf,
    getGridUtilityClass: () => Of,
    getLuminance: () => nf,
    getPath: () => Kl,
    getStackUtilityClass: () => jf,
    getStyleValue: () => ql,
    getThemeProps: () => lu,
    getValue: () => Fd,
    grid: () => zl,
    gridArea: () => ud,
    gridAutoColumns: () => ad,
    gridAutoFlow: () => id,
    gridAutoRows: () => od,
    gridClasses: () => Cf,
    gridColumn: () => nd,
    gridRow: () => rd,
    gridTemplateAreas: () => ld,
    gridTemplateColumns: () => sd,
    gridTemplateRows: () => cd,
    handleBreakpoints: () => Nl,
    height: () => Td,
    hexToRgb: () => Xd,
    hslToRgb: () => tf,
    justifyContent: () => Uu,
    justifyItems: () => Zu,
    justifySelf: () => Qu,
    keyframes: () => Dl,
    left: () => bd,
    letterSpacing: () => Hd,
    lighten: () => lf,
    lineHeight: () => Wd,
    major: () => gf,
    margin: () => Id,
    marginKeys: () => jd,
    maxHeight: () => Ed,
    maxWidth: () => Cd,
    mergeBreakpointsInOrder: () => Pl,
    minHeight: () => Dd,
    minWidth: () => wd,
    minor: () => _f,
    order: () => Ku,
    outline: () => Lu,
    outlineColor: () => Ru,
    padding: () => Ld,
    paddingKeys: () => Md,
    palette: () => Bl,
    paletteTransform: () => dd,
    patch: () => vf,
    position: () => hd,
    positions: () => Vl,
    prerelease: () => yf,
    private_safeAlpha: () => of,
    private_safeColorChannel: () => $d,
    private_safeDarken: () => cf,
    private_safeEmphasize: () => ff,
    private_safeLighten: () => uf,
    recomposeColor: () => P,
    responsivePropType: () => bu,
    rgbToHex: () => ef,
    right: () => vd,
    rowGap: () => td,
    shadows: () => Hl,
    shape: () => su,
    shouldForwardProp: () => Yd,
    sizeHeight: () => kd,
    sizeWidth: () => Od,
    sizing: () => Ul,
    sizingTransform: () => xd,
    spacing: () => Wl,
    stackClasses: () => Af,
    style: () => Gl,
    styled: () => ru,
    systemDefaultTheme: () => Jd,
    textAlign: () => Gd,
    textTransform: () => Ud,
    top: () => _d,
    typography: () => Jl,
    typographyVariant: () => Kd,
    unstable_createCssVarsProvider: () => hu,
    unstable_createCssVarsTheme: () => yu,
    unstable_createGetCssVar: () => gu,
    unstable_createStyleFunctionSx: () => Xl,
    unstable_cssVarsParser: () => _u,
    unstable_defaultSxConfig: () => Ql,
    unstable_extendSxProp: () => Zl,
    unstable_generateDirectionClasses: () => Tf,
    unstable_generateSizeClassNames: () => Ef,
    unstable_generateSpacingClassNames: () => Df,
    unstable_getThemeValue: () => $l,
    unstable_memoTheme: () => mu,
    unstable_prepareCssVars: () => vu,
    unstable_resolveBreakpointValues: () => Fl,
    unstable_styleFunctionSx: () => Yl,
    unstable_traverseBreakpoints: () => wf,
    useMediaQuery: () => fu,
    useRtl: () => mf,
    useTheme: () => uu,
    useThemeProps: () => cu,
    useThemeWithoutDefault: () => du,
    version: () => hf,
    width: () => Sd,
    zIndex: () => gd
  });
  yl = `__mf_init__virtual:mf:__mfe_internal__fullcalendar__mf_owner__78845261933133__mf_v__runtimeInit__mf_v__.js__`;
  bl = globalThis[yl];
  if (!bl) {
    let e2, t2, n2 = new Promise((n3, r2) => {
      e2 = n3, t2 = r2;
    });
    bl = globalThis[yl] = {
      initPromise: n2,
      initResolve: e2,
      initReject: t2
    };
  }
  var xl = bl.initPromise, M = `__mf_module_cache__`;
  globalThis[M] || (globalThis[M] = {
    share: {},
    remote: {}
  }), (_g = globalThis[M]).share || (_g.share = {}), (_h2 = globalThis[M]).remote || (_h2.remote = {});
  var N = globalThis[M], Sl = (e2) => {
    let t2 = N.pendingShareLoads || (N.pendingShareLoads = []);
    t2.push(e2);
    let n2 = () => {
      let n3 = t2.indexOf(e2);
      n3 !== -1 && t2.splice(n3, 1);
    };
    return e2.then(n2, n2), e2;
  };
  for (let e2 of Object.keys(N.share)) if (e2.startsWith(`default:`)) {
    let t2 = e2.slice(8);
    N.share[t2] === void 0 && (N.share[t2] = N.share[e2]);
  } else if (!e2.includes(`:`)) {
    let t2 = `default:` + e2;
    N.share[t2] === void 0 && (N.share[t2] = N.share[e2]);
  }
  let Cl, wl, Tl, Al, jl, Ml, Nl, Pl, Fl, Il, Ll, Rl, zl, Bl, Vl, Hl, Ul, Wl, Gl, Kl, ql, Jl, Yl, Xl, Zl, Ql, $l, eu, nu, ru, iu, su, cu, lu, du, fu, _u, vu, yu, bu, xu, Cu, wu, Tu, Eu, Du, Ou, ku, Au, ju, Mu, Nu, Pu, Fu, Iu, Lu, Ru, zu, Bu, Vu, Hu, Uu, Wu, Gu, Ku, qu, Ju, Yu, Xu, Zu, Qu, $u, ed, td, nd, rd, id, ad, od, sd, cd, ld, ud, dd, fd, pd, md, hd, gd, _d, vd, yd, bd, xd, Sd, Cd, wd, Td, Ed, Dd, Od, kd, Ad, jd, Md, Nd, Pd, Fd, Id, Ld, Rd, zd, Bd, Vd, Hd, Ud, Wd, Gd, Kd, qd, Jd, Qd, $d, of, cf, uf, ff, pf, mf, hf, gf, _f, vf, yf, bf, xf, Sf, Cf, wf, Tf, Ef, Df, Of, Af, jf, Mf;
  Cl = (e2) => {
    let t2 = (() => {
      let t3 = e2;
      for (let e3 = 0; e3 < 5; e3++) {
        let e4 = t3 == null ? void 0 : t3.default;
        if (!e4 || typeof e4 != `object`) break;
        let n2 = Object.keys(t3).filter((e5) => e5 !== "default").map((e5) => t3[e5]);
        if (n2.length > 0 && n2.some((e5) => e5 !== void 0)) break;
        t3 = e4;
      }
      return t3;
    })();
    return t2 && Object.getPrototypeOf(t2) === null ? Object.assign({}, t2) : t2;
  };
  Mf = (e2) => {
    F = e2, Tl = e2.experimental_sx, El = e2.css, Dl = e2.keyframes, Ol = e2.StyledEngineProvider, kl = e2.GlobalStyles, Al = e2.borders, jl = e2.breakpoints, Ml = e2.cssContainerQueries, Nl = e2.handleBreakpoints, Pl = e2.mergeBreakpointsInOrder, Fl = e2.unstable_resolveBreakpointValues, Il = e2.compose, Ll = e2.display, Rl = e2.flexbox, zl = e2.grid, Bl = e2.palette, Vl = e2.positions, Hl = e2.shadows, Ul = e2.sizing, Wl = e2.spacing, Gl = e2.style, Kl = e2.getPath, ql = e2.getStyleValue, Jl = e2.typography, Yl = e2.unstable_styleFunctionSx, Xl = e2.unstable_createStyleFunctionSx, Zl = e2.unstable_extendSxProp, Ql = e2.unstable_defaultSxConfig, $l = e2.unstable_getThemeValue, eu = e2.Box, tu = e2.createBox, nu = e2.createStyled, ru = e2.styled, iu = e2.createTheme, au = e2.createBreakpoints, ou = e2.createSpacing, su = e2.shape, cu = e2.useThemeProps, lu = e2.getThemeProps, uu = e2.useTheme, du = e2.useThemeWithoutDefault, fu = e2.useMediaQuery, pu = e2.ThemeProvider, mu = e2.unstable_memoTheme, hu = e2.unstable_createCssVarsProvider, gu = e2.unstable_createGetCssVar, _u = e2.unstable_cssVarsParser, vu = e2.unstable_prepareCssVars, yu = e2.unstable_createCssVarsTheme, bu = e2.responsivePropType, xu = e2.RtlProvider, Su = e2.createContainer, Cu = e2.Container, wu = e2.Grid, Tu = e2.Stack, Eu = e2.borderTransform, Du = e2.border, Ou = e2.borderTop, ku = e2.borderRight, Au = e2.borderBottom, ju = e2.borderLeft, Mu = e2.borderColor, Nu = e2.borderTopColor, Pu = e2.borderRightColor, Fu = e2.borderBottomColor, Iu = e2.borderLeftColor, Lu = e2.outline, Ru = e2.outlineColor, zu = e2.borderRadius, Bu = e2.flexBasis, Vu = e2.flexDirection, Hu = e2.flexWrap, Uu = e2.justifyContent, Wu = e2.alignItems, Gu = e2.alignContent, Ku = e2.order, qu = e2.flex, Ju = e2.flexGrow, Yu = e2.flexShrink, Xu = e2.alignSelf, Zu = e2.justifyItems, Qu = e2.justifySelf, $u = e2.gap, ed = e2.columnGap, td = e2.rowGap, nd = e2.gridColumn, rd = e2.gridRow, id = e2.gridAutoFlow, ad = e2.gridAutoColumns, od = e2.gridAutoRows, sd = e2.gridTemplateColumns, cd = e2.gridTemplateRows, ld = e2.gridTemplateAreas, ud = e2.gridArea, dd = e2.paletteTransform, fd = e2.color, pd = e2.bgcolor, md = e2.backgroundColor, hd = e2.position, gd = e2.zIndex, _d = e2.top, vd = e2.right, yd = e2.bottom, bd = e2.left, xd = e2.sizingTransform, Sd = e2.width, Cd = e2.maxWidth, wd = e2.minWidth, Td = e2.height, Ed = e2.maxHeight, Dd = e2.minHeight, Od = e2.sizeWidth, kd = e2.sizeHeight, Ad = e2.boxSizing, jd = e2.marginKeys, Md = e2.paddingKeys, Nd = e2.createUnaryUnit, Pd = e2.createUnarySpacing, Fd = e2.getValue, Id = e2.margin, Ld = e2.padding, Rd = e2.fontFamily, zd = e2.fontSize, Bd = e2.fontStyle, Vd = e2.fontWeight, Hd = e2.letterSpacing, Ud = e2.textTransform, Wd = e2.lineHeight, Gd = e2.textAlign, Kd = e2.typographyVariant, qd = e2.boxClasses, Jd = e2.systemDefaultTheme, Yd = e2.shouldForwardProp, Xd = e2.hexToRgb, Zd = e2.decomposeColor, Qd = e2.colorChannel, $d = e2.private_safeColorChannel, P = e2.recomposeColor, ef = e2.rgbToHex, tf = e2.hslToRgb, nf = e2.getLuminance, rf = e2.getContrastRatio, af = e2.alpha, of = e2.private_safeAlpha, sf = e2.darken, cf = e2.private_safeDarken, lf = e2.lighten, uf = e2.private_safeLighten, df = e2.emphasize, ff = e2.private_safeEmphasize, pf = e2.blend, mf = e2.useRtl, hf = e2.version, gf = e2.major, _f = e2.minor, vf = e2.patch, yf = e2.prerelease, bf = e2.containerClasses, xf = e2.getContainerUtilityClass, Sf = e2.createGrid, Cf = e2.gridClasses, wf = e2.unstable_traverseBreakpoints, Tf = e2.unstable_generateDirectionClasses, Ef = e2.unstable_generateSizeClassNames, Df = e2.unstable_generateSpacingClassNames, Of = e2.getGridUtilityClass, kf = e2.createStack, Af = e2.stackClasses, jf = e2.getStackUtilityClass, wl = e2.default ?? e2;
  };
  a(N.share, {
    canonical: `default:@mui/system`,
    aliases: [
      `@mui/system`
    ]
  }, Mf);
  var F = n(N.share, {
    canonical: `default:@mui/system`,
    aliases: [
      `@mui/system`
    ]
  });
  F === void 0 ? Sl(xl.then(() => {
    if (F = n(N.share, {
      canonical: `default:@mui/system`,
      aliases: [
        `@mui/system`
      ]
    }), F !== void 0) Mf(F);
    else return t(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__78845261933133__prebuild___mf_0_mui_mf_1_system__prebuild__-BDFD_0by.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }).then((e2) => {
      F = Cl(e2), s(N.share, {
        canonical: `default:@mui/system`,
        aliases: [
          `@mui/system`
        ]
      }, F, `fullcalendar`);
    }), __vite__mapDeps([0,3,1,4]), import.meta.url);
  })) : Mf(F);
  let Pf, Ff;
  Nf = e({
    HTML5_FMT: () => Ep,
    ISO_8601: () => Kf,
    RFC_2822: () => qf,
    __moduleExports: () => R,
    _getDefaultDateParts: () => Gf,
    calendarFormat: () => Tp,
    createFromInputFallback: () => Wf,
    default: () => zf,
    defaultFormat: () => Yf,
    defaultFormatUtc: () => Xf,
    defineLocale: () => vp,
    deprecationHandler: () => Hf,
    duration: () => up,
    fn: () => ep,
    invalid: () => lp,
    isDate: () => sp,
    isDuration: () => hp,
    isMoment: () => dp,
    lang: () => Zf,
    langData: () => Qf,
    locale: () => cp,
    localeData: () => mp,
    locales: () => bp,
    max: () => np,
    min: () => tp,
    momentProperties: () => Bf,
    months: () => op,
    monthsShort: () => gp,
    normalizeUnits: () => Sp,
    now: () => rp,
    parseTwoDigitYear: () => Uf,
    parseZone: () => pp,
    relativeTimeRounding: () => Cp,
    relativeTimeThreshold: () => wp,
    suppressDeprecationWarnings: () => Vf,
    unix: () => ap,
    updateLocale: () => yp,
    updateOffset: () => Jf,
    utc: () => ip,
    version: () => $f,
    weekdays: () => fp,
    weekdaysMin: () => _p,
    weekdaysShort: () => xp
  });
  Pf = `__mf_init__virtual:mf:__mfe_internal__fullcalendar__mf_owner__78845261933133__mf_v__runtimeInit__mf_v__.js__`;
  Ff = globalThis[Pf];
  if (!Ff) {
    let e2, t2, n2 = new Promise((n3, r2) => {
      e2 = n3, t2 = r2;
    });
    Ff = globalThis[Pf] = {
      initPromise: n2,
      initResolve: e2,
      initReject: t2
    };
  }
  var If = Ff.initPromise, I = `__mf_module_cache__`;
  globalThis[I] || (globalThis[I] = {
    share: {},
    remote: {}
  }), (_i2 = globalThis[I]).share || (_i2.share = {}), (_j = globalThis[I]).remote || (_j.remote = {});
  var L = globalThis[I], Lf = (e2) => {
    let t2 = L.pendingShareLoads || (L.pendingShareLoads = []);
    t2.push(e2);
    let n2 = () => {
      let n3 = t2.indexOf(e2);
      n3 !== -1 && t2.splice(n3, 1);
    };
    return e2.then(n2, n2), e2;
  };
  for (let e2 of Object.keys(L.share)) if (e2.startsWith(`default:`)) {
    let t2 = e2.slice(8);
    L.share[t2] === void 0 && (L.share[t2] = L.share[e2]);
  } else if (!e2.includes(`:`)) {
    let t2 = `default:` + e2;
    L.share[t2] === void 0 && (L.share[t2] = L.share[e2]);
  }
  let Rf, Bf, Vf, Hf, Uf, Wf, Gf, Kf, qf, Jf, Yf, Xf, Zf, Qf, $f, ep, tp, np, rp, ip, ap, op, sp, cp, lp, up, dp, fp, pp, mp, hp, gp, _p, vp, yp, bp, xp, Sp, Cp, wp, Tp, Ep, Dp;
  Rf = (e2) => {
    let t2 = (() => {
      let t3 = e2;
      for (let e3 = 0; e3 < 5; e3++) {
        let e4 = t3 == null ? void 0 : t3.default;
        if (!e4 || typeof e4 != `object`) break;
        let n2 = Object.keys(t3).filter((e5) => e5 !== "default").map((e5) => t3[e5]);
        if (n2.length > 0 && n2.some((e5) => e5 !== void 0)) break;
        t3 = e4;
      }
      return t3;
    })();
    return t2 && Object.getPrototypeOf(t2) === null ? Object.assign({}, t2) : t2;
  };
  Dp = (e2) => {
    R = e2, Bf = e2.momentProperties, Vf = e2.suppressDeprecationWarnings, Hf = e2.deprecationHandler, Uf = e2.parseTwoDigitYear, Wf = e2.createFromInputFallback, Gf = e2._getDefaultDateParts, Kf = e2.ISO_8601, qf = e2.RFC_2822, Jf = e2.updateOffset, Yf = e2.defaultFormat, Xf = e2.defaultFormatUtc, Zf = e2.lang, Qf = e2.langData, $f = e2.version, ep = e2.fn, tp = e2.min, np = e2.max, rp = e2.now, ip = e2.utc, ap = e2.unix, op = e2.months, sp = e2.isDate, cp = e2.locale, lp = e2.invalid, up = e2.duration, dp = e2.isMoment, fp = e2.weekdays, pp = e2.parseZone, mp = e2.localeData, hp = e2.isDuration, gp = e2.monthsShort, _p = e2.weekdaysMin, vp = e2.defineLocale, yp = e2.updateLocale, bp = e2.locales, xp = e2.weekdaysShort, Sp = e2.normalizeUnits, Cp = e2.relativeTimeRounding, wp = e2.relativeTimeThreshold, Tp = e2.calendarFormat, Ep = e2.HTML5_FMT, zf = e2.default ?? e2;
  };
  a(L.share, {
    canonical: `default:moment`,
    aliases: [
      `moment`
    ]
  }, Dp);
  var R = n(L.share, {
    canonical: `default:moment`,
    aliases: [
      `moment`
    ]
  });
  R === void 0 ? Lf(If.then(() => {
    if (R = n(L.share, {
      canonical: `default:moment`,
      aliases: [
        `moment`
      ]
    }), R !== void 0) Dp(R);
    else return t(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__78845261933133__prebuild__moment__prebuild__-D4x1q4NQ.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }).then((e2) => {
      R = Rf(e2), s(L.share, {
        canonical: `default:moment`,
        aliases: [
          `moment`
        ]
      }, R, `fullcalendar`);
    }), [], import.meta.url);
  })) : Dp(R);
  let kp, Ap;
  Op = e({
    Activity: () => Fp,
    Children: () => Ip,
    Component: () => Lp,
    Fragment: () => Rp,
    Profiler: () => zp,
    PureComponent: () => Bp,
    StrictMode: () => Vp,
    Suspense: () => Hp,
    ViewTransition: () => Up,
    __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE: () => Wp,
    __COMPILER_RUNTIME: () => Gp,
    __moduleExports: () => V,
    addTransitionType: () => Kp,
    cache: () => qp,
    cacheSignal: () => Jp,
    cloneElement: () => Yp,
    createContext: () => Xp,
    createElement: () => Zp,
    createRef: () => Qp,
    default: () => Pp,
    forwardRef: () => $p,
    isValidElement: () => em,
    lazy: () => tm,
    memo: () => nm,
    startTransition: () => rm,
    unstable_useCacheRefresh: () => im,
    use: () => am,
    useActionState: () => om,
    useCallback: () => sm,
    useContext: () => cm,
    useDebugValue: () => lm,
    useDeferredValue: () => um,
    useEffect: () => dm,
    useEffectEvent: () => fm,
    useId: () => pm,
    useImperativeHandle: () => mm,
    useInsertionEffect: () => hm,
    useLayoutEffect: () => gm,
    useMemo: () => _m,
    useOptimistic: () => vm,
    useReducer: () => ym,
    useRef: () => bm,
    useState: () => xm,
    useSyncExternalStore: () => Sm,
    useTransition: () => Cm,
    version: () => wm
  });
  kp = `__mf_init__virtual:mf:__mfe_internal__fullcalendar__mf_owner__78845261933133__mf_v__runtimeInit__mf_v__.js__`;
  Ap = globalThis[kp];
  if (!Ap) {
    let e2, t2, n2 = new Promise((n3, r2) => {
      e2 = n3, t2 = r2;
    });
    Ap = globalThis[kp] = {
      initPromise: n2,
      initResolve: e2,
      initReject: t2
    };
  }
  var jp = Ap.initPromise, z = `__mf_module_cache__`;
  globalThis[z] || (globalThis[z] = {
    share: {},
    remote: {}
  }), (_k = globalThis[z]).share || (_k.share = {}), (_l2 = globalThis[z]).remote || (_l2.remote = {});
  var B = globalThis[z], Mp = (e2) => {
    let t2 = B.pendingShareLoads || (B.pendingShareLoads = []);
    t2.push(e2);
    let n2 = () => {
      let n3 = t2.indexOf(e2);
      n3 !== -1 && t2.splice(n3, 1);
    };
    return e2.then(n2, n2), e2;
  };
  for (let e2 of Object.keys(B.share)) if (e2.startsWith(`default:`)) {
    let t2 = e2.slice(8);
    B.share[t2] === void 0 && (B.share[t2] = B.share[e2]);
  } else if (!e2.includes(`:`)) {
    let t2 = `default:` + e2;
    B.share[t2] === void 0 && (B.share[t2] = B.share[e2]);
  }
  let Np, Fp, zp, Vp, Hp, Up, Wp, Gp, Kp, qp, Jp, tm, rm, im, am, om, lm, um, fm, pm, vm, Sm, Cm, Tm;
  Np = (e2) => {
    let t2 = (() => {
      let t3 = e2;
      for (let e3 = 0; e3 < 5; e3++) {
        let e4 = t3 == null ? void 0 : t3.default;
        if (!e4 || typeof e4 != `object`) break;
        let n2 = Object.keys(t3).filter((e5) => e5 !== "default").map((e5) => t3[e5]);
        if (n2.length > 0 && n2.some((e5) => e5 !== void 0)) break;
        t3 = e4;
      }
      return t3;
    })();
    return t2 && Object.getPrototypeOf(t2) === null ? Object.assign({}, t2) : t2;
  };
  Tm = (e2) => {
    V = e2, Fp = e2.Activity, Ip = e2.Children, Lp = e2.Component, Rp = e2.Fragment, zp = e2.Profiler, Bp = e2.PureComponent, Vp = e2.StrictMode, Hp = e2.Suspense, Up = e2.ViewTransition, Wp = e2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Gp = e2.__COMPILER_RUNTIME, Kp = e2.addTransitionType, qp = e2.cache, Jp = e2.cacheSignal, Yp = e2.cloneElement, Xp = e2.createContext, Zp = e2.createElement, Qp = e2.createRef, $p = e2.forwardRef, em = e2.isValidElement, tm = e2.lazy, nm = e2.memo, rm = e2.startTransition, im = e2.unstable_useCacheRefresh, am = e2.use, om = e2.useActionState, sm = e2.useCallback, cm = e2.useContext, lm = e2.useDebugValue, um = e2.useDeferredValue, dm = e2.useEffect, fm = e2.useEffectEvent, pm = e2.useId, mm = e2.useImperativeHandle, hm = e2.useInsertionEffect, gm = e2.useLayoutEffect, _m = e2.useMemo, vm = e2.useOptimistic, ym = e2.useReducer, bm = e2.useRef, xm = e2.useState, Sm = e2.useSyncExternalStore, Cm = e2.useTransition, wm = e2.version, Pp = e2.default ?? e2;
  };
  a(B.share, {
    canonical: `default:react`,
    aliases: [
      `react`
    ]
  }, Tm);
  var V = n(B.share, {
    canonical: `default:react`,
    aliases: [
      `react`
    ]
  });
  V === void 0 ? Mp(jp.then(() => {
    if (V = n(B.share, {
      canonical: `default:react`,
      aliases: [
        `react`
      ]
    }), V !== void 0) Tm(V);
    else return t(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__78845261933133__prebuild__react__prebuild__-1B29m3mz.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }).then((e2) => {
      V = Np(e2), s(B.share, {
        canonical: `default:react`,
        aliases: [
          `react`
        ]
      }, V, `fullcalendar`);
    }), __vite__mapDeps([5]), import.meta.url);
  })) : Tm(V);
  let Dm, Om;
  Em = e({
    Fragment: () => Nm,
    __moduleExports: () => W,
    default: () => Mm,
    jsxDEV: () => Pm
  });
  Dm = `__mf_init__virtual:mf:__mfe_internal__fullcalendar__mf_owner__78845261933133__mf_v__runtimeInit__mf_v__.js__`;
  Om = globalThis[Dm];
  if (!Om) {
    let e2, t2, n2 = new Promise((n3, r2) => {
      e2 = n3, t2 = r2;
    });
    Om = globalThis[Dm] = {
      initPromise: n2,
      initResolve: e2,
      initReject: t2
    };
  }
  var km = Om.initPromise, H = `__mf_module_cache__`;
  globalThis[H] || (globalThis[H] = {
    share: {},
    remote: {}
  }), (_m2 = globalThis[H]).share || (_m2.share = {}), (_n2 = globalThis[H]).remote || (_n2.remote = {});
  var U = globalThis[H], Am = (e2) => {
    let t2 = U.pendingShareLoads || (U.pendingShareLoads = []);
    t2.push(e2);
    let n2 = () => {
      let n3 = t2.indexOf(e2);
      n3 !== -1 && t2.splice(n3, 1);
    };
    return e2.then(n2, n2), e2;
  };
  for (let e2 of Object.keys(U.share)) if (e2.startsWith(`default:`)) {
    let t2 = e2.slice(8);
    U.share[t2] === void 0 && (U.share[t2] = U.share[e2]);
  } else if (!e2.includes(`:`)) {
    let t2 = `default:` + e2;
    U.share[t2] === void 0 && (U.share[t2] = U.share[e2]);
  }
  var jm = (e2) => {
    let t2 = (() => {
      let t3 = e2;
      for (let e3 = 0; e3 < 5; e3++) {
        let e4 = t3 == null ? void 0 : t3.default;
        if (!e4 || typeof e4 != `object`) break;
        let n2 = Object.keys(t3).filter((e5) => e5 !== "default").map((e5) => t3[e5]);
        if (n2.length > 0 && n2.some((e5) => e5 !== void 0)) break;
        t3 = e4;
      }
      return t3;
    })();
    return t2 && Object.getPrototypeOf(t2) === null ? Object.assign({}, t2) : t2;
  }, Mm, Nm, Pm, Fm = (e2) => {
    W = e2, Nm = e2.Fragment, Pm = e2.jsxDEV, Mm = e2.default ?? e2;
  };
  a(U.share, {
    canonical: `default:react/jsx-dev-runtime`,
    aliases: [
      `react/jsx-dev-runtime`
    ]
  }, Fm);
  var W = n(U.share, {
    canonical: `default:react/jsx-dev-runtime`,
    aliases: [
      `react/jsx-dev-runtime`
    ]
  });
  W === void 0 ? Am(km.then(() => {
    if (W = n(U.share, {
      canonical: `default:react/jsx-dev-runtime`,
      aliases: [
        `react/jsx-dev-runtime`
      ]
    }), W !== void 0) Fm(W);
    else return t(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__78845261933133__prebuild__react_mf_1_jsx_mf_2_dev_mf_2_runtime__prebuild__-JH89NqeZ.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }).then((e2) => {
      W = jm(e2), s(U.share, {
        canonical: `default:react/jsx-dev-runtime`,
        aliases: [
          `react/jsx-dev-runtime`
        ]
      }, W, `fullcalendar`);
    }), [], import.meta.url);
  })) : Fm(W);
  let Lm, Rm;
  Im = e({
    Fragment: () => Um,
    __moduleExports: () => q,
    default: () => Hm,
    jsx: () => Wm,
    jsxs: () => Gm
  });
  Lm = `__mf_init__virtual:mf:__mfe_internal__fullcalendar__mf_owner__78845261933133__mf_v__runtimeInit__mf_v__.js__`;
  Rm = globalThis[Lm];
  if (!Rm) {
    let e2, t2, n2 = new Promise((n3, r2) => {
      e2 = n3, t2 = r2;
    });
    Rm = globalThis[Lm] = {
      initPromise: n2,
      initResolve: e2,
      initReject: t2
    };
  }
  var zm = Rm.initPromise, G = `__mf_module_cache__`;
  globalThis[G] || (globalThis[G] = {
    share: {},
    remote: {}
  }), (_o2 = globalThis[G]).share || (_o2.share = {}), (_p2 = globalThis[G]).remote || (_p2.remote = {});
  var K = globalThis[G], Bm = (e2) => {
    let t2 = K.pendingShareLoads || (K.pendingShareLoads = []);
    t2.push(e2);
    let n2 = () => {
      let n3 = t2.indexOf(e2);
      n3 !== -1 && t2.splice(n3, 1);
    };
    return e2.then(n2, n2), e2;
  };
  for (let e2 of Object.keys(K.share)) if (e2.startsWith(`default:`)) {
    let t2 = e2.slice(8);
    K.share[t2] === void 0 && (K.share[t2] = K.share[e2]);
  } else if (!e2.includes(`:`)) {
    let t2 = `default:` + e2;
    K.share[t2] === void 0 && (K.share[t2] = K.share[e2]);
  }
  let Vm, Hm, Km;
  Vm = (e2) => {
    let t2 = (() => {
      let t3 = e2;
      for (let e3 = 0; e3 < 5; e3++) {
        let e4 = t3 == null ? void 0 : t3.default;
        if (!e4 || typeof e4 != `object`) break;
        let n2 = Object.keys(t3).filter((e5) => e5 !== "default").map((e5) => t3[e5]);
        if (n2.length > 0 && n2.some((e5) => e5 !== void 0)) break;
        t3 = e4;
      }
      return t3;
    })();
    return t2 && Object.getPrototypeOf(t2) === null ? Object.assign({}, t2) : t2;
  };
  Km = (e2) => {
    q = e2, Um = e2.Fragment, Wm = e2.jsx, Gm = e2.jsxs, Hm = e2.default ?? e2;
  };
  a(K.share, {
    canonical: `default:react/jsx-runtime`,
    aliases: [
      `react/jsx-runtime`
    ]
  }, Km);
  var q = n(K.share, {
    canonical: `default:react/jsx-runtime`,
    aliases: [
      `react/jsx-runtime`
    ]
  });
  q === void 0 ? Bm(zm.then(() => {
    if (q = n(K.share, {
      canonical: `default:react/jsx-runtime`,
      aliases: [
        `react/jsx-runtime`
      ]
    }), q !== void 0) Km(q);
    else return t(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__78845261933133__prebuild__react_mf_1_jsx_mf_2_runtime__prebuild__-M61rjtmp.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }).then((e2) => {
      q = Vm(e2), s(K.share, {
        canonical: `default:react/jsx-runtime`,
        aliases: [
          `react/jsx-runtime`
        ]
      }, q, `fullcalendar`);
    }), [], import.meta.url);
  })) : Km(q);
  let Jm, Ym;
  qm = e({
    __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE: () => eh,
    __moduleExports: () => X,
    browser: () => th,
    createPortal: () => nh,
    default: () => $m,
    flushSync: () => rh,
    preconnect: () => ih,
    prefetchDNS: () => ah,
    preinit: () => oh,
    preinitModule: () => sh,
    preload: () => ch,
    preloadModule: () => lh,
    requestFormReset: () => uh,
    unstable_batchedUpdates: () => dh,
    useFormState: () => fh,
    useFormStatus: () => ph,
    version: () => mh
  });
  Jm = `__mf_init__virtual:mf:__mfe_internal__fullcalendar__mf_owner__78845261933133__mf_v__runtimeInit__mf_v__.js__`;
  Ym = globalThis[Jm];
  if (!Ym) {
    let e2, t2, n2 = new Promise((n3, r2) => {
      e2 = n3, t2 = r2;
    });
    Ym = globalThis[Jm] = {
      initPromise: n2,
      initResolve: e2,
      initReject: t2
    };
  }
  var Xm = Ym.initPromise, J = `__mf_module_cache__`;
  globalThis[J] || (globalThis[J] = {
    share: {},
    remote: {}
  }), (_q = globalThis[J]).share || (_q.share = {}), (_r2 = globalThis[J]).remote || (_r2.remote = {});
  var Y = globalThis[J], Zm = (e2) => {
    let t2 = Y.pendingShareLoads || (Y.pendingShareLoads = []);
    t2.push(e2);
    let n2 = () => {
      let n3 = t2.indexOf(e2);
      n3 !== -1 && t2.splice(n3, 1);
    };
    return e2.then(n2, n2), e2;
  };
  for (let e2 of Object.keys(Y.share)) if (e2.startsWith(`default:`)) {
    let t2 = e2.slice(8);
    Y.share[t2] === void 0 && (Y.share[t2] = Y.share[e2]);
  } else if (!e2.includes(`:`)) {
    let t2 = `default:` + e2;
    Y.share[t2] === void 0 && (Y.share[t2] = Y.share[e2]);
  }
  let Qm, $m, eh, th, ih, ah, oh, sh, ch, lh, uh, dh, fh, ph, mh, hh;
  Qm = (e2) => {
    let t2 = (() => {
      let t3 = e2;
      for (let e3 = 0; e3 < 5; e3++) {
        let e4 = t3 == null ? void 0 : t3.default;
        if (!e4 || typeof e4 != `object`) break;
        let n2 = Object.keys(t3).filter((e5) => e5 !== "default").map((e5) => t3[e5]);
        if (n2.length > 0 && n2.some((e5) => e5 !== void 0)) break;
        t3 = e4;
      }
      return t3;
    })();
    return t2 && Object.getPrototypeOf(t2) === null ? Object.assign({}, t2) : t2;
  };
  hh = (e2) => {
    X = e2, eh = e2.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, th = e2.browser, nh = e2.createPortal, rh = e2.flushSync, ih = e2.preconnect, ah = e2.prefetchDNS, oh = e2.preinit, sh = e2.preinitModule, ch = e2.preload, lh = e2.preloadModule, uh = e2.requestFormReset, dh = e2.unstable_batchedUpdates, fh = e2.useFormState, ph = e2.useFormStatus, mh = e2.version, $m = e2.default ?? e2;
  };
  a(Y.share, {
    canonical: `default:react-dom`,
    aliases: [
      `react-dom`
    ]
  }, hh);
  var X = n(Y.share, {
    canonical: `default:react-dom`,
    aliases: [
      `react-dom`
    ]
  });
  X === void 0 ? Zm(Xm.then(() => {
    if (X = n(Y.share, {
      canonical: `default:react-dom`,
      aliases: [
        `react-dom`
      ]
    }), X !== void 0) hh(X);
    else return t(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__78845261933133__prebuild__react_mf_2_dom__prebuild__-x6w-hndA.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }).then((e2) => {
      X = Qm(e2), s(Y.share, {
        canonical: `default:react-dom`,
        aliases: [
          `react-dom`
        ]
      }, X, `fullcalendar`);
    }), __vite__mapDeps([6,5]), import.meta.url);
  })) : hh(X);
  let _h, vh;
  gh = e({
    __moduleExports: () => $,
    createRoot: () => Ch,
    default: () => Sh,
    hydrateRoot: () => wh,
    version: () => Th
  });
  _h = `__mf_init__virtual:mf:__mfe_internal__fullcalendar__mf_owner__78845261933133__mf_v__runtimeInit__mf_v__.js__`;
  vh = globalThis[_h];
  if (!vh) {
    let e2, t2, n2 = new Promise((n3, r2) => {
      e2 = n3, t2 = r2;
    });
    vh = globalThis[_h] = {
      initPromise: n2,
      initResolve: e2,
      initReject: t2
    };
  }
  var yh = vh.initPromise, Z = `__mf_module_cache__`;
  globalThis[Z] || (globalThis[Z] = {
    share: {},
    remote: {}
  }), (_s2 = globalThis[Z]).share || (_s2.share = {}), (_t2 = globalThis[Z]).remote || (_t2.remote = {});
  var Q = globalThis[Z], bh = (e2) => {
    let t2 = Q.pendingShareLoads || (Q.pendingShareLoads = []);
    t2.push(e2);
    let n2 = () => {
      let n3 = t2.indexOf(e2);
      n3 !== -1 && t2.splice(n3, 1);
    };
    return e2.then(n2, n2), e2;
  };
  for (let e2 of Object.keys(Q.share)) if (e2.startsWith(`default:`)) {
    let t2 = e2.slice(8);
    Q.share[t2] === void 0 && (Q.share[t2] = Q.share[e2]);
  } else if (!e2.includes(`:`)) {
    let t2 = `default:` + e2;
    Q.share[t2] === void 0 && (Q.share[t2] = Q.share[e2]);
  }
  var xh = (e2) => {
    let t2 = (() => {
      let t3 = e2;
      for (let e3 = 0; e3 < 5; e3++) {
        let e4 = t3 == null ? void 0 : t3.default;
        if (!e4 || typeof e4 != `object`) break;
        let n2 = Object.keys(t3).filter((e5) => e5 !== "default").map((e5) => t3[e5]);
        if (n2.length > 0 && n2.some((e5) => e5 !== void 0)) break;
        t3 = e4;
      }
      return t3;
    })();
    return t2 && Object.getPrototypeOf(t2) === null ? Object.assign({}, t2) : t2;
  }, Sh, Ch, wh, Th, Eh = (e2) => {
    $ = e2, Ch = e2.createRoot, wh = e2.hydrateRoot, Th = e2.version, Sh = e2.default ?? e2;
  };
  a(Q.share, {
    canonical: `default:react-dom/client`,
    aliases: [
      `react-dom/client`
    ]
  }, Eh);
  var $ = n(Q.share, {
    canonical: `default:react-dom/client`,
    aliases: [
      `react-dom/client`
    ]
  });
  $ === void 0 ? bh(yh.then(() => {
    if ($ = n(Q.share, {
      canonical: `default:react-dom/client`,
      aliases: [
        `react-dom/client`
      ]
    }), $ !== void 0) Eh($);
    else return t(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__78845261933133__prebuild__react_mf_2_dom_mf_1_client__prebuild__-C2unmEaU.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }).then((e2) => {
      $ = xh(e2), s(Q.share, {
        canonical: `default:react-dom/client`,
        aliases: [
          `react-dom/client`
        ]
      }, $, `fullcalendar`);
    }), __vite__mapDeps([6,5]), import.meta.url);
  })) : Eh($);
})();
export {
  au as $,
  wm as A,
  Nt as At,
  P as B,
  S as Bt,
  mm as C,
  mt as Ct,
  ym as D,
  Tt as Dt,
  _m as E,
  xt as Et,
  Nf as F,
  _ as Ft,
  af as G,
  le as Gt,
  tf as H,
  w as Ht,
  El as I,
  v as It,
  df as J,
  xe as Jt,
  sf as K,
  ue as Kt,
  Yd as L,
  y as Lt,
  Pp as M,
  m as Mt,
  Op as N,
  h as Nt,
  bm as O,
  Ot,
  zf as P,
  g as Pt,
  tu as Q,
  Xd as R,
  b as Rt,
  dm as S,
  pt as St,
  gm as T,
  bt as Tt,
  nf as U,
  T as Ut,
  ef as V,
  C as Vt,
  rf as W,
  Ce as Wt,
  Dl as X,
  _e as Xt,
  kf as Y,
  me as Yt,
  Ol as Z,
  re as Zt,
  Lp as _,
  __tla,
  qe as _t,
  Um as a,
  hu as at,
  cm as b,
  dt as bt,
  Im as c,
  vl as ct,
  Yp as d,
  sl as dt,
  ou as et,
  Xp as f,
  E as ft,
  em as g,
  Ge as gt,
  $p as h,
  Fn as ht,
  qm as i,
  mu as it,
  Bp as j,
  Ft as jt,
  xm as k,
  Mt as kt,
  Em as l,
  ml as lt,
  Qp as m,
  D as mt,
  nh as n,
  kl as nt,
  Wm as o,
  gu as ot,
  Zp as p,
  He as pt,
  lf as q,
  ye as qt,
  rh as r,
  pu as rt,
  Gm as s,
  Su as st,
  gh as t,
  uu as tt,
  Ip as u,
  hl as ut,
  nm as v,
  nt as vt,
  hm as w,
  _t as wt,
  Rp as x,
  ft as xt,
  sm as y,
  ut as yt,
  Zd as z,
  x as zt
};
