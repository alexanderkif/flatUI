
import './scss/constants';

require.context('./', true, /\.scss$/);

function importAll(r) {
    r.keys().forEach(r);
}

importAll(require.context('./components/', true, /\.js$/));
