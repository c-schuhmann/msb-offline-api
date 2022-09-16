interface IMsbAppError {
  code: number;
  message: string;
  html?: string;
}
interface IProfile {
  readonly application: string;
  readonly currentApplication: string;
  readonly ip: string;
  readonly port: number;
  readonly service: string;
  readonly sapClient: string;
  readonly offlineService: string;
  readonly language: string;
  readonly ssl: boolean;
  readonly scaling: number;
  readonly loglevel: number;
  readonly offline: boolean;
  readonly currentUser: string;
  readonly currentLicence: string;
  readonly cameraScanning: boolean;
  readonly backgroundColor: string;
}

interface IOfflineRequest {
  readonly application: string;
  readonly connection: IProfile;
  readonly event?: string;
  readonly eventType?: string;
  readonly language: string;
  readonly mask: number;
  readonly transaction: string;
  readonly user: string;
}

interface IOfflineResponse {
  application: string;
  language: string;
  mask: number;
  transaction: string;
  message?: {
    type: string;
    text: string;
  };
}

interface IOfflineComponent {
  ACTIVE: string;
  ALLOWRESIZING: string;
  ALLOWSORTING: string;
  APPL: string;
  AUTO_PRESS: string;
  BALIGN_BMP: string;
  BALIGN_TXT: string;
  BFILENAME: string;
  BSCALING: string;
  CCHECK_AUTH: string;
  CCOL: string;
  CCOLSPAN: string;
  CDATAELEM: string;
  CDATATYPE: string;
  CENABLED: string;
  CEVENT: string;
  CEVENTTYPE: string;
  CFIELDFILL: string;
  CFORCOMP: string;
  CGROUP: string;
  CH2OFF: string;
  CH2ONL: string;
  CHIDDEN: string;
  CINPUTTYPE: string;
  CKEYPAD: string;
  CLEN: string;
  CLEVEL: string;
  CLOWERCASE: string;
  COCCURS: string;
  COMPID: string;
  CONFIRM_INP: string;
  CPASSWORD: string;
  CPREC: string;
  CREADONLY: string;
  CREQUIRED: string;
  CROW: string;
  CROWSPAN: string;
  CSTYLE: string;
  CTABINDEX: string;
  CTYPE: string;
  CVALUE: string;
  CVALUELIST: string;
  CVALUELTYPE: string;
  CVISLEN: string;
  CXPOS: string;
  CXSIZE: string;
  CYPOS: string;
  CYSIZE: string;
  DESCR: string;
  DESCR2: string;
  DEVICETYPE: string;
  EVENTTYPE_CH2OFF: string;
  EVENTTYPE_CH2ONL: string;
  EVENT_CH2OFF: string;
  EVENT_CH2ONL: string;
  FALIGN: string;
  FALIGN2: string;
  FATTRIB: string;
  FATTRIB2: string;
  FCOLOR: string;
  FCOLOR2: string;
  FOCUS: string;
  FONTW: string;
  FROZENCOLS: string;
  FROZENROWS: string;
  FSIZE: string;
  FSIZE2: string;
  FTYPE: string;
  FTYPE2: string;
  GBCOLOR: string;
  GBCOLOR2: string;
  GLOBALDATA: string;
  KEYCODE: string;
  LAST_CHANGE_DATE: string;
  LAST_CHANGE_TIME: string;
  LAST_CHANGE_USER: string;
  LINK_COMPID: string;
  MASKID: string;
  MULTISELECT: string;
  SCANNER_ACTIVE: string;
  SCREENGROUP1: string;
  SCREENGROUP2: string;
  SCREENGROUP3: string;
  SCREENGROUP4: string;
  SHORTCODE: string;
  SUBSCR_APPL: string;
  SUBSCR_MASK: string;
  SUBSCR_TCODE: string;
  TCODE: string;
  VALUELIST: any[];
  VOICE_CMD: string;
  VOICE_CMDID: string;
  VOICE_CMDPREFIX: string;
  VOICE_IN: string;
  VOICE_OUT: string;
  VOICE_TEXT: string;
}
