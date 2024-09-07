import { PlatformGenerator } from "./generators/platform.generator";

const main = async () => {
    const platformGenerator = new PlatformGenerator('platform', 'native-decls');
    await platformGenerator.generate();
}

main();
