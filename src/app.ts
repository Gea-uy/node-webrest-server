import { envs } from "./config/envs";
import { Server } from "./presentation/server";




(async () => {
    main();
})();


async function main() {

    const server = new Server({
        port:envs.PORT,
        public_path:envs.PUBLIC_PATH
    });
    server.start();
}