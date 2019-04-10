
function importAll(r) {
    r.keys().forEach(r);
}
importAll(require.context('./vendors/', true, /\.js$/));
require.context('./', true, /\.scss$/);
importAll(require.context('./components/', true, /\.js$/));
require.context('./img/', true, /\.(png|ico)$/);
