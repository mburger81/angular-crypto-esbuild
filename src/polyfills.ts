import * as process from "process";

if(!(window as any)["global"]) {
    (window as any)["global"] = window;
    global.Buffer = global.Buffer || require("buffer").Buffer;
    // global.crypto = global.crypto || require("crypto-browserify");
}

if(!(window as any)["process"]) {
    (window as any)["process"] = process;
}
