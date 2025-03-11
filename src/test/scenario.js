import {ConsoleMode, run } from '@memlab/api'

function url() {
  return 'http://localhost:4000/';
}
async function action(page) {
  console.log('Running scenario...');
    const startTimer = await page.$('button#start-timer');
    if (startTimer) await startTimer.click();
    if (startTimer) await startTimer.click();

    const endTimer = await page.$('button#end-timer');
    if (endTimer) await endTimer.click();
    if (endTimer) await endTimer.click();

    const resetTimer = await page.$('button#reset-timer');
    if (resetTimer) await resetTimer.click();

    const tab2 = await page.$('button#tab2');
    tab2 && await tab2.click();
    const tab1 = await page.$('button#tab1');
    tab1 && await tab1.click();
}
async function back(page) {
  const resetTimer = await page.$('button#reset-timer');
    if (resetTimer) await resetTimer.click();
    const tab2 = await page.$('button#tab2');
    tab2 && await tab2.click();
}

(async()=>{
  const scenario = {
    url,
    action,
    back,
  }
  await run({scenario, consoleMode:ConsoleMode.VERBOSE,workDir: '../',})
})()