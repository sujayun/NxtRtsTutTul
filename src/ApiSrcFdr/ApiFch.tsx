const BesUrlVar = `https://64f573172b07270f705d3b4d.mockapi.io/`

export async function GetFchFnc(UrlVar: URL) {
    try {
        let ResVar = await fetch(BesUrlVar + UrlVar,{ "cache": "force-cache"});
        if (!ResVar.ok) {
            ApiErrTdoFnc()
        }
        return ResVar.json();
    } catch (ErrVar: any) {
        ApiErrTdoFnc(ErrVar);
    }
}

function ApiErrTdoFnc(ErrVar = "") {
    throw ErrVar || new Error("Failed to fetch data");
}