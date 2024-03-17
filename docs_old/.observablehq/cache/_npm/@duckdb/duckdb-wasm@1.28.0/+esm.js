/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/@duckdb/duckdb-wasm@1.28.0/dist/duckdb-browser.mjs
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import*as e from"../../apache-arrow@13.0.0/+esm.js";var s=Object.create;var t=Object.defineProperty;var a=Object.getOwnPropertyDescriptor;var r=Object.getOwnPropertyNames;var n=Object.getPrototypeOf,i=Object.prototype.hasOwnProperty;var o=(e,s)=>()=>(s||e((s={exports:{}}).exports,s),s.exports);var d=(e,s,n,o)=>{if(s&&typeof s=="object"||typeof s=="function")for(let d of r(s))!i.call(e,d)&&d!==n&&t(e,d,{get:()=>s[d],enumerable:!(o=a(s,d))||o.enumerable});return e};var c=(e,a,r)=>(r=e!=null?s(n(e)):{},d(a||!e||!e.__esModule?t(r,"default",{value:e,enumerable:!0}):r,e));var E=o(((e,s)=>{s.exports=Worker}));var l=(e=>(e[e.UNDEFINED=0]="UNDEFINED",e[e.AUTOMATIC=1]="AUTOMATIC",e[e.READ_ONLY=2]="READ_ONLY",e[e.READ_WRITE=3]="READ_WRITE",e))(l||{});var _=(e=>(e[e.IDENTIFIER=0]="IDENTIFIER",e[e.NUMERIC_CONSTANT=1]="NUMERIC_CONSTANT",e[e.STRING_CONSTANT=2]="STRING_CONSTANT",e[e.OPERATOR=3]="OPERATOR",e[e.KEYWORD=4]="KEYWORD",e[e.COMMENT=5]="COMMENT",e))(_||{});var u=(e=>(e[e.NONE=0]="NONE",e[e.DEBUG=1]="DEBUG",e[e.INFO=2]="INFO",e[e.WARNING=3]="WARNING",e[e.ERROR=4]="ERROR",e))(u||{}),T=(e=>(e[e.NONE=0]="NONE",e[e.CONNECT=1]="CONNECT",e[e.DISCONNECT=2]="DISCONNECT",e[e.OPEN=3]="OPEN",e[e.QUERY=4]="QUERY",e[e.INSTANTIATE=5]="INSTANTIATE",e))(T||{}),R=(e=>(e[e.NONE=0]="NONE",e[e.OK=1]="OK",e[e.ERROR=2]="ERROR",e[e.START=3]="START",e[e.RUN=4]="RUN",e[e.CAPTURE=5]="CAPTURE",e))(R||{}),p=(e=>(e[e.NONE=0]="NONE",e[e.WEB_WORKER=1]="WEB_WORKER",e[e.NODE_WORKER=2]="NODE_WORKER",e[e.BINDINGS=3]="BINDINGS",e[e.ASYNC_DUCKDB=4]="ASYNC_DUCKDB",e))(p||{}),h=class{log(e){}},I=class{constructor(e=2){this.level=e}log(e){e.level>=this.level&&console.log(e)}};function m(e){switch(e){case 0:return"NONE";case 1:return"DEBUG";case 2:return"INFO";case 3:return"WARNING";case 4:return"ERROR";default:return"?"}}function b(e){switch(e){case 0:return"NONE";case 1:return"OK";case 2:return"ERROR";case 3:return"START";case 4:return"RUN";case 5:return"CAPTURE";default:return"?"}}function S(e){switch(e){case 1:return"CONNECT";case 2:return"DISCONNECT";case 5:return"INSTANTIATE";case 3:return"OPEN";case 4:return"QUERY";default:return"?"}}function g(e){switch(e){case 0:return"NONE";case 1:return"WEB WORKER";case 2:return"NODE WORKER";case 3:return"DUCKDB BINDINGS";case 4:return"DUCKDB";default:return"?"}}var y=(e=>(e[e.SUCCESS=0]="SUCCESS",e))(y||{});var N=class{constructor(e,s){this._bindings=e,this._conn=s}get bindings(){return this._bindings}async close(){return this._bindings.disconnect(this._conn)}useUnsafe(e){return e(this._bindings,this._conn)}async query(s){this._bindings.logger.log({timestamp:new Date,level:2,origin:4,topic:4,event:4,value:s});let t=await this._bindings.runQuery(this._conn,s),a=e.RecordBatchReader.from(t);return console.assert(a.isSync(),"Reader is not sync"),console.assert(a.isFile(),"Reader is not file"),new e.Table(a)}async send(s){this._bindings.logger.log({timestamp:new Date,level:2,origin:4,topic:4,event:4,value:s});let t=await this._bindings.startPendingQuery(this._conn,s);for(;t==null;)t=await this._bindings.pollPendingQuery(this._conn);let a=new k(this._bindings,this._conn,t),r=await e.RecordBatchReader.from(a);return console.assert(r.isAsync()),console.assert(r.isStream()),r}async cancelSent(){return await this._bindings.cancelPendingQuery(this._conn)}async getTableNames(e){return await this._bindings.getTableNames(this._conn,e)}async prepare(e){let s=await this._bindings.createPrepared(this._conn,e);return new O(this._bindings,this._conn,s)}async insertArrowTable(s,t){let a=e.tableToIPC(s,"stream");await this.insertArrowFromIPCStream(a,t)}async insertArrowFromIPCStream(e,s){await this._bindings.insertArrowFromIPCStream(this._conn,e,s)}async insertCSVFromPath(e,s){await this._bindings.insertCSVFromPath(this._conn,e,s)}async insertJSONFromPath(e,s){await this._bindings.insertJSONFromPath(this._conn,e,s)}},k=class{constructor(e,s,t){this.db=e;this.conn=s;this.header=t;this._first=!0,this._depleted=!1,this._inFlight=null}async next(){if(this._first)return this._first=!1,{done:!1,value:this.header};if(this._depleted)return{done:!0,value:null};let e;return this._inFlight!=null?(e=await this._inFlight,this._inFlight=null):e=await this.db.fetchQueryResults(this.conn),this._depleted=e.length==0,this._depleted||(this._inFlight=this.db.fetchQueryResults(this.conn)),{done:this._depleted,value:e}}[Symbol.asyncIterator](){return this}},O=class{constructor(e,s,t){this.bindings=e,this.connectionId=s,this.statementId=t}async close(){await this.bindings.closePrepared(this.connectionId,this.statementId)}async query(...s){let t=await this.bindings.runPrepared(this.connectionId,this.statementId,s),a=e.RecordBatchReader.from(t);return console.assert(a.isSync()),console.assert(a.isFile()),new e.Table(a)}async send(...s){let t=await this.bindings.sendPrepared(this.connectionId,this.statementId,s),a=new k(this.bindings,this.connectionId,t),r=await e.RecordBatchReader.from(a);return console.assert(r.isAsync()),console.assert(r.isStream()),r}};var w=(e=>(e.CANCEL_PENDING_QUERY="CANCEL_PENDING_QUERY",e.CLOSE_PREPARED="CLOSE_PREPARED",e.COLLECT_FILE_STATISTICS="COLLECT_FILE_STATISTICS",e.CONNECT="CONNECT",e.COPY_FILE_TO_BUFFER="COPY_FILE_TO_BUFFER",e.COPY_FILE_TO_PATH="COPY_FILE_TO_PATH",e.CREATE_PREPARED="CREATE_PREPARED",e.DISCONNECT="DISCONNECT",e.DROP_FILE="DROP_FILE",e.DROP_FILES="DROP_FILES",e.EXPORT_FILE_STATISTICS="EXPORT_FILE_STATISTICS",e.FETCH_QUERY_RESULTS="FETCH_QUERY_RESULTS",e.FLUSH_FILES="FLUSH_FILES",e.GET_FEATURE_FLAGS="GET_FEATURE_FLAGS",e.GET_TABLE_NAMES="GET_TABLE_NAMES",e.GET_VERSION="GET_VERSION",e.GLOB_FILE_INFOS="GLOB_FILE_INFOS",e.INSERT_ARROW_FROM_IPC_STREAM="INSERT_ARROW_FROM_IPC_STREAM",e.INSERT_CSV_FROM_PATH="IMPORT_CSV_FROM_PATH",e.INSERT_JSON_FROM_PATH="IMPORT_JSON_FROM_PATH",e.INSTANTIATE="INSTANTIATE",e.OPEN="OPEN",e.PING="PING",e.POLL_PENDING_QUERY="POLL_PENDING_QUERY",e.REGISTER_FILE_BUFFER="REGISTER_FILE_BUFFER",e.REGISTER_FILE_HANDLE="REGISTER_FILE_HANDLE",e.REGISTER_FILE_URL="REGISTER_FILE_URL",e.RESET="RESET",e.RUN_PREPARED="RUN_PREPARED",e.RUN_QUERY="RUN_QUERY",e.SEND_PREPARED="SEND_PREPARED",e.START_PENDING_QUERY="START_PENDING_QUERY",e.TOKENIZE="TOKENIZE",e))(w||{}),F=(e=>(e.CONNECTION_INFO="CONNECTION_INFO",e.ERROR="ERROR",e.FEATURE_FLAGS="FEATURE_FLAGS",e.FILE_BUFFER="FILE_BUFFER",e.FILE_INFOS="FILE_INFOS",e.FILE_SIZE="FILE_SIZE",e.FILE_STATISTICS="FILE_STATISTICS",e.INSTANTIATE_PROGRESS="INSTANTIATE_PROGRESS",e.LOG="LOG",e.OK="OK",e.PREPARED_STATEMENT_ID="PREPARED_STATEMENT_ID",e.QUERY_PLAN="QUERY_PLAN",e.QUERY_RESULT="QUERY_RESULT",e.QUERY_RESULT_CHUNK="QUERY_RESULT_CHUNK",e.QUERY_RESULT_HEADER="QUERY_RESULT_HEADER",e.QUERY_RESULT_HEADER_OR_NULL="QUERY_RESULT_HEADER_OR_NULL",e.REGISTERED_FILE="REGISTERED_FILE",e.SCRIPT_TOKENS="SCRIPT_TOKENS",e.SUCCESS="SUCCESS",e.TABLE_NAMES="TABLE_NAMES",e.VERSION_STRING="VERSION_STRING",e))(F||{}),A=class{constructor(e,s){this.promiseResolver=()=>{};this.promiseRejecter=()=>{};this.type=e,this.data=s,this.promise=new Promise(((e,s)=>{this.promiseResolver=e,this.promiseRejecter=s}))}};function P(s){switch(s.typeId){case e.Type.Binary:return{sqlType:"binary"};case e.Type.Bool:return{sqlType:"bool"};case e.Type.Date:return{sqlType:"date"};case e.Type.DateDay:return{sqlType:"date32[d]"};case e.Type.DateMillisecond:return{sqlType:"date64[ms]"};case e.Type.Decimal:{let e=s;return{sqlType:"decimal",precision:e.precision,scale:e.scale}}case e.Type.Float:return{sqlType:"float"};case e.Type.Float16:return{sqlType:"float16"};case e.Type.Float32:return{sqlType:"float32"};case e.Type.Float64:return{sqlType:"float64"};case e.Type.Int:return{sqlType:"int32"};case e.Type.Int16:return{sqlType:"int16"};case e.Type.Int32:return{sqlType:"int32"};case e.Type.Int64:return{sqlType:"int64"};case e.Type.Uint16:return{sqlType:"uint16"};case e.Type.Uint32:return{sqlType:"uint32"};case e.Type.Uint64:return{sqlType:"uint64"};case e.Type.Uint8:return{sqlType:"uint8"};case e.Type.IntervalDayTime:return{sqlType:"interval[dt]"};case e.Type.IntervalYearMonth:return{sqlType:"interval[m]"};case e.Type.List:return{sqlType:"list",valueType:P(s.valueType)};case e.Type.FixedSizeBinary:return{sqlType:"fixedsizebinary",byteWidth:s.byteWidth};case e.Type.Null:return{sqlType:"null"};case e.Type.Utf8:return{sqlType:"utf8"};case e.Type.Struct:return{sqlType:"struct",fields:s.children.map((e=>L(e.name,e.type)))};case e.Type.Map:{let e=s;return{sqlType:"map",keyType:P(e.keyType),valueType:P(e.valueType)}}case e.Type.Time:return{sqlType:"time[s]"};case e.Type.TimeMicrosecond:return{sqlType:"time[us]"};case e.Type.TimeMillisecond:return{sqlType:"time[ms]"};case e.Type.TimeNanosecond:return{sqlType:"time[ns]"};case e.Type.TimeSecond:return{sqlType:"time[s]"};case e.Type.Timestamp:return{sqlType:"timestamp",timezone:s.timezone||void 0};case e.Type.TimestampSecond:return{sqlType:"timestamp[s]",timezone:s.timezone||void 0};case e.Type.TimestampMicrosecond:return{sqlType:"timestamp[us]",timezone:s.timezone||void 0};case e.Type.TimestampNanosecond:return{sqlType:"timestamp[ns]",timezone:s.timezone||void 0};case e.Type.TimestampMillisecond:return{sqlType:"timestamp[ms]",timezone:s.timezone||void 0}}throw new Error("unsupported arrow type: ".concat(s.toString()))}function L(e,s){let t=P(s);return t.name=e,t}var C=new TextEncoder,U=class{constructor(e,s=null){this._onInstantiationProgress=[];this._worker=null;this._workerShutdownPromise=null;this._workerShutdownResolver=()=>{};this._nextMessageId=0;this._pendingRequests=new Map;this._logger=e,this._onMessageHandler=this.onMessage.bind(this),this._onErrorHandler=this.onError.bind(this),this._onCloseHandler=this.onClose.bind(this),s!=null&&this.attach(s)}get logger(){return this._logger}attach(e){this._worker=e,this._worker.addEventListener("message",this._onMessageHandler),this._worker.addEventListener("error",this._onErrorHandler),this._worker.addEventListener("close",this._onCloseHandler),this._workerShutdownPromise=new Promise(((e,s)=>{this._workerShutdownResolver=e}))}detach(){this._worker&&(this._worker.removeEventListener("message",this._onMessageHandler),this._worker.removeEventListener("error",this._onErrorHandler),this._worker.removeEventListener("close",this._onCloseHandler),this._worker=null,this._workerShutdownResolver(null),this._workerShutdownPromise=null,this._workerShutdownResolver=()=>{})}async terminate(){this._worker&&(this._worker.terminate(),this._worker=null,this._workerShutdownPromise=null,this._workerShutdownResolver=()=>{})}async postTask(e,s=[]){if(!this._worker){console.error("cannot send a message since the worker is not set!");return}let t=this._nextMessageId++;return this._pendingRequests.set(t,e),this._worker.postMessage({messageId:t,type:e.type,data:e.data},s),await e.promise}onMessage(e){var s;let t=e.data;switch(t.type){case"LOG":{this._logger.log(t.data);return}case"INSTANTIATE_PROGRESS":{for(let e of this._onInstantiationProgress)e(t.data);return}}let a=this._pendingRequests.get(t.requestId);if(!a){console.warn("unassociated response: [".concat(t.requestId,", ").concat(t.type.toString(),"]"));return}if(this._pendingRequests.delete(t.requestId),t.type=="ERROR"){let e=new Error(t.data.message);e.name=t.data.name,(s=Object.getOwnPropertyDescriptor(e,"stack"))!=null&&s.writable&&(e.stack=t.data.stack),a.promiseRejecter(e);return}switch(a.type){case"CLOSE_PREPARED":case"COLLECT_FILE_STATISTICS":case"COPY_FILE_TO_PATH":case"DISCONNECT":case"DROP_FILE":case"DROP_FILES":case"FLUSH_FILES":case"INSERT_ARROW_FROM_IPC_STREAM":case"IMPORT_CSV_FROM_PATH":case"IMPORT_JSON_FROM_PATH":case"OPEN":case"PING":case"REGISTER_FILE_BUFFER":case"REGISTER_FILE_HANDLE":case"REGISTER_FILE_URL":case"RESET":if(t.type=="OK"){a.promiseResolver(t.data);return}break;case"INSTANTIATE":if(this._onInstantiationProgress=[],t.type=="OK"){a.promiseResolver(t.data);return}break;case"GLOB_FILE_INFOS":if(t.type=="FILE_INFOS"){a.promiseResolver(t.data);return}break;case"GET_VERSION":if(t.type=="VERSION_STRING"){a.promiseResolver(t.data);return}break;case"GET_FEATURE_FLAGS":if(t.type=="FEATURE_FLAGS"){a.promiseResolver(t.data);return}break;case"GET_TABLE_NAMES":if(t.type=="TABLE_NAMES"){a.promiseResolver(t.data);return}break;case"TOKENIZE":if(t.type=="SCRIPT_TOKENS"){a.promiseResolver(t.data);return}break;case"COPY_FILE_TO_BUFFER":if(t.type=="FILE_BUFFER"){a.promiseResolver(t.data);return}break;case"EXPORT_FILE_STATISTICS":if(t.type=="FILE_STATISTICS"){a.promiseResolver(t.data);return}break;case"CONNECT":if(t.type=="CONNECTION_INFO"){a.promiseResolver(t.data);return}break;case"RUN_PREPARED":case"RUN_QUERY":if(t.type=="QUERY_RESULT"){a.promiseResolver(t.data);return}break;case"SEND_PREPARED":if(t.type=="QUERY_RESULT_HEADER"){a.promiseResolver(t.data);return}break;case"START_PENDING_QUERY":if(t.type=="QUERY_RESULT_HEADER_OR_NULL"){a.promiseResolver(t.data);return}break;case"POLL_PENDING_QUERY":if(t.type=="QUERY_RESULT_HEADER_OR_NULL"){a.promiseResolver(t.data);return}break;case"CANCEL_PENDING_QUERY":if(this._onInstantiationProgress=[],t.type=="SUCCESS"){a.promiseResolver(t.data);return}break;case"FETCH_QUERY_RESULTS":if(t.type=="QUERY_RESULT_CHUNK"){a.promiseResolver(t.data);return}break;case"CREATE_PREPARED":if(t.type=="PREPARED_STATEMENT_ID"){a.promiseResolver(t.data);return}break}a.promiseRejecter(new Error("unexpected response type: ".concat(t.type.toString())))}onError(e){console.error(e),console.error("error in duckdb worker: ".concat(e.message)),this._pendingRequests.clear()}onClose(){if(this._workerShutdownResolver(null),this._pendingRequests.size!=0){console.warn("worker terminated with ".concat(this._pendingRequests.size," pending requests"));return}this._pendingRequests.clear()}async reset(){let e=new A("RESET",null);return await this.postTask(e)}async ping(){let e=new A("PING",null);await this.postTask(e)}async dropFile(e){let s=new A("DROP_FILE",e);return await this.postTask(s)}async dropFiles(){let e=new A("DROP_FILES",null);return await this.postTask(e)}async flushFiles(){let e=new A("FLUSH_FILES",null);return await this.postTask(e)}async instantiate(e,s=null,t=(e=>{})){this._onInstantiationProgress.push(t);let a=new A("INSTANTIATE",[e,s]);return await this.postTask(a)}async getVersion(){let e=new A("GET_VERSION",null);return await this.postTask(e)}async getFeatureFlags(){let e=new A("GET_FEATURE_FLAGS",null);return await this.postTask(e)}async open(e){let s=new A("OPEN",e);await this.postTask(s)}async tokenize(e){let s=new A("TOKENIZE",e);return await this.postTask(s)}async connectInternal(){let e=new A("CONNECT",null);return await this.postTask(e)}async connect(){let e=await this.connectInternal();return new N(this,e)}async disconnect(e){let s=new A("DISCONNECT",e);await this.postTask(s)}async runQuery(e,s){let t=new A("RUN_QUERY",[e,s]);return await this.postTask(t)}async startPendingQuery(e,s){let t=new A("START_PENDING_QUERY",[e,s]);return await this.postTask(t)}async pollPendingQuery(e){let s=new A("POLL_PENDING_QUERY",e);return await this.postTask(s)}async cancelPendingQuery(e){let s=new A("CANCEL_PENDING_QUERY",e);return await this.postTask(s)}async fetchQueryResults(e){let s=new A("FETCH_QUERY_RESULTS",e);return await this.postTask(s)}async getTableNames(e,s){let t=new A("GET_TABLE_NAMES",[e,s]);return await this.postTask(t)}async createPrepared(e,s){let t=new A("CREATE_PREPARED",[e,s]);return await this.postTask(t)}async closePrepared(e,s){let t=new A("CLOSE_PREPARED",[e,s]);await this.postTask(t)}async runPrepared(e,s,t){let a=new A("RUN_PREPARED",[e,s,t]);return await this.postTask(a)}async sendPrepared(e,s,t){let a=new A("SEND_PREPARED",[e,s,t]);return await this.postTask(a)}async globFiles(e){let s=new A("GLOB_FILE_INFOS",e);return await this.postTask(s)}async registerFileText(e,s){let t=C.encode(s);await this.registerFileBuffer(e,t)}async registerFileURL(e,s,t,a){s===void 0&&(s=e);let r=new A("REGISTER_FILE_URL",[e,s,t,a]);await this.postTask(r)}async registerEmptyFileBuffer(e){let s=new A("REGISTER_FILE_BUFFER",[e,new Uint8Array]);await this.postTask(s)}async registerFileBuffer(e,s){let t=new A("REGISTER_FILE_BUFFER",[e,s]);await this.postTask(t,[s.buffer])}async registerFileHandle(e,s,t,a){let r=new A("REGISTER_FILE_HANDLE",[e,s,t,a]);await this.postTask(r,[])}async collectFileStatistics(e,s){let t=new A("COLLECT_FILE_STATISTICS",[e,s]);await this.postTask(t,[])}async exportFileStatistics(e){let s=new A("EXPORT_FILE_STATISTICS",e);return await this.postTask(s,[])}async copyFileToBuffer(e){let s=new A("COPY_FILE_TO_BUFFER",e);return await this.postTask(s)}async copyFileToPath(e,s){let t=new A("COPY_FILE_TO_PATH",[e,s]);await this.postTask(t)}async insertArrowFromIPCStream(e,s,t){if(s.length==0)return;let a=new A("INSERT_ARROW_FROM_IPC_STREAM",[e,s,t]);await this.postTask(a,[s.buffer])}async insertCSVFromPath(e,s,t){if(t.columns!==void 0){let e=[];for(let s in t.columns){let a=t.columns[s];e.push(L(s,a))}t.columnsFlat=e,delete t.columns}let a=new A("IMPORT_CSV_FROM_PATH",[e,s,t]);await this.postTask(a)}async insertJSONFromPath(e,s,t){if(t.columns!==void 0){let e=[];for(let s in t.columns){let a=t.columns[s];e.push(L(s,a))}t.columnsFlat=e,delete t.columns}let a=new A("IMPORT_JSON_FROM_PATH",[e,s,t]);await this.postTask(a)}};var f=class{constructor(){this._bindings=null;this._nextMessageId=0}log(e){this.postMessage({messageId:this._nextMessageId++,requestId:0,type:"LOG",data:e},[])}sendOK(e){this.postMessage({messageId:this._nextMessageId++,requestId:e.messageId,type:"OK",data:null},[])}failWith(e,s){let t={name:s.name,message:s.message,stack:s.stack||void 0};this.postMessage({messageId:this._nextMessageId++,requestId:e.messageId,type:"ERROR",data:t},[])}async onMessage(e){switch(e.type){case"PING":this.sendOK(e);return;case"INSTANTIATE":this._bindings!=null&&this.failWith(e,new Error("duckdb already initialized"));try{this._bindings=await this.instantiate(e.data[0],e.data[1],(s=>{this.postMessage({messageId:this._nextMessageId++,requestId:e.messageId,type:"INSTANTIATE_PROGRESS",data:s},[])})),this.sendOK(e)}catch(s){console.log(s),this._bindings=null,this.failWith(e,s)}return}if(!this._bindings)return this.failWith(e,new Error("duckdb is not initialized"));try{switch(e.type){case"GET_VERSION":this.postMessage({messageId:this._nextMessageId++,requestId:e.messageId,type:"VERSION_STRING",data:this._bindings.getVersion()},[]);break;case"GET_FEATURE_FLAGS":this.postMessage({messageId:this._nextMessageId++,requestId:e.messageId,type:"FEATURE_FLAGS",data:this._bindings.getFeatureFlags()},[]);break;case"RESET":this._bindings.reset(),this.sendOK(e);break;case"OPEN":this._bindings.open(e.data),this.sendOK(e);break;case"DROP_FILE":this._bindings.dropFile(e.data),this.sendOK(e);break;case"DROP_FILES":this._bindings.dropFiles(),this.sendOK(e);break;case"FLUSH_FILES":this._bindings.flushFiles(),this.sendOK(e);break;case"CONNECT":{let s=this._bindings.connect();this.postMessage({messageId:this._nextMessageId++,requestId:e.messageId,type:"CONNECTION_INFO",data:s.useUnsafe(((e,s)=>s))},[]);break}case"DISCONNECT":this._bindings.disconnect(e.data),this.sendOK(e);break;case"CREATE_PREPARED":{let s=this._bindings.createPrepared(e.data[0],e.data[1]);this.postMessage({messageId:this._nextMessageId++,requestId:e.messageId,type:"PREPARED_STATEMENT_ID",data:s},[]);break}case"CLOSE_PREPARED":{this._bindings.closePrepared(e.data[0],e.data[1]),this.sendOK(e);break}case"RUN_PREPARED":{let s=this._bindings.runPrepared(e.data[0],e.data[1],e.data[2]);this.postMessage({messageId:this._nextMessageId++,requestId:e.messageId,type:"QUERY_RESULT",data:s},[s.buffer]);break}case"RUN_QUERY":{let s=this._bindings.runQuery(e.data[0],e.data[1]);this.postMessage({messageId:this._nextMessageId++,requestId:e.messageId,type:"QUERY_RESULT",data:s},[s.buffer]);break}case"SEND_PREPARED":{let s=this._bindings.sendPrepared(e.data[0],e.data[1],e.data[2]);this.postMessage({messageId:this._nextMessageId++,requestId:e.messageId,type:"QUERY_RESULT_HEADER",data:s},[s.buffer]);break}case"START_PENDING_QUERY":{let s=this._bindings.startPendingQuery(e.data[0],e.data[1]),t=[];s&&t.push(s.buffer),this.postMessage({messageId:this._nextMessageId++,requestId:e.messageId,type:"QUERY_RESULT_HEADER_OR_NULL",data:s},t);break}case"POLL_PENDING_QUERY":{let s=this._bindings.pollPendingQuery(e.data),t=[];s&&t.push(s.buffer),this.postMessage({messageId:this._nextMessageId++,requestId:e.messageId,type:"QUERY_RESULT_HEADER_OR_NULL",data:s},t);break}case"CANCEL_PENDING_QUERY":{let s=this._bindings.cancelPendingQuery(e.data);this.postMessage({messageId:this._nextMessageId++,requestId:e.messageId,type:"SUCCESS",data:s},[]);break}case"FETCH_QUERY_RESULTS":{let s=this._bindings.fetchQueryResults(e.data);this.postMessage({messageId:this._nextMessageId++,requestId:e.messageId,type:"QUERY_RESULT_CHUNK",data:s},[s.buffer]);break}case"GET_TABLE_NAMES":{let s=this._bindings.getTableNames(e.data[0],e.data[1]);this.postMessage({messageId:this._nextMessageId++,requestId:e.messageId,type:"TABLE_NAMES",data:s},[]);break}case"GLOB_FILE_INFOS":{let s=this._bindings.globFiles(e.data);this.postMessage({messageId:this._nextMessageId++,requestId:e.messageId,type:"FILE_INFOS",data:s},[]);break}case"REGISTER_FILE_URL":this._bindings.registerFileURL(e.data[0],e.data[1],e.data[2],e.data[3]),this.sendOK(e);break;case"REGISTER_FILE_BUFFER":this._bindings.registerFileBuffer(e.data[0],e.data[1]),this.sendOK(e);break;case"REGISTER_FILE_HANDLE":this._bindings.registerFileHandle(e.data[0],e.data[1],e.data[2],e.data[3]),this.sendOK(e);break;case"COPY_FILE_TO_PATH":this._bindings.copyFileToPath(e.data[0],e.data[1]),this.sendOK(e);break;case"COPY_FILE_TO_BUFFER":{let s=this._bindings.copyFileToBuffer(e.data);this.postMessage({messageId:this._nextMessageId++,requestId:e.messageId,type:"FILE_BUFFER",data:s},[]);break}case"COLLECT_FILE_STATISTICS":this._bindings.collectFileStatistics(e.data[0],e.data[1]),this.sendOK(e);break;case"EXPORT_FILE_STATISTICS":{this.postMessage({messageId:this._nextMessageId++,requestId:e.messageId,type:"FILE_STATISTICS",data:this._bindings.exportFileStatistics(e.data)},[]);break}case"INSERT_ARROW_FROM_IPC_STREAM":{this._bindings.insertArrowFromIPCStream(e.data[0],e.data[1],e.data[2]),this.sendOK(e);break}case"IMPORT_CSV_FROM_PATH":{this._bindings.insertCSVFromPath(e.data[0],e.data[1],e.data[2]),this.sendOK(e);break}case"IMPORT_JSON_FROM_PATH":{this._bindings.insertJSONFromPath(e.data[0],e.data[1],e.data[2]),this.sendOK(e);break}case"TOKENIZE":{let s=this._bindings.tokenize(e.data);this.postMessage({messageId:this._nextMessageId++,requestId:e.messageId,type:"SCRIPT_TOKENS",data:s},[]);break}}}catch(s){return console.log(s),this.failWith(e,s)}}};var D=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,3,1,0,1,10,14,1,12,0,65,0,65,0,65,0,252,10,0,0,11])),v=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,8,1,6,0,6,64,25,11,11]));var M=async()=>WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]));var G=()=>(async e=>{try{return typeof MessageChannel<"u"&&(new MessageChannel).port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(e)}catch(e){return!1}})(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]));var j={name:"@duckdb/duckdb-wasm",version:"1.28.0",description:"DuckDB powered by WebAssembly",license:"MIT",repository:{type:"git",url:"https://github.com/duckdb/duckdb-wasm.git"},keywords:["sql","duckdb","relational","database","data","query","wasm","analytics","olap","arrow","parquet","json","csv"],dependencies:{"apache-arrow":"^13.0.0"},devDependencies:{"@types/emscripten":"^1.39.8","@types/jasmine":"^4.3.1","@typescript-eslint/eslint-plugin":"^6.5.0","@typescript-eslint/parser":"^6.7.3",esbuild:"^0.19.5",eslint:"^8.50.0","eslint-plugin-jasmine":"^4.1.3","eslint-plugin-react":"^7.33.2","fast-glob":"^3.3.1",jasmine:"^5.1.0","jasmine-core":"^5.1.1","jasmine-spec-reporter":"^7.0.0","js-sha256":"^0.9.0",karma:"^6.4.2","karma-chrome-launcher":"^3.2.0","karma-coverage":"^2.2.1","karma-firefox-launcher":"^2.1.2","karma-jasmine":"^5.1.0","karma-jasmine-html-reporter":"^2.1.0","karma-sourcemap-loader":"^0.4.0","karma-spec-reporter":"^0.0.36","make-dir":"^4.0.0",nyc:"^15.1.0",prettier:"^3.0.2",puppeteer:"^21.1.1",rimraf:"^5.0.5",s3rver:"^3.7.1",typedoc:"^0.25.2",typescript:"^5.2.2","wasm-feature-detect":"^1.5.1","web-worker":"^1.2.0"},scripts:{"build:debug":"node bundle.mjs debug && tsc --emitDeclarationOnly","build:release":"node bundle.mjs release && tsc --emitDeclarationOnly",docs:"typedoc",report:"node ./coverage.mjs","test:node":"node --enable-source-maps ../../node_modules/jasmine/bin/jasmine ./dist/tests-node.cjs","test:node:debug":"node --inspect-brk --enable-source-maps ../../node_modules/jasmine/bin/jasmine ./dist/tests-node.cjs","test:node:coverage":"nyc -r json --report-dir ./coverage/node node ../../node_modules/jasmine/bin/jasmine ./dist/tests-node.cjs","test:firefox":"karma start ./karma/tests-firefox.cjs","test:chrome":"karma start ./karma/tests-chrome.cjs","test:chrome:eh":"karma start ./karma/tests-chrome-eh.cjs","test:chrome:coverage":"karma start ./karma/tests-chrome-coverage.cjs","test:browser":"karma start ./karma/tests-all.cjs","test:browser:debug":"karma start ./karma/tests-debug.cjs",test:"npm run test:chrome && npm run test:node","test:coverage":"npm run test:chrome:coverage && npm run test:node:coverage && npm run report",lint:"eslint src test"},files:["dist","!dist/types/test"],main:"dist/duckdb-browser.cjs",module:"dist/duckdb-browser.mjs",types:"dist/duckdb-browser.d.ts",jsdelivr:"dist/duckdb-browser.cjs",unpkg:"dist/duckdb-browser.mjs",sideEffects:!1,browser:{fs:!1,path:!1,perf_hooks:!1,os:!1,worker_threads:!1},exports:{"./dist/duckdb-mvp.wasm":"./dist/duckdb-mvp.wasm","./dist/duckdb-eh.wasm":"./dist/duckdb-eh.wasm","./dist/duckdb-coi.wasm":"./dist/duckdb-coi.wasm","./dist/duckdb-browser":"./dist/duckdb-browser.mjs","./dist/duckdb-browser.cjs":"./dist/duckdb-browser.cjs","./dist/duckdb-browser.mjs":"./dist/duckdb-browser.mjs","./dist/duckdb-browser-blocking":"./dist/duckdb-browser-blocking.mjs","./dist/duckdb-browser-blocking.mjs":"./dist/duckdb-browser-blocking.mjs","./dist/duckdb-browser-blocking.cjs":"./dist/duckdb-browser-blocking.cjs","./dist/duckdb-browser-coi.pthread.worker.js":"./dist/duckdb-browser-coi.pthread.worker.js","./dist/duckdb-browser-coi.worker.js":"./dist/duckdb-browser-coi.worker.js","./dist/duckdb-browser-eh.worker.js":"./dist/duckdb-browser-eh.worker.js","./dist/duckdb-browser-mvp.worker.js":"./dist/duckdb-browser-mvp.worker.js","./dist/duckdb-node":"./dist/duckdb-node.cjs","./dist/duckdb-node.cjs":"./dist/duckdb-node.cjs","./dist/duckdb-node-blocking":"./dist/duckdb-node-blocking.cjs","./dist/duckdb-node-blocking.cjs":"./dist/duckdb-node-blocking.cjs","./dist/duckdb-node-eh.worker.cjs":"./dist/duckdb-node-eh.worker.cjs","./dist/duckdb-node-mvp.worker.cjs":"./dist/duckdb-node-mvp.worker.cjs","./blocking":{browser:{types:"./dist/duckdb-browser-blocking.d.ts",import:"./dist/duckdb-browser-blocking.mjs",require:"./dist/duckdb-browser-blocking.cjs"},node:{types:"./dist/duckdb-node-blocking.d.ts",require:"./dist/duckdb-node-blocking.cjs",import:"./dist/duckdb-node-blocking.cjs"},types:"./dist/duckdb-browser-blocking.d.ts",import:"./dist/duckdb-browser-blocking.mjs",require:"./dist/duckdb-browser-blocking.cjs"},".":{browser:{types:"./dist/duckdb-browser.d.ts",import:"./dist/duckdb-browser.mjs",require:"./dist/duckdb-browser.cjs"},node:{types:"./dist/duckdb-node.d.ts",import:"./dist/duckdb-node.cjs",require:"./dist/duckdb-node.cjs"},types:"./dist/duckdb-browser.d.ts",import:"./dist/duckdb-browser.mjs",require:"./dist/duckdb-browser.cjs"}}};var q=j.name,B=j.version,Y=j.version.split("."),Q=Y[0],H=Y[1],K=Y[2];var W=()=>typeof navigator>"u",x=()=>W()?"node":navigator.userAgent,V=()=>x().includes("Firefox"),z=()=>/^((?!chrome|android).)*safari/i.test(x());function J(){let e="https://cdn.jsdelivr.net/npm/".concat(q,"@").concat(B,"/dist/");return{mvp:{mainModule:"".concat(e,"duckdb-mvp.wasm"),mainWorker:"".concat(e,"duckdb-browser-mvp.worker.js")},eh:{mainModule:"".concat(e,"duckdb-eh.wasm"),mainWorker:"".concat(e,"duckdb-browser-eh.worker.js")}}}var Z=null,X=null,$=null,ee=null,se=null;async function te(){return Z==null&&(Z=typeof BigInt64Array<"u"),X==null&&(X=await v()),$==null&&($=await G()),ee==null&&(ee=await M()),se==null&&(se=await D()),{bigInt64Array:Z,crossOriginIsolated:W()||globalThis.crossOriginIsolated||!1,wasmExceptions:X,wasmSIMD:ee,wasmThreads:$,wasmBulkMemory:se}}async function ae(e){let s=await te();if(s.wasmExceptions){if(s.wasmSIMD&&s.wasmThreads&&s.crossOriginIsolated&&e.coi)return{mainModule:e.coi.mainModule,mainWorker:e.coi.mainWorker,pthreadWorker:e.coi.pthreadWorker};if(e.eh)return{mainModule:e.eh.mainModule,mainWorker:e.eh.mainWorker,pthreadWorker:null}}return{mainModule:e.mvp.mainModule,mainWorker:e.mvp.mainWorker,pthreadWorker:null}}var re=c(E());async function ne(e){let s=new Request(e),t=await fetch(s),a=URL.createObjectURL(await t.blob());return new re.default(a)}function ie(){let e=new TextDecoder;return s=>(typeof SharedArrayBuffer<"u"&&s.buffer instanceof SharedArrayBuffer&&(s=new Uint8Array(s)),e.decode(s))}ie();var oe=(e=>(e[e.BUFFER=0]="BUFFER",e[e.NODE_FS=1]="NODE_FS",e[e.BROWSER_FILEREADER=2]="BROWSER_FILEREADER",e[e.BROWSER_FSACCESS=3]="BROWSER_FSACCESS",e[e.HTTP=4]="HTTP",e[e.S3=5]="S3",e))(oe||{});export{U as AsyncDuckDB,N as AsyncDuckDBConnection,f as AsyncDuckDBDispatcher,O as AsyncPreparedStatement,k as AsyncResultStreamIterator,I as ConsoleLogger,l as DuckDBAccessMode,oe as DuckDBDataProtocol,R as LogEvent,u as LogLevel,p as LogOrigin,T as LogTopic,q as PACKAGE_NAME,B as PACKAGE_VERSION,Q as PACKAGE_VERSION_MAJOR,H as PACKAGE_VERSION_MINOR,K as PACKAGE_VERSION_PATCH,y as StatusCode,_ as TokenType,h as VoidLogger,w as WorkerRequestType,F as WorkerResponseType,A as WorkerTask,ne as createWorker,J as getJsDelivrBundles,b as getLogEventLabel,m as getLogLevelLabel,g as getLogOriginLabel,S as getLogTopicLabel,te as getPlatformFeatures,V as isFirefox,W as isNode,z as isSafari,ae as selectBundle};export default null;
