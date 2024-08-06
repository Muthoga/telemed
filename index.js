const log = console.log
const error = console.error

const branches = [
    { name: 'Homa Bay', ipAddress: process.env.BRANCH_HOMA_BAY_IP, extension: process.env.BRANCH_HOMA_BAY_EXTENSION },
    { name: 'Lamu', ipAddress: process.env.BRANCH_LAMU_IP, extension: process.env.BRANCH_LAMU_EXTENSION },
    { name: 'Samburu', ipAddress: process.env.BRANCH_SAMBURU_IP, extension: process.env.BRANCH_SAMBURU_EXTENSION },
    { name: 'Chemoligot', ipAddress: process.env.BRANCH_CHEMOLIGOT_IP, extension: process.env.BRANCH_CHEMOLIGOT_EXTENSION },
    { name: 'Marigat', ipAddress: process.env.BRANCH_MARIGAT_IP, extension: process.env.BRANCH_MARIGAT_EXTENSION },
    { name: 'Talek(Narok)', ipAddress: process.env.BRANCH_TALEK_NAROK_IP, extension: process.env.BRANCH_TALEK_NAROK_EXTENSION }
];

function extractIpWithoutPort(ipWithPort) {
    // Split the string by the colon
    const parts = ipWithPort.split(':');
    
    // Return the first part, which is the IP address
    return parts[0];
  }


for (const branch of branches) {
    log(extractIpWithoutPort(branch.ipAddress))
    const proc = Bun.spawn(["ping", "-c", "4", extractIpWithoutPort(branch.ipAddress)])
    proc.exited.then((err) => {
        if (err === 0) {
            log(`${branch.name} is available`)
        } else {
            error(`${branch.name} is NOT available`, err)
        }
    })
}

function startCall(ipAddress) {
    window.location.href = `https://${ipAddress}`;
  }