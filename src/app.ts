// Notas:
// Para ejecutar esta tarea necesitaremos: npm run dev o npm run dev:nodemon
// *Estamos integrando tsx ya que ts-node chafió*

import { yarg } from './config/plugins/args.plugins';


(async () => {
    await main();
})();


async function main() {
    console.log(yarg);
}






// console.log(yarg.b);

// console.log(process.argv);

