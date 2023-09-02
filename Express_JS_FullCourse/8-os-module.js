const os = require("os");

//info about current user
const user = os.userInfo();
console.log(user);
// {
//     uid: -1,
//     gid: -1,
//     username: 'pawel.macyszyn',
//     homedir: 'C:\\Users\\pawel.macaszyn',
//     shell: null
//   }

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);
// The System Uptime is 30366.796 seconds

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
// console.log(currentOS);
// {
//     name: 'Windows_NT',
//     release: '10.0.22621',
//     totalMem: 33974345728,
//     freeMem: 21210701824
//   }