const args = process.argv.slice(2);
if (args.length === 0) {
  console.log('please provide a timer');
  return;
}

const timer = function([newTimer, ...timers]) {
  let remainingTimers = timers.flat();
  if (newTimer.length > 0) {
    if (typeof +newTimer === 'number') {
      if (newTimer > 0) {
        setTimeout(() => console.log('your timer is up.'),(newTimer * 1000));
      }
    }
  }
  if (remainingTimers.length > 0) {
    timer(remainingTimers);
  }
};

timer(args);