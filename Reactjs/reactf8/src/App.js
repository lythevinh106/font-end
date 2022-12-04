import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import HocState from "./baihoc/useState/hocUseState";
import BtState from "./baihoc/useState/baitapuseState1";
import BtState2 from "./baihoc/useState/baitapuseState2";
import BtStateTodo from "./baihoc/useState/baitapStateTodo";
import HocEffect1 from "./baihoc/useEffect/hocEffect1";
import HocEffect2 from "./baihoc/useEffect/hocEffect2";
import HocEffect3 from "./baihoc/useEffect/hocEffect3";
import HocEffectWithTimer from "./baihoc/useEffect/hocEffectWithTimer";
import BtEffect1 from "./baihoc/useEffect/BtEffect1";
import BtEffect2 from "./baihoc/useEffect/BtEffect2";
import UseLayoutEffect from "./baihoc/useEffect/useLayoutEffect";
import HocUseRef1 from "./baihoc/useRef/hocUseRef";
import HocUseRef2 from "./baihoc/useRef/hocUseRef2";
import HocMemo from "./baihoc/HOC/memo";
import HocUseCallBack1 from "./baihoc/useCallback/hocUseCallback1";
import HocUseMemo1 from "./baihoc/useMemo/hocUseMemo1";
import HocUseReducer from "./baihoc/useReducer/hocUseReducer1";
import HocUseReducer2 from "./baihoc/useReducer/hocUseReducer2";
import HocUseContext1 from "./baihoc/UseContext/hocUseContext1";
import HocUseContextWithReduce from "./baihoc/UseContext/hocUseContextWithReduce";
import HocUseImperativeHandle from "./baihoc/useImperativeHandle/hocUseImperativeHandle";
import HocCss2 from "./baihoc/HocCssModule/hocCss2";
import HocCss1 from "./baihoc/HocCssModule/hocCss1";
import HocCss3Libary from "./baihoc/HocCssModule/hocCss3Libary";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      {/*--------------- <HocState /> */}
      {/* <HocState /> */}
      {/* <BtState /> */}
      {/* <BtState2 /> */}
      {/* <BtStateTodo /> */}
      {/*-------mounted and unmouted:gow hoac bat compnent*/}
      {/* <button onClick={() => setShow(!show)}>bat tat</button>
      {show && <BtState />} */}
      {/*--------------------------hoc useeffect*/}
      <button onClick={() => setShow(!show)}>bat tat</button>
      {/* {show && <HocEffect1 />} */}
      {/* {show && <HocEffect2 />} */}
      {/* {show && <HocEffect3 />} */}
      {/* {show && <HocEffectWithTimer />} */}
      {/* {show && <BtEffect1 />} */}
      {/* {show && <BtEffect2 />} */}
      {/* {<UseLayoutEffect />} */}
      {/*--------------------------hoc usse ref*/}
      {/* <HocUseRef1 /> */}
      {/* <HocUseRef2 /> */}

      {/* --------------------------hoc HOC*/}
      {/* <HocMemo /> */}

      {/*--------------------------hoc useCallback*/}
      <HocUseCallBack1 />

      {/*--------------------------hoc useMEmo*/}

      {/* <HocUseMemo1 /> */}

      {/*--------------------------hoc useReducer*/}

      {/* <HocUseReducer /> */}
      {/* <HocUseReducer2 /> */}

      {/*--------------------------hoc userContext*/}

      {/* <HocUseContext1 /> */}
      {/* <HocUseContextWithReduce /> */}

      {/*--------------------------hoc useImperativeHandle*/}
      {/* <HocUseImperativeHandle /> */}
      {/*--------------------------hoc CSs module*/}

      {/* <HocCss2 /> */}
      {/* <HocCss1 /> */}
      {/* <HocCss3Libary /> */}
    </div>
  );
}

export default App;
