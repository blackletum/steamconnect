const server = location.search.slice(1);
if (server) {
    location.assign("steam://connect/" + server);
} 